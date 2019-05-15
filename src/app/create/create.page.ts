import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { Coche } from '../modelo/coche';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  coche: Coche = {marca: '', modelo: '', color: '', anio: null};

  constructor(
    private router: Router,
    private cocheFirestore: CochesService
    ) { }

  ngOnInit() {
  }

  nuevoCoche() {
    let nuevoCoche: Coche = {
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };

    this.cocheFirestore.altaCoche(nuevoCoche).then(
      () => this.router.navigate(['coches'])
    );
  }

}
