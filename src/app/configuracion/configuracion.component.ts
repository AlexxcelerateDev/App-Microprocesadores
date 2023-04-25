import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  modal = false;
  modal_guardado = false;
  numPersonas: any;
  limiteLitros: any;

  constructor(private ls: LocalStorageService){}

  ngOnInit(){
    this.numPersonas = this.ls.leerDatos("numPersonas");  
    this.limiteLitros = this.ls.leerDatos("limiteLitros");

    if(!this.numPersonas || !this.limiteLitros){
      let botonGuardar = document.getElementById("guardar-btn") as HTMLButtonElement;
      botonGuardar.disabled = true;
      botonGuardar.style.animationDuration = "0s";
      botonGuardar.style.opacity = "50%";
    }
  }

  
  validarInputs(){    
    let botonGuardar = document.getElementById("guardar-btn") as HTMLButtonElement;

    if(!this.numPersonas || !this.limiteLitros){
      botonGuardar.disabled = true;
      botonGuardar.style.animationDuration = "0s";
      botonGuardar.style.opacity = "50%";
    }else{
      botonGuardar.disabled = false;
      botonGuardar.style.animationDuration = "0.5s";
      botonGuardar.style.opacity = "100%";
    }
  }  


  guardarConfiguracion(){
    this.modal_guardado = true;
    this.ls.guardarDatos("numPersonas", this.numPersonas);
    this.ls.guardarDatos("limiteLitros", this.limiteLitros);
    console.log("Configuracion guardada");
  }
}
