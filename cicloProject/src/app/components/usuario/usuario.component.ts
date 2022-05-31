import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from 'src/app/models/entities';
import { Ruta } from 'src/app/models/entities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  usuarios?: Usuario[];
  rutas?: Ruta[];
  submitted = false;
  logInSubmitted = false;
  error = false;
  error_msg = "";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsers();
    this.retrieveRutas();
  }

  logInUsuario(email: any, password: any): void {
    this.usuarioService.getUserByLogIn(email, password).subscribe({
      next: (data) => {
        this.usuario = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
    this.logInSubmitted = true;
    this.retrieveRutas();
  }

  retrieveRutas(): void {
    this.usuarioService.getRutasByUser(this.usuario.idUser).subscribe({
      next: (data) => {
        this.rutas = data;
        console.log(data);
        this.logInSubmitted = true;
      },
      error: (e) => console.error(e),
    })
  }

  retrieveUsers(): void {
    this.usuarioService.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  saveUsuario() : void {

    let data = {
      username: this.usuario.username,
      email: this.usuario.email,
      password: this.usuario.password,   
    };
    this.error = false;
    this.error_msg = "";
    this.usuarioService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.error = false;
        this.retrieveUsers();
      },
      error: (e) => { 
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message
      }
    });
  }
  newUsuario() : void {
    this.submitted = false;
    this.logInSubmitted = false;
    this.usuario = new Usuario;
    this.error = false;
    this.error_msg = "";
    this.retrieveUsers();
  }


}
