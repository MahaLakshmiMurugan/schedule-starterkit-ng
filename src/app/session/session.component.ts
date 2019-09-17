import { Component, OnInit } from '@angular/core';
import {SessionService} from './session.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  sessionData:any;

  constructor(private sessionservice:SessionService) {
    this.sessionservice.getSessionData().subscribe((data:any)=>{this.sessionData=data});
  }

  ngOnInit() {
  }

}
