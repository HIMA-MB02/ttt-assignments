import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showValidationMessage: boolean = false;
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit() {
  }

  sendRequest(n: string) {
    if (n == '') {
      this.showValidationMessage = true;
      return;
    }
    this.router.navigate(['/list/' + parseInt(n)])
  }

}
