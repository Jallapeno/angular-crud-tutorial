import { Component } from '@angular/core';

import { User } from './models';
import { AccountService } from '@app/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: User;

  constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }
}
