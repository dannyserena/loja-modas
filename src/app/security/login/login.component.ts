import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../shared/message/notification.service';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required,Validators.email]),
      password: this.fb.control('', [Validators.required]),

    })
  }
  login(){
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                            .subscribe(user => this.notificationService.notify(`Bem Vindo, ${user.name}`),
                            response => this.notificationService.notify(response.error.message))
  }
}
