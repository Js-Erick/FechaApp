import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private _fechaActual: string = new Date().toISOString();
  public diasParaSumar: number | null = null;
  public fechaFutura: Date | null = null;
  public errorMessage: string | null = null;


  get fechaActual(): string {
    return this._fechaActual;
  }

  set fechaActual(value: string) {
    this._fechaActual = value;
    this.resetFechaFuturaOnChange();
  }

  constructor() {}

  calcularFechaFutura() {
    this.errorMessage = null; 
    
    if (this._fechaActual) {
      if (this.diasParaSumar !== null && Number.isInteger(this.diasParaSumar)) {
        let fecha = new Date(this._fechaActual);
        fecha.setDate(fecha.getDate() + this.diasParaSumar);
        this.fechaFutura = fecha;
      } else {
        this.errorMessage = "Por favor, ingrese un número entero.";
      }
    }
  }
  

  resetFechaFuturaOnChange() {
    this.fechaFutura = null;
  }

  resetFechaFuturaOnInput() {
    if (!this.diasParaSumar) {
      this.fechaFutura = null;
    }
  }
}
