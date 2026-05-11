import { Component, inject, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/utils';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
  standalone: false
})
export class ProfesoresPage {
  utilsSvc = inject(Utils);

  async addTeacher() {
    // Aquí irá el modal de crear profesor
    console.log('Abrir modal crear profesor');
  }
}
