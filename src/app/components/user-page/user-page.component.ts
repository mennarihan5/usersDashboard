import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  user: User | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.fetchUser(userId);
    });
  }

  fetchUser(userId: number) {
    this.apiService.get<User>(`https://reqres.in/api/users/${userId}`)
      .subscribe((response: any) => {
        this.user = response.data;
      });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}



