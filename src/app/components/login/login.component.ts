import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
         this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para autenticar al usuario
      console.log(this.loginForm.value);
      console.log("Formulario valido");
      this.router.navigateByUrl('/catalogo');
    } else {
      console.log("Formulario invalido faltan datos ");
      // Manejar errores de validación
    }
  }
}
