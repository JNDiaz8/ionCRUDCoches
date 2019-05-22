import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CochesService } from '../servicios/coches.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  coches;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cochesService: CochesService) { }

  ngOnInit() {
    this.coches = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cochesService.getCoche(params.get('id')))
      );
  }

  atras() {
    this.router.navigate(['list']);
  }

}
