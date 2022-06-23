import { RutaService } from 'src/app/services/ruta.service';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from 'src/app/models/entities';
import { Ruta } from 'src/app/models/entities';
import { RutaxCiclovia } from 'src/app/models/entities';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  usuario: Usuario = new Usuario;
  ruta: Ruta = new Ruta;
  rutas?: Ruta[];
  rutaxCiclovias?: RutaxCiclovia[];
  logInSubmitted = false;
  showRutas = false;
  rutaSelected = false;
  error = false;
  error_msg = "";
  calorias?: number;

  constructor(private usuarioService: UsuarioService, private rutaService: RutaService) { }

  ngOnInit(): void {
  }

  logInUsuario(email: any, password: any): void {
    this.usuarioService.getUserByLogIn(email, password).subscribe({
      next: (data) => {
        this.usuario = data;
        console.log(data);
        this.logInSubmitted = true;
        this.error = false;
      },
      error: (e) => {
        console.error(e);
        this.error = true;
        this.error_msg = e.error.message;
      },
    });
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
  retrieveCiclovias(ruta: Ruta): void {
    this.ruta = ruta;
    if(this.rutaSelected == false) {
      this.rutaSelected = true;
      this.rutaService.getCicloviasByRuta(ruta.idRuta).subscribe({
        next: (data) => {
          this.rutaxCiclovias = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      })
      this.usuarioService.getTiempoByRuta(ruta.idRuta).subscribe({
        next: (data) => {
          let aux = data;
          this.calorias = aux.tiempoRealizado;
        },
        error:(e) => console.error(e),
      });
    }
    else {
      this.rutaSelected = false;
    }
  }
  newUsuario() : void {
    this.logInSubmitted = false;
    this.showRutas = false;
    this.rutaSelected = false;
    this.usuario = new Usuario;
    this.error = false;
    this.error_msg = "";
  }

}
