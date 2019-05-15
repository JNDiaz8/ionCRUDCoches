import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Coche } from '../modelo/coche';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CochesService {

  coches = 'coches';

  constructor(private db: AngularFirestore) {}

  getCoches() {
    return this.db.collection<Coche>(this.coches).snapshotChanges().pipe(
      map( coches => {
        return coches.map(
          coche => {
            const data = coche.payload.doc.data();
            const key = coche.payload.doc.id;
            return {id: key, ...data};
          }
        );
      })
    );
  }

  altaCoche(coche: Coche) {
    return this.db.collection<Coche>(this.coches).add(coche);
  }


}
