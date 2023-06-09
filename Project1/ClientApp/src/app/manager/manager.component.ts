import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CourierRm, MenuItemRm, OrderRm } from '../api/models';
import { ManagerService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {

  constructor(private managerService: ManagerService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  menuItems: MenuItemRm[] = [];
  orders: OrderRm[] = [];
  currentName: string = "Daniel Buchihin";
  couriers: CourierRm[] = [];
  courierNames: any = [];
  showOrders: boolean = false;
  currentOrder: number | undefined = 0;
  currentMenuItem: MenuItemRm = {
    id: 0
  };
  showMenuItems: boolean = false;
  form = this.fb.group({
    name: ["", Validators.compose([Validators.required])],
    description: ["", Validators.compose([Validators.required])],
    price: [1, Validators.compose([Validators.required, Validators.min(1)])]
  })

  showEditItem: boolean = false;
  showCourier: boolean = false;

  ngOnInit(): void {
    this.managerService.searchCouriersManager()
      .subscribe(_ => this.couriers = _, this.handleError)
  }

  public getOrders() {
    this.courierNames = []

    this.couriers.forEach((courier) => {
      this.courierNames.push(courier.name)
    });

    this.managerService.searchOrdersManager()
      .subscribe(r => this.orders = r)
      
    this.showOrders = true;
    this.showMenuItems = false;
  }

  public getMenuItems() {
    this.managerService.searchMenuItemsManager()
      .subscribe(r => this.menuItems = r, this.handleError)
    this.showOrders = false;
    this.showMenuItems = true;
  }

  private handleError(err: any) {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

  public showEditMenuItem(cardItem: MenuItemRm) {
    this.showEditItem = !this.showEditItem;
    this.currentMenuItem = cardItem;
    this.form.controls['name'].setValue(this.currentMenuItem.name)
    this.form.controls['description'].setValue(this.currentMenuItem.description)
    this.form.controls['price'].setValue(this.currentMenuItem.price)
  }

  public updateMenuItem() {
    this.managerService.updateMenuItemManager({
      id: this.currentMenuItem.id,
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value
    }).subscribe()

    this.managerService.searchMenuItemsManager()
      .subscribe(r => this.menuItems = r, this.handleError)

    this.showEditItem = false;
  }

  updateOrder() {
    this.managerService.updateOrderManager({ id: this.currentOrder, status: "Proccesing", courier: this.currentName })
      .subscribe();

    this.managerService.searchOrdersManager()
      .subscribe(r => this.orders = r, this.handleError)

    this.showCourier = false;
  }

  public showAssignCourier(order: OrderRm) {
    this.currentOrder = order.id
    console.log(this.currentOrder)
    this.showCourier = true;
  }

}
