import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Utils } from 'src/app/services/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(Utils);
  router = inject(Router);

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        const email = this.form.get('email')?.value as string;
        const password = this.form.get('password')?.value as string;

        await this.firebaseSvc.signIn(email, password);
        this.router.navigate(['/admin']);
      } catch (error) {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'Error al iniciar sesión',
          duration: 2500,
          position: 'top',
          color: 'danger',
          icon: 'alert-circle-outline'
        })
      } finally {
        loading.dismiss();
      }
    }
  }
}
