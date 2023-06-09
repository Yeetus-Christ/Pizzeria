import { Component, OnInit } from '@angular/core';
import { OrderRm } from '../api/models';
import { ChefService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor(private authService: AuthService,
    private chefService: ChefService) { }

  orders: OrderRm[] = [];
  showProccesing: boolean = true;
  showCompleted: boolean = false;
  showNoOrders: boolean = false;

  ngOnInit(): void {
    this.chefService.searchOrdersChef({ status: "Proccesing"})
      .subscribe(_ => {
        this.orders = _;
        if (this.orders.length == 0) {
          this.showNoOrders = true;
        }
      })
  }

  completeOrder(orderId: number | undefined) {
    this.chefService.updateOrderChef({ id: orderId, status: "Completed" })
      .subscribe()
    this.chefService.searchOrdersChef({ status: "Proccesing"})
      .subscribe(_ => this.orders = _)
  }

  showProccesingOrders() {
    this.chefService.searchOrdersChef({ status: "Proccesing"})
      .subscribe(_ => {
        this.orders = _;
        if (this.orders.length == 0) {
          this.showNoOrders = true;
        }
        else {
          this.showNoOrders = false;
        }
      })

    this.showProccesing = true;
    this.showCompleted = false;
  }

  showCompletedOrders() {
    this.chefService.searchOrdersChef({ status: "Completed" })
      .subscribe(_ => this.orders = _)
    this.showProccesing = false;
    this.showNoOrders = false;
    this.showCompleted = true;
  }
}
