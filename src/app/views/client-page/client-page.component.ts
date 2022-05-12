import { StorageServiceService } from './../../services/storage-service.service';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-client-page',
  templateUrl:'./client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  
  
  public dolar:Array<any> = []
  personaService: any;
  constructor(private storage: StorageServiceService, ) {

  }

  ngOnInit(): void {
    this.storage.theresAnyUserLogged();
  }

  logout() {
    this.storage.logout();
  }

  

  

}
