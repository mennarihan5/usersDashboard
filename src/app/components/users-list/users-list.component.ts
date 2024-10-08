import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit  {

  constructor(private apiService: ApiService, private router: Router) {}

  users: User[] = [];
  page: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 6;

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
      this.apiService.get<User[]>(`https://reqres.in/api/users?page=${this.page}`)
        .subscribe((response:any) => {
          console.log(response);
          this.users = response.data;
          this.totalItems = response.total;
        })
    }
  viewUser(userId: number) {
    this.router.navigate(['/users', userId]);
  }
  onPageChange(page: number) {
    this.page = page;
    this.fetchUsers();
  }
}
