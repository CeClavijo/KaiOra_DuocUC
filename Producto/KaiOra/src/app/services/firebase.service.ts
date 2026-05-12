import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query, updateDoc, deleteDoc } from '@angular/fire/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { Admin, Teacher, Student, AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  // ==================== AUTH ====================

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  signOut() {
    return signOut(getAuth());
  }

  // ==================== CREATE USERS ====================

  // Crear Admin
  async createAdmin(admin: Omit<Admin, 'uid' | 'createdAt' | 'updatedAt'>) {
    try {
      // Crear en Firebase Auth
      const authUser = await createUserWithEmailAndPassword(
        getAuth(),
        admin.email,
        admin.password
      );

      const uid = authUser.user.uid;
      const now = new Date();

      // Guardar en Firestore
      const adminData: Admin = {
        ...admin,
        uid,
        createdAt: now,
        updatedAt: now,
      };

      await this.firestore.collection('users').doc(uid).set(adminData);

      return { success: true, uid };
    } catch (error) {
      console.error('Error creando admin:', error);
      throw error;
    }
  }

  // Crear Profesor
  async createTeacher(teacher: Omit<Teacher, 'uid' | 'createdAt' | 'updatedAt'>) {
    try {
      const authUser = await createUserWithEmailAndPassword(
        getAuth(),
        teacher.email,
        teacher.password
      );

      const uid = authUser.user.uid;
      const now = new Date();

      const teacherData: Teacher = {
        ...teacher,
        uid,
        createdAt: now,
        updatedAt: now,
      };

      await this.firestore.collection('users').doc(uid).set(teacherData);

      return { success: true, uid };
    } catch (error) {
      console.error('Error creando profesor:', error);
      throw error;
    }
  }

  // Crear Alumno
  async createStudent(student: Omit<Student, 'uid' | 'createdAt' | 'updatedAt'>) {
    try {
      const authUser = await createUserWithEmailAndPassword(
        getAuth(),
        student.email,
        student.password
      );

      const uid = authUser.user.uid;
      const now = new Date();

      const studentData: Student = {
        ...student,
        uid,
        createdAt: now,
        updatedAt: now,
      };

      await this.firestore.collection('users').doc(uid).set(studentData);

      return { success: true, uid };
    } catch (error) {
      console.error('Error creando alumno:', error);
      throw error;
    }
  }

  // ==================== GET USERS ====================

  getUser(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  getAllTeachers() {
    return this.firestore
      .collection<Teacher>('users', ref => ref.where('role', '==', 'profesor'))
      .valueChanges();
  }

  getAllStudents() {
    return this.firestore
      .collection<Student>('users', ref => ref.where('role', '==', 'alumno'))
      .valueChanges();
  }

  getAllUsers() {
    return this.firestore.collection('users').valueChanges();
  }

  // ==================== UPDATE ====================

  updateUser(uid: string, data: Partial<AppUser>) {
    return this.firestore.collection('users').doc(uid).update({
      ...data,
      updatedAt: new Date(),
    });
  }

  // ==================== DELETE ====================

  deleteUser(uid: string) {
    return this.firestore.collection('users').doc(uid).delete();
  }

  // =================== Base de datos ===================
  // ================== Fichas Tecnicas ==================
  getCollectiondata(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, ...collectionQuery))
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  deleteDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }
}
