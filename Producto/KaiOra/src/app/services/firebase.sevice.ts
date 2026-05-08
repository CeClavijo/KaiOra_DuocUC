import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }
}
