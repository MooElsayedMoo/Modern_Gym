import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ds ='none';

  @HostListener('window:scroll', ['$event'])
  onScroll(click: Event): boolean {
    if ((click.target as Document).scrollingElement!.scrollTop >= 700) {
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

    $("#bemo").mouseenter(function(){
      $("#demo").css('display','block');
      $(this).mouseleave(function(){
        $("#demo").css('display','none');
      });
    });
    $("#remo").mouseenter(function(){
      $("#lemo").css('display','block');
      $(this).mouseleave(function(){
        $("#lemo").css('display','none');
      });
    });
    $("#yemo").mouseenter(function(){
      $("#femo").css('display','block');
      $(this).mouseleave(function(){
        $("#femo").css('display','none');
      });
    });

  }

}
