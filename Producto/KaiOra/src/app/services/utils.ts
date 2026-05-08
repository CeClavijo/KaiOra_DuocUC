import { inject, Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  modalCtrl = inject(ModalController);
  
  // Modal (no modificar gracias)
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
