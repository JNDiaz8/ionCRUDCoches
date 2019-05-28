import { Component, OnInit } from '@angular/core';
import { Coche } from '../modelo/coche';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  coche: Coche = {marca: '', modelo: '', color: '', anio: null};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cocheFirestore: CochesService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cocheFirestore.getCoche(params.get('id')))
      ).subscribe(
        (coche) => {
          this.coche.marca;
          this.coche.modelo;
          this.coche.color;
          this.coche.anio;
        }
      );
  }

  updateCoche() {
    let modificadoCoche: Coche = {
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };
    this.cocheFirestore.updateCoche(modificadoCoche)
    .then(
      () => {
        console.log('Se han modificado los datos.');
        this.router.navigate(['list']);
      }
    );
  }

  volver() {
    this.router.navigate(['list']);
  }

}
