import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PopoversComponent } from './popovers/popovers.component';
import { SpinnersComponent } from './spinners/spinners.component';

export const IndicatorComponentsRoutes: Routes = [
  {
    path: 'indicators',
    children: [
      {
        path: 'badges',
        component: BadgeComponent
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent
      },
      {
        path: 'spinners',
        component: SpinnersComponent
      },
      {
        path: 'placeholder',
        component: PlaceholderComponent
      },
      {
        path: 'popovers',
        component: PopoversComponent
      }
    ]
  }
];

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'card',
        component: CardsComponent
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent
      },
      {
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'off-canvas',
        component: OffCanvasComponent
      },
      {
        path: 'buttons',
        component: NgbdButtonsComponent
      }
    ]
  }
];
