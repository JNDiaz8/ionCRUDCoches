import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { Coche } from '../modelo/coche';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  coches: Observable<Coche[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cochesService: CochesService) {}


  ngOnInit() {
    this.coches = this.cochesService.getCoches();
  }

  getCoche(slidingItem, coche: Coche) {
    this.router.navigate(['detalle/', coche.id]);
  }

  editarCoche(slidingItem, coche: Coche) {
    this.router.navigate(['update/', coche.id]);
  }

  borrarCoche(slidingItem, coche: Coche) {
    this.cochesService.borrarCoche(coche);
  }

}
