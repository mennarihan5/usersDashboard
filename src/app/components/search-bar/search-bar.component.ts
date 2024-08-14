import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  userNotFound = false;

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();

    this.userNotFound = false;

    if (value && !isNaN(+value)) {
      const userId = +value;
      this.apiService.get<{ data: any }>(`https://reqres.in/api/users/${userId}`)
        .subscribe((response: any) => {
          const user = response.data;
          if (user) {
            this.router.navigate(['/users', user.id]);
          } else {
            this.userNotFound = true;
            console.log('User not found');
          }
        }, error => {
          this.userNotFound = true;
          console.log('Error fetching user', error);
        });
    }
  }
}
