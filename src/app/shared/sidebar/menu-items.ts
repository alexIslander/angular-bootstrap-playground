import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component',
    title: 'Components',
    icon: 'bi bi-bar-chart-steps',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/component/buttons',
        title: 'Button',
        icon: 'bi bi-hdd-stack',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/card',
        title: 'Card',
        icon: 'bi bi-card-text',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: 'bi bi-menu-app',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: 'bi bi-dice-1',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/nav',
        title: 'Nav',
        icon: 'bi bi-pause-btn',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: 'bi bi-back',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/off-canvas',
        title: 'OffCanvas',
        icon: 'bi bi-layout-sidebar-inset',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/table',
        title: 'Table',
        icon: 'bi bi-layout-split',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/component/indicators',
    title: 'Indicators',
    icon: 'bi bi-app-indicator',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/component/indicators/alert',
        title: 'Alert',
        icon: 'bi bi-bell',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/indicators/badges',
        title: 'Badges',
        icon: 'bi bi-patch-check',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/indicators/spinners',
        title: 'Spinners',
        icon: 'bi bi-arrow-clockwise',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/indicators/placeholder',
        title: 'Placeholder',
        icon: 'bi bi-text-paragraph',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/indicators/popovers',
        title: 'Popovers',
        icon: 'bi bi-box-arrow-in-right',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
