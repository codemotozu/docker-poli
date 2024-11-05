import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersservicesService } from './services/usersservices.service';
import { IUser } from './model/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docker-front';

  private _userService = inject(UsersservicesService);
  _user:IUser [] = []


  /**
   *
   */
  constructor() {
    this._userService.getUsers().subscribe({
      next:(value)=>{
        this._user = value
      }
    })
    
  }
}
