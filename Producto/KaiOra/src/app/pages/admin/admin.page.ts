import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/services/utils';
import { CreateCourseModalComponent } from 'src/app/shared/components/modals/create-course-modal/create-course-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false
})
export class AdminPage {
  utilsSvc = inject(Utils);
  isMobile: boolean = window.innerWidth < 768;

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }

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
