import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { COUNTRIES_KEY, COUNTRY_KEY } from 'src/app/shared/services/orch.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {
  @Output() userAdded = new EventEmitter();
  hide=true;
  showAddUser = false;
  loading = false;
  city: string;
  countries: any[] = [];
  newUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(null, Validators.minLength(10)),
    nationality: new FormControl(null),
    admin: new FormControl(true, Validators.required),
    agent: new FormControl(false),
    customer: new FormControl(false, Validators.required)
  });

  constructor(
    private userService: UserService,
    private toast: ToastService
  ) { }

  get f() {
    return this.newUserForm.controls;
  }
  ngOnInit(): void {
    this.countries = JSON.parse(localStorage.getItem(COUNTRIES_KEY));
  }

  showDialog() {
    this.showAddUser = true;
  }

  onSubmit() {
    this.newUserForm.get("agent").setValue(!this.newUserForm.controls['admin'].value);
    console.log(this.newUserForm.value);
    if (this.newUserForm.valid) {
      this.loading = true;
      this.newUserForm.disable();
      this.userService.userRegistration(this.newUserForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
            this.toast.show('success', 'Success', 'New user successfully added');
            this.newUserForm.reset();
            this.showAddUser = false;
            this.userAdded.emit();
          } else {
            this.newUserForm.enable();
            this.toast.show('error', res.status, res.message);
          }
        },
        complete: () => {
          this.loading = false;
          

        },
        error: () => {
          this.loading = false;
          this.newUserForm.enable();
        }
      })
    } else {
      this.toast.show('error', 'Error', 'Form is invalid');
    }
  }

  get emailError() {
    return this.f['email'].invalid && (this.f['email'].dirty || this.f['email'].touched);
  }
  get passwordError() {
    return this.f['password'].invalid && (this.f['password'].dirty || this.f['password'].touched);
  }
  get mobileError() {
    return this.f['mobile'].invalid && (this.f['mobile'].dirty || this.f['mobile'].touched);
  }
}
