import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, switchMapTo } from 'rxjs';
import { MenuItemRm } from '../api/models';
import { CartService, MenuService } from '../api/services';
import { FormBuilder, Validators } from '@angular/forms';

interface Order {
  id: number
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService,
    private cartService: CartService,
    private fb: FormBuilder  ) { }

  menuItems: MenuItemRm[] = [];
  showAddToCart: boolean = false;
  currentMenuItem: MenuItemRm = {
    id: 0
  };
  currentOrder: number = 0;
  inputValue = 1;
  form = this.fb.group({
    numberOfItems: [1, Validators.compose([Validators.required, Validators.min(1)])]
  })


  ngOnInit(): void {
    this.currentOrder = this.cartService.cartId
    this.menuService.searchByTypeMenu({ type: "Pizza" })
      .subscribe(r => this.menuItems = r,
        this.handleError)
  }

  public search() {
    this.menuService.searchMenu({})
      .subscribe(r => this.menuItems = r,
        this.handleError)
  }

  private handleError(err: any) {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

  public searchByType(type: string) {
    this.menuService.searchByTypeMenu({ type })
      .subscribe(r => this.menuItems = r,
        this.handleError)
  }

  public showAddToCartForm(cardItem: MenuItemRm) {
    this.showAddToCart = !this.showAddToCart;
    this.currentMenuItem = cardItem;
  }

  public hideAddToCartForm(menuItemId: number)
  {
    if (this.currentOrder == 0) {
      this.menuService.createOrderMenu()
        .subscribe(id => {
          this.currentOrder = id;
          this.cartService.cartId = id;
          this.menuService.addItemToOrderMenu({ OrderId: this.currentOrder, MenuItemId: menuItemId, number: this.form.get('numberOfItems')?.value }).subscribe()
        })
    }
    else {
      this.menuService.addItemToOrderMenu({ OrderId: this.currentOrder, MenuItemId: menuItemId, number: this.form.get('numberOfItems')?.value }).subscribe()
    }
    
    this.showAddToCart = !this.showAddToCart;
  }
}
