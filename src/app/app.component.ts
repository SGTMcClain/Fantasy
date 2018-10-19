import { Component } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFirestore } from '@angular/fire/firestore';
import { League } from 'src/models/LeagueModel';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  template:
  `
    <ul>
        <li *ngFor="let item of items | async">
            <pre>{{ item | json }}</pre>
        </li>
    </ul>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Fantasy';

  public items: Observable<any[]>;
  constructor(db: AngularFirestore) {
      this.items = db.collection('/items').valueChanges();
  }
}
