import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.sevice';
import { inject } from '@angular/core';
import { User } from 'src/app/models/user.model';

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

  ngOnInit() {
  }


  submit() {
  console.log("Valores que se envían:", this.form.value); // <--- MIRA ESTO EN LA CONSOLA
  if (this.form.valid) {
    this.firebaseSvc.signIn(this.form.value as User).then(res => {
      console.log(res);
    }).catch(err => {
      console.error("Error detallado:", err.code);
    })
  }
}

}
