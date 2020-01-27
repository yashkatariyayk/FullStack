
import { Component, OnInit } from '@angular/core';
import User from '../user';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-getdetail',
  templateUrl: './getdetail.component.html',
  styleUrls: ['./getdetail.component.scss']
})
export class GetdetailComponent implements OnInit {

  Users: User[];
  constructor(private rs: RegisterService) { }

  ngOnInit() {
    this.rs
    .getDetail()
    .subscribe((data: User[]) => {
      this.Users = data;
  });

  }

}
