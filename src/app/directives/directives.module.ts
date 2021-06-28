import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DirectivesComponent } from "./directives.component";
import { ButtonDirective } from "./directives.directive";

@NgModule({
    declarations:[
        DirectivesComponent,
        ButtonDirective
    ],
    imports:[
        RouterModule.forChild(
            [
                {path:'', component: DirectivesComponent}
            ])
    ],
    exports:[],
    bootstrap:[ DirectivesComponent]
})
export class DirectiveModule{

}