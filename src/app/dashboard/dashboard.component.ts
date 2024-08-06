import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//Alias de importaciones. Configurar en tsconfig.json
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';


// default es alternativa a .then() en carga perezosa
@Component({
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}