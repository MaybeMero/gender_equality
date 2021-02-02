import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'informazione';
  results : Object[];
  obs : Observable<object>;
 constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10dati()
  {
    this.obs = this.http.get("https://3001-ee640781-2481-4f30-bdae-184c7bfb9a27.ws-eu03.gitpod.io/dati");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
}
}
