import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.nameField.nativeElement;
    let messageField = this.nameField.nativeElement;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    await fetch('https://niels-scholz.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    });
  }
}





// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit{



//   constructor(){}

//   ngOnInit(): void {
//   }


//   @ViewChild('myForm') myForm!: ElementRef;
//   @ViewChild('nameField') nameField!: ElementRef;
//   @ViewChild('emailField') emailField!: ElementRef;
//   @ViewChild('messageField') messageField!: ElementRef;
//   @ViewChild('button') button!: ElementRef;

//   async sendMail(){

//     let nameField = this.nameField.nativeElement;
//     let emailField = this.nameField.nativeElement;
//     let messageField = this.nameField.nativeElement;

//     let formData = new FormData();
//     formData.append('name', nameField.value);
//     formData.append('email', emailField.value);
//     formData.append('message', messageField.value);

//    await  fetch('https://niels-scholz.developerakademie.net/send_mail/send_mail.php',
//     {
//       method: 'POST',
//       body: formData
//     }
//     );

//   }

// }
