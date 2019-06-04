import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMenu().subscribe(data => {
        this.items = data;
        /*  console.log(this.items);*/
      }
    );
  }

}
