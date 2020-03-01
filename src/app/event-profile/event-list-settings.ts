import { DatePipe } from '@angular/common';

export let settings = {
    actions: {
      position: 'right',
      add: false,
      edit: false,
      delete: false
    },
    columns: {
        eventName: {
        title: 'Event Name'
      },
      eventType: {
        title: 'Event Type'
      },
      eventLocation: {
        title: 'Event Location'
      },
      startDate: {
        title: 'Start Date',
        valuePrepareFunction: (startDate) => {
            return  new DatePipe('en-US').transform(startDate, 'dd,MMMM,yyyy ');
        }
      },
      endDate: {
        title: 'End Date',
        valuePrepareFunction: (endDate) => {
          return  new DatePipe('en-US').transform(endDate, 'dd/MMM/yyyy ');
      }
      },
      description: {
        title: 'Description',
        editable: false
      },
      detail: {
        title: 'Detail',
        // editable:false,
        // show:false,
        // hideSubHeader:true
        filter: false,
        valuePrepareFunction: (endDate) => {
          return  'Show Detail';
      }
      }
    },
  };
export let data = [];
