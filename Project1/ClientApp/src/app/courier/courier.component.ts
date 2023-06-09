import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { OrderRm } from '../api/models';
import { CourierService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {

  constructor(private authService: AuthService,
  private courierService: CourierService  ) { }

  orders: OrderRm[] = [];
  showCompleted: boolean = true;
  showDelivered: boolean = false;
  showNoOrders: boolean = false;

  ngOnInit(): void {
    this.courierService.searchOrdersCourier({ status: "Completed", courier: this.authService.currentCourier?.name })
      .subscribe(_ => {
        this.orders = _;
        if (this.orders.length == 0) {
          this.showNoOrders = true;
        }
      })
    
  }

  completeOrder(orderId: number | undefined) {
    this.courierService.updateOrderCourier({ id: orderId, status: "Delivered" })
      .subscribe()
    this.courierService.searchOrdersCourier({ status: "Completed", courier: this.authService.currentCourier?.name })
      .subscribe(_ => this.orders = _)
  }

  showCompletedOrders() {
    this.courierService.searchOrdersCourier({ status: "Completed", courier: this.authService.currentCourier?.name })
      .subscribe(_ => {
        this.orders = _;
        if (this.orders.length == 0) {
          this.showNoOrders = true;
        }
        else {
          this.showNoOrders = false;
        }
      })

    this.showCompleted = true;
    this.showDelivered = false;
  }

  showDeliveredOrders() {
    this.courierService.searchOrdersCourier({ status: "Delivered", courier: this.authService.currentCourier?.name })
      .subscribe(_ => this.orders = _)
    this.showCompleted = false;
    this.showNoOrders = false;
    this.showDelivered = true;
  }

}
