import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

interface MenuItem {
  name: string;
  value: number;
  selected: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  items:  MenuItem[] = [
    { name: 'Маргарита', value: 500, selected: false },
    { name: 'Пепперони', value: 600, selected: false },
    { name: 'Четыре сыра', value: 700, selected: false },
    { name: 'Гавайская', value: 550, selected: false }
  ];

  get selectedItems(): number {
    return this.items.filter(item => item.selected).length;
  }

  get sumCount(): number {
    return this.items
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.value, 0);
  }

}
