import { inject, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  modalCtrl = inject(ModalController);
  
  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
