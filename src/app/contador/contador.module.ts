import { NgModule } from "@angular/core";
import { ɵassignExtraOptionsToRouter } from "@angular/router";
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