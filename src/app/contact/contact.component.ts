import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  next(){
    location.assign("http://localhost:4200/courses");
  }

  ds ='none';

  @HostListener('window:scroll', ['$event'])
  onScroll(click: Event): boolean {
    if ((click.target as Document).scrollingElement!.scrollTop >= 100) {
      this.ds = 'block';
    } else {
      this.ds = 'none';
    }
  return false;
  }
  toTop(): void {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }


  constructor() { }

  ngOnInit(): void {
  }


  name:string = "";
  email:string = "";
  subject:string = "";

  send():void{

    alert(this.name + "/" +this.email + "/" + this.subject);

  }


}
