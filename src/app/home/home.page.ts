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

  get fechaActual(): string {
    return this._fechaActual;
  }

  set fechaActual(value: string) {
    this._fechaActual = value;
    this.resetFechaFuturaOnChange();
  }

  constructor() {}

  calcularFechaFutura() {
    if (this._fechaActual && this.diasParaSumar !== null) {
      let fecha = new Date(this._fechaActual);
      fecha.setDate(fecha.getDate() + this.diasParaSumar);
      this.fechaFutura = fecha;
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
