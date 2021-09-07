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
        url: '/administrator/dashboard',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },      
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
            url: '/employee/createemployee',
          },
          {
            id: 'employeeList',
            title: 'Employee List',
            type: 'item',
            url: '/employee/employeelist',
          }
        ]
      },
      {
        id: 'bloodGroup',
        title: 'Blood Group',
        type: 'item',
        url: '/employee/bloodgroups',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'department',
        title: 'Department',
        type: 'item',
        url: '/employee/departments',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
      {
        id: 'designation',
        title: 'Designation',
        type: 'item',
        url: '/employee/designations',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
      {
        id: 'education',
        title: 'Education',
        type: 'item',
        url: '/employee/educations',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },    
      {
        id: 'workExperience',
        title: 'Work Experience',
        type: 'item',
        url: '/employee/workexperience',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },    
      {
        id: 'employeeType',
        title: 'Employee Type',
        type: 'item',
        url: '/employee/employeetype',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }, 
    ]
  },
  {
    id: 'international',
    title: 'International',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'location',
        title: 'Locations',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'countries',
            title: 'Countries',
            type: 'item',
            url: '/administrator/countries'
          },
          {
            id: 'states',
            title: 'States',
            type: 'item',
            url: '/administrator/states'
          },
          {
            id: 'cities',
            title: 'Cities',
            type: 'item',
            url: '/administrator/cities'
          },
          {
            id: 'area',
            title: 'Area',
            type: 'item',
            url: '/administrator/area'
          },
        ]
      },  
      {
        id: 'charges',
        title: 'Charges',
        type: 'item',
        url: '/administrator/charges',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'taxes',
        title: 'Taxes',
        type: 'item',
        url: '/administrator/taxes',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'feather icon-layout',
  //   children: [      
  //     {
  //       id: 'charges',
  //       title: 'Charges',
  //       type: 'item',
  //       url: '/Administrator/Charges',
  //       classes: 'nav-item',
  //       icon: 'feather icon-home'
  //     },
      
  //   ]
  // },
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
          // {
          //   id: 'marchantlist',
          //   title: 'Marchant List',
          //   type: 'item',
          //   url: '/fablofood/dashboard',
          // },
          {
            id: 'businesslist',
            title: 'Business List',
            type: 'item',
            url: '/fablofood/businesslist',
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
            url: '/fablofood/kyclist/2',
          },
          {
            id: 'document',
            title: 'Approved List',
            type: 'item',
            url: '/fablofood/kyclist/1',
          },
          {
            id: 'document',
            title: 'Rejected List',
            type: 'item',
            url: '/fablofood/kyclist/3',
          },
          {
            id: 'document',
            title: 'Blocked List',
            type: 'item',
            url: '/fablofood/kyclist/4',
          }
        ]
      },
    ]
  },
 
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
