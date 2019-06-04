import { Component, OnInit } from '@angular/core';
import { Coche } from '../modelo/coche';
import { Router, ActivatedRoute } from '@angular/router';
import { CochesService } from '../servicios/coches.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  coche: Coche = {marca: '', modelo: '', color: '', anio: null};

  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cocheFirestore: CochesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.cocheFirestore.getCoche(this.id).subscribe(
        (coche) => {
          console.log(coche);
          this.coche.marca = coche.get('marca');
          this.coche.modelo = coche.get('modelo');
          this.coche.color = coche.get('color');
          this.coche.anio = coche.get('anio');
        }
      );
  }

  updateCoche() {
    let modificadoCoche: Coche = {
      id: this.id,
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };
    this.cocheFirestore.updateCoche(modificadoCoche)
    .then(
      () => {
        this.router.navigate(['list']);
      }
    );
  }

  volver() {
    this.router.navigate(['list']);
  }

}
