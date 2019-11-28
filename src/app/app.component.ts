import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  listeTaches : any[] = [
    {
      title: 'faire la vaisselle',
      isDone: false
    },
    {
      title: 'faire à manger',
      isDone: false
    }
  ]

  nouveauTitre: String;

  isPopupOpen: boolean=false;

  add(){
    var maNouvelleTache={
      title: this.nouveauTitre,
      isDone: false
    }
    this.listeTaches.push(maNouvelleTache)
    this.isPopupOpen=false
    this.nouveauTitre=''
  }

  managePopup() {
    this.isPopupOpen=!this.isPopupOpen;
    this.nouveauTitre=''
  }
}
