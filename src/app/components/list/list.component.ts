import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  count: number;
  list: [];
  constructor(private backendService: BackendService, private route: ActivatedRoute) {
      this.route.params.subscribe(
        params => {
          this.count = params['id'];
        }
      )
   }

  ngOnInit() {
    this.backendService.getList(this.count).subscribe((data: any) => {
        this.list = data.list;
    })
  }

}
