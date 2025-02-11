import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userStatusColor='';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit():void{}

  logout(): void {
    this.afAuth.auth.signOut();
}



}
