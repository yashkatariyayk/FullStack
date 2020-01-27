import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators, FormGroup} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  constructor( private fb:FormBuilder, private rs: RegisterService) {
    this.createForm();
  }


  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Email: ['', Validators.required ],
      Password: ['', Validators.required ]
    });
  }
  // Name = new FormControl('');
  // Email= new FormControl('');
  // Password=new FormControl('');

  addDetail(Name, Email, Password) {
    this.rs.addDetail(Name, Email, Password);
  }

  ngOnInit() {
  }
  
}
