import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UsersListComponent } from "../users-list/users-list.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [HeaderComponent, UsersListComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

}
