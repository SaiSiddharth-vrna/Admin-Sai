import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { FormBuilder, FormControl, Validators, FormGroup, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 value = EmailValidator;

  constructor() { }

  ngOnInit(): void {
  }

}
