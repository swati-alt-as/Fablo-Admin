import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/Administrator/dashboard',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      // {
      //   id: 'page-layouts',
      //   title: 'Page Layouts',
      //   type: 'collapse',
      //   icon: 'feather icon-layout',
      //   children: [
      //     {
      //       id: 'vertical',
      //       title: 'Vertical',
      //       type: 'item',
      //       url: '/layout/static',
      //       target: true
      //     },
      //     {
      //       id: 'horizontal',
      //       title: 'Horizontal',
      //       type: 'item',
      //       url: '/layout/horizontal',
      //       target: true
      //     }
      //   ]
      // }
    ]
  },
  {
    id: 'adminx',
    title: 'Administrator',
    type: 'group',
    icon: 'feather icon-pie-chart',
  },
  {
    id: 'employee',
    title: 'Employee',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      
      {
        id: 'employee',
        title: 'Employee Details',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'createEmployee',
            title: 'Create Employee',
            type: 'item',
            url: '/Employee/CreateEmployee',
          },
          {
            id: 'employeeList',
            title: 'Employee List',
            type: 'item',
            url: '/Employee/EmployeeList',
          }
        ]
      },
      {
        id: 'bloodGroup',
        title: 'Blood Group',
        type: 'item',
        url: '/Employee/BloodGroups',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'department',
        title: 'Department',
        type: 'item',
        url: '/Employee/Departments',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
      {
        id: 'designation',
        title: 'Designation',
        type: 'item',
        url: '/Employee/Designations',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
      {
        id: 'education',
        title: 'Education',
        type: 'item',
        url: '/Employee/Educations',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },    
      {
        id: 'workExperience',
        title: 'Work Experience',
        type: 'item',
        url: '/Employee/WorkExperience',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },    
      {
        id: 'employeeType',
        title: 'Employee Type',
        type: 'item',
        url: '/Employee/EmployeeType',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
    ]
  },

  {
    id: 'forms',
    title: 'Fablo Food',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      {
        id: 'resto',
        title: 'Restaurant Partners',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'marchantlist',
            title: 'Marchant List',
            type: 'item',
            url: '/Fablo-Food/dashboard',
          },
          {
            id: 'businesslist',
            title: 'Business List',
            type: 'item',
            url: '/Fablo-Food/BusinessList',
          }
        ]
      },
      {
        id: 'outlet',
        title: 'Outlets',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'outlet',
            title: 'Create Outlet',
            type: 'item',
            url: '/Fablo-Food/dashboard',
          },
          {
            id: 'outlet',
            title: 'Outlet List',
            type: 'item',
            url: '/Fablo-Food/dashboard',
          }
        ]
      },
      {
        id: 'kyc',
        title: 'KYC',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'document',
            title: 'Pending List',
            type: 'item',
            url: '/Fablo-Food/Kyc-List/2',
          },
          {
            id: 'document',
            title: 'Approved List',
            type: 'item',
            url: '/Fablo-Food/Kyc-List/1',
          },
          {
            id: 'document',
            title: 'Rejected List',
            type: 'item',
            url: '/Fablo-Food/Kyc-List/3',
          },
          {
            id: 'document',
            title: 'Blocked List',
            type: 'item',
            url: '/Fablo-Food/Kyc-List/4',
          }
        ]
      },
    ]
  },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'toasts',
  //           title: 'Toasts',
  //           type: 'item',
  //           url: '/basic/toasts'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   title: 'Forms & Table',
  //   type: 'group',
  //   icon: 'feather icon-layout',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Forms',
  //       type: 'item',
  //       url: '/forms/basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'bootstrap',
  //       title: 'Bootstrap',
  //       type: 'item',
  //       url: '/tbl-bootstrap/bt-basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'chart-maps',
  //   title: 'Chart & Maps',
  //   type: 'group',
  //   icon: 'feather icon-pie-chart',
  //   children: [
  //     {
  //       id: 'charts',
  //       title: 'Charts',
  //       type: 'item',
  //       url: '/charts/apex',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     },
  //     {
  //       id: 'maps',
  //       title: 'Maps',
  //       type: 'item',
  //       url: '/maps/google',
  //       classes: 'nav-item',
  //       icon: 'feather icon-map'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
