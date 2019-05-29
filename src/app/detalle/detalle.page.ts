import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { switchMap } from 'rxjs/operators';
import { Coche } from '../modelo/coche';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  coche: Coche = {id: null, marca: '', modelo: '', color: '', anio: null};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cochesService: CochesService) { }

    ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');

      this.cochesService.getCoche(id).subscribe(
          (coche) => {
            console.log(coche);
            this.coche.marca = coche.get('marca');
            this.coche.modelo = coche.get('modelo');
            this.coche.color = coche.get('color');
            this.coche.anio = coche.get('anio');
          }
        );
    }

  atras() {
    this.router.navigate(['list']);
  }

}
