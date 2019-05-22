import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { Observable } from 'rxjs';
import { Coche } from '../modelo/coche';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  coches;

  constructor(
    private router: Router,
    private cochesService: CochesService) {}

  ngOnInit() {
    this.coches = this.cochesService.getCoches();
  }

  verCoche(slidingItem, coche: Coche) {
    this.cochesService.verCoche(coche);
  }

  editarCoche(slidingItem, coche: Coche) {
    this.cochesService.editarCoche(coche);

  }

  borrarCoche(slidingItem, coche: Coche) {
    this.cochesService.borrarCoche(coche);
  }

}
