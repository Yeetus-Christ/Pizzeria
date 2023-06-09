import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentLink?: string;

  currentManager?: Manager;
  currentCourier?: Courier;
  currentChef?: Chef;

  loginManager(manager: Manager) {
    this.currentManager = manager
  }

  loginCourier(courier: Courier) {
    this.currentCourier = courier
  }
  loginChef(chef: Chef) {
    this.currentChef = chef
  }
}

interface Manager {
  name: string;
  password: string;
}

interface Courier {
  name: string;
  password: string;
}

interface Chef {
  name: string;
  password: string;
}
