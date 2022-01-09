import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../holiday/designutility.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
 
  constructor(private msgService: DesignutilityService) { }
  products:any;
  ngOnInit(): void {
    this.msgService.product()
  .subscribe((productData: any) => this.products = productData)
  }
  
}
