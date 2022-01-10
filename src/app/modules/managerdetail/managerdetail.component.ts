import { Component, OnInit } from '@angular/core';
import { ManagerlistService } from 'src/app/managerlist.service';

@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  managerData: any;
  constructor(private manager : ManagerlistService) { }

  ngOnInit(): void {
    this.manager.product()
  .subscribe((productData: any) => this.managerData = productData)
  }

}
