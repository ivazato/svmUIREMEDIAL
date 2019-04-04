import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;
  employee: Employee;

  constructor(private itemService: ItemService,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.itemService.getFeaturedItem()
      .subscribe(item => this.item = item);
    this.employeeService.getFeaturedEmployee()
      .then(employee => this.employee = employee);
  }

}
