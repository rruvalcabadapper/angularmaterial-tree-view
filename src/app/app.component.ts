import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  retos: any = [
    {
      id: 1,
      name: 'Reto 1',
    },
    {
      id: 2,
      name: 'Reto 2',
    },
    {
      id: 3,
      name: 'Reto 3',
    }
  ];
  variaciones = [
    {
      id: 1,
      idPadre: 1,
      name: 'A',
    },
    {
      id: 2,
      idPadre: 2,
      name: 'B',
    },
    {
      id: 3,
      idPadre: 3,
      name: 'C',
    },
    {
      id: 3,
      idPadre: 1,
      name: 'B',
    }
  ];
  equivalencia = [
    {
      id: 1,
      idPadre: 1,
      name: '9',
    },
    {
      id: 2,
      idPadre: 1,
      name: '10',
    },
    {
      id: 3,
      idPadre: 2,
      name: '11',
    }
  ];

  currentReto: any;
  currentVariation: any;
  selectedVariation = [];
  selectedEquivalencia = [];

  goToVariation(id) {
    this.currentReto = id;
    this.currentVariation = null;
    this.selectedVariation = [];
    this.selectedEquivalencia = [];
    for (let i = 0; i < this.variaciones.length; i++) {
      const element = this.variaciones[i];
      console.log(element);
      if (element.idPadre == id) {
        this.selectedVariation.push(element)
      }
    }
  }
  goToEquivalencia(id) {
    var element = document.getElementById("paneles");
    var elemet_retos = document.getElementById("panel-retos");
    if (element.classList.contains('transition33')) {
      element.classList.remove("transition33");
      element.classList.add("transition0");
      elemet_retos.classList.remove("oculto")
    }
    this.currentVariation = id;
    this.selectedEquivalencia = [];
    for (let i = 0; i < this.equivalencia.length; i++) {
      const element = this.equivalencia[i];
      console.log(element);
      if (element.idPadre == id) {
        this.selectedEquivalencia.push(element)
      }
    }
  }

  goToData() {
    var element = document.getElementById("paneles");
    var elemet_retos = document.getElementById("panel-retos");
    element.classList.remove("transition0");
    element.classList.add("transition33");
    elemet_retos.classList.add("oculto")
  }
}
