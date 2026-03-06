import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

interface MenuItem {
  name: string;
  value: number;
  selected: boolean;
}

interface Menu {
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [
    FormsModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  menus: Menu[] = [
    {
      name: "Тип1",
      items: [
        { name: 'Item1', value: 500, selected: false },
        { name: 'Item2', value: 600, selected: false },
        { name: 'Item3', value: 700, selected: false },
        { name: 'Item4', value: 550, selected: false }
      ]
    },
    {
      name: "Тип2",
      items: [
        { name: 'Item1', value: 500, selected: false },
        { name: 'Ite22', value: 600, selected: false },
        { name: 'Item3', value: 700, selected: false },
        { name: 'Item4', value: 550, selected: false }
      ]
    }
  ];

  currentMenu: Menu | null = this.menus[0];

  get selectedItems(): number {
    return this.currentMenu ?
      this.currentMenu.items.filter(item => item.selected).length : 0;
  }

  get sumCount(): number {
    return this.currentMenu ?
      this.currentMenu.items
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.value, 0) : 0;
  }

  get items(): MenuItem[] {
    return this.currentMenu?.items || [];
  }

  selectMenu(menu: Menu) {
    this.currentMenu = menu;
  }
}
