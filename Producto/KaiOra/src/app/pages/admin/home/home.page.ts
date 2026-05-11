import { Component, inject, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/utils';
import { CreateCourseModalComponent } from 'src/app/shared/components/modals/create-course-modal/create-course-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  utilsSvc = inject(Utils);

  async addClass() {
    let success = await this.utilsSvc.presentModal({
      component: CreateCourseModalComponent,
      cssClass: 'create-course-modal',
      componentProps: {},
    });

    if (success) {
      console.log('Curso creado:', success);
    }
  }
}


