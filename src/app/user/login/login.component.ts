import { Component, OnInit } from '@angular/core';
import { ManagerloginService} from 'src/app/managerlogin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: ManagerloginService , private router: Router , private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.login().subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.service.formModel.reset();
          this.toastr.success('Thanks for signing in', 'Login successful.');
          this.router.navigateByUrl('');
        }
      },
      err => {
        this.toastr.error( 'Incorrect Username or Password', 'Login failed' );
      }
    );
  }

}

