import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';
import { SessionService } from './session.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SessionRoutingModule
  ],
  declarations: [
    SessionComponent
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
