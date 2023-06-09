import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemRm, OrderMenuItemRm, OrderRm } from '../api/models';
import { CartService, MenuService } from '../api/services';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private menuService: MenuService,
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router,  ) { }

  currentOrderId: number = 0;
  totalPrice: number = 0;
  menuItems: MenuItemRm[] = [];
  form = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    adress: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])]
  })
  itemNumbers: ItemNumber[] = [];
  menuItemOrders: OrderMenuItemRm[] = [];

  ngOnInit(): void {
    this.currentOrderId = this.cartService.cartId
    console.log(this.currentOrderId);
    this.cartService.getOrderItemsCart({ id: this.currentOrderId }).
      subscribe(r => {
        this.menuItems = r;

        this.cartService.getNumbersOfItemsCart({ orderId: this.currentOrderId }).
          subscribe(r => {
            this.menuItemOrders = r;
            for (let i = 0; i < this.menuItemOrders.length; i++) {
              this.itemNumbers.push({ id: this.menuItemOrders[i].menuItemID, num: this.menuItemOrders[i].number, name: this.menuItems[i].name, image: this.menuItems[i].image })
            }            
          })
      })


    this.cartService.findOrderCart({ id: this.currentOrderId }).
      subscribe(r => this.totalPrice = r.totalPrice)
  }

  private handleError = (err: any) => {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

  public cancelOrder() {
    this.cartService.cancelOrderCart({ orderId: this.currentOrderId })
      .subscribe();
    this.cartService.cartId = 0;
    this.router.navigate(['/'])
  }

  public updateOrder() {
    if (this.form.invalid)
      return;

    const params = { id: this.currentOrderId, clientName: this.form.get("name")?.value, email: this.form.get("email")?.value, adress: this.form.get("adress")?.value, status: "Pending" }
    this.cartService.updateOrderCart(params)
      .subscribe();
    console.log(this.form.value)
    console.log(this.cartService.cartId)
    this.cartService.cartId = 0;
    this.router.navigate(['/'])
  }
}

interface ItemNumber {
  id?: number;
  num?: number;
  image?: null | string;
  name?: null | string;
}
