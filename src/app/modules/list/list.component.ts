import { Component, OnInit } from '@angular/core';
import { EmplistService } from 'src/app/emplist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listservice: EmplistService) { }
list :any;
  ngOnInit(): void {
    this.listservice.product()
  .subscribe((productData: any) => this.list = productData)
  }

}
