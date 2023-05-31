import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-portfolio-head',
  templateUrl: './portfolio-head.component.html',
  styleUrls: ['./portfolio-head.component.scss']
})
export class PortfolioHeadComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
