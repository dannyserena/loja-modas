import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom:'0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom:'30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))

    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string;
  snackVisibilty: string ='hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
      .do(message=>{
        this.message = message
        this.snackVisibilty = 'visible'
      //condição para manter a notificao por um determinado tempo pelo swithMap para fazer um subscribe
      }).switchMap(message => Observable.timer(4000))
      .subscribe(timer=> this.snackVisibilty = 'hidden')
  }
  

}
