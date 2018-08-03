import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimemapComponent } from './realtimemap/realtimemap.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';


const routes = [
  {
      path: "realtimemap",
      component: RealtimemapComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCK_53yyks73x-Bd4JVGN5ARuxHzFphZDk'
    })
  ],
  declarations: [RealtimemapComponent]
})

export class MapModule { 
}
