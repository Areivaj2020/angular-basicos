import { NgModule } from "@angular/core";
import { ÉµassignExtraOptionsToRouter } from "@angular/router";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})
export class ContadorModule {}