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
            url: '/Administrator/Countries'
          },
          {
            id: 'states',
            title: 'States',
            type: 'item',
            url: '/Administrator/States'
          },
          {
            id: 'cities',
            title: 'Cities',
            type: 'item',
            url: '/Administrator/Cities'
          },
          {
            id: 'area',
            title: 'Area',
            type: 'item',
            url: '/Administrator/Area'
          },
        ]
      },  
      {
        id: 'charges',
        title: 'Charges',
        type: 'item',
        url: '/Administrator/Charges',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'taxes',
        title: 'Taxes',
        type: 'item',
        url: '/Administrator/Taxes',
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
          //   url: '/Fablo-Food/dashboard',
          // },
          {
            id: 'businesslist',
            title: 'Business List',
            type: 'item',
            url: '/Fablo-Food/BusinessList',
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
 
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
