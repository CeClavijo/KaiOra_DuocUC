import { inject, Injectable } from '@angular/core';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class Utils {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  modalCtrl = inject(ModalController);

  // ======= Loading ========
  loading(){
    return this.loadingCtrl.create({spinner: 'crescent' })
  }

  // ======= Toast ========
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    await toast.present();
  }
  
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }
}
