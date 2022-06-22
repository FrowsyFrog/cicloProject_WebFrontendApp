import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from 'src/app/models/entities';
import { Ruta } from 'src/app/models/entities';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  usuario: Usuario = new Usuario;
  rutas?: Ruta[];
  logInSubmitted = false;
  showRutas = false;
  error = false;
  error_msg = "";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
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
  }
  
  retrieveRutas(): void {
    if(this.showRutas == false) {
      this.showRutas = true;
      this.usuarioService.getRutasByUser(this.usuario.idUser).subscribe({
        next: (data) => {
          this.rutas = data;
          console.log(data);
          this.logInSubmitted = true;
        },
        error: (e) => console.error(e),
      })
    }
    else {
      this.showRutas = false;
    }
  }
  
  newUsuario() : void {
    this.logInSubmitted = false;
    this.showRutas = false;
    this.usuario = new Usuario;
    this.error = false;
    this.error_msg = "";
  }

}
