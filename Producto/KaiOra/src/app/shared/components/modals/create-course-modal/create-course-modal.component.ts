import { Component, inject, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/utils';

@Component({
  selector: 'app-create-course-modal',
  templateUrl: './create-course-modal.component.html',
  styleUrls: ['./create-course-modal.component.scss'],
  standalone: false,
})
export class CreateCourseModalComponent  {

  utilsSvc = inject(Utils);

  dismissModal() {
    this.utilsSvc.dismissModal();
  }
}
