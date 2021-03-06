import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  featureChangedEvent = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClicked() {
    this.emitSiteChangeEvent('RECIPES');
  }

  onShoppingListClicked() {
    this.emitSiteChangeEvent('SHOPPING_LIST');
  }

  private emitSiteChangeEvent(newFeature: string) {
    this.featureChangedEvent.emit(newFeature);
  }

}
