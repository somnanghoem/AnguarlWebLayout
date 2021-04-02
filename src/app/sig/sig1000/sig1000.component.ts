import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterRequest } from 'src/app/model/user-reqister-req.model';
import { userResponse } from 'src/app/model/userlist-res.model';
import { ConnectionService } from '../../shared/services/connectionServer.service';
import Swal from 'sweetalert2'
import { userLoginRequest } from 'src/app/model/user-login-req.model';
import { Util } from 'src/app/shared/utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sig1000',
  templateUrl: './sig1000.component.html',
  styleUrls: ['./sig1000.component.css']
})
export class Sig1000Component implements OnInit {
  users: any;
  userID : any;
  password : any;
  util = new Util();
  userInfo : any;

  constructor( private serverService: ConnectionService,
               public dialog: MatDialog,
               private route: Router
              ) {}

  ngOnInit(): void {
    /* this.serverService.httpGet( 'user/userID/madero' ).subscribe( data => {
     this.users = data;
     console.log( this.users );
    }); */
  //  this.registerUserInfo();
  }

  login(){
    const req = new userLoginRequest();
          req.body.userID   =this.userID;
          req.body.password = this.password;
    // Request to Server side
    this.serverService.httpPost( '/user/login', Object.assign( {}, req ) ).subscribe ( ( data ) => {
         let message = '';
         let ErrorCountMax: number ;
         if ( data.header.successYN === 'N' ) {
               if ( data.body !== null ) {
                // throw error when user input wrong password not yet reach max 5
                ErrorCountMax = data.body.userPasswordErrorCount
                 if ( ErrorCountMax <= 5 ) {
                    message = "You have input wrong password " + ErrorCountMax ;
                 } else {
                  // Throw error when user ID is block or other error
                  message = data.header.resultMessage;
                 }
               // Throw other error
               } else {
                message = data.header.resultMessage;
               }
          Swal.fire({
                title: 'Error',
                text: message,
                icon: 'warning',
                showCancelButton: true,
                timer: 1500
          });
        // Success login
         } else {
           // Store in local storage
          this.util.setSecureStorage("USER_INFO", data.body );
          this.route.navigate(['/main/home']);
         }
    } );
  }

  show(){
    this.userInfo = this.util.getSecureStorage("USER_INFO");
    console.log( this.userInfo );
  }
  registerUserInfo(){
      const userID            = 'nono';
      const serviceStatusCode = '01';
      const password          = 'Dalin@1998$$';
      const userLogin         = 'madero';
      const subUserYN         = 'Y';
      const req = new UserRegisterRequest();
            req.body.userID            = userID;
            req.body.serviceStatusCode = serviceStatusCode;
            req.body.password          = password;
            req.body.userLogin         = userLogin;
            req.body.subUserYN         = subUserYN;
      this.serverService.httpPost( '/user/', Object.assign( {}, req ) ).subscribe( ( data ) => {
        const res = new userResponse();
        const message = data.header.resultMessage ;
        if ( data.header.successYN === 'N' ) {
          Swal.fire({
            title: 'Error',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
          });
        } else {
          Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success',
            showCancelButton: true,
            cancelButtonColor: '#d33',
          });
        } // end if
      } ); // end httpPost
  }

}
