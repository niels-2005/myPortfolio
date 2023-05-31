import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-el-pollo-loco',
  templateUrl: './el-pollo-loco.component.html',
  styleUrls: ['./el-pollo-loco.component.scss']
})
export class ElPolloLocoComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
