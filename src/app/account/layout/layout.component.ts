import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
      // redireciona para o home caso esteja
      if (this.accountService.userValue) {
          this.router.navigate(['/']);
      }
  }

}
