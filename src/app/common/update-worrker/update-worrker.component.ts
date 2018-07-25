import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-update-worrker',
  templateUrl: './update-worrker.component.html',
  styleUrls: ['./update-worrker.component.css']
})
export class UpdateWorrkerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(item => {
      console.log(item);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(item => {
      console.log(item);
    });
  }

}
