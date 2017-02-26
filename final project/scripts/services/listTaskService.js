appTodo.service('listTaskService', [function (localStorageService){
  this.prioritys = function(){
    $scope.optionsPriority=[
      {name:''},
      {name:'High'},
      {name:'Medium'},
      {name:'Normal'}
    ]
  }
  this.optionsPriority = function(){
     return  [
      {
        value:'1',
        name:'Normal'
      },
      {
        value:'2',
        name:'Medium'
      },
      {
        value:'3',
        name:'High'
      }
    ];
  }
  this.optionsStatusService = function(){
      return [
      {
        value:'1',
        name:'To-Do'
      },
      {
        value:'2',
        name:'Doing'
      },
      {
        value:'3',
        name:'Done'
      }
    ];
  }
  this.sortTasksService = function(){
    return [
      {
        value : '',
        name : 'None'
      },
      {
        value : 'title',
        name : 'Title'
      },
      {
        value : '-priority.value',
        name : 'Priority'
      },
      {
        value : 'date',
        name : 'Due date'
      }
    ];
  }
  this.filterPriorityService = function(){
    return[
      {
        value : '',
        name : 'None'
      },
      {
        value : 'High',
        name : 'High'
      },
      {
        value : 'Medium',
        name : 'Medium'
      },
      {
        value : 'Normal',
        name : 'Normal'
      },
    ]
  }
  this.filterStatusItemService = function(){
      return [
      {
        value : '',
        name : 'None'
      },
      {
        value : 'To-Do',
        name : 'To-Do'
      },
      {
        value : 'Doing',
        name : 'Doing'
      },
      {
        value : 'Done',
        name : 'Done'
      }
    ];
  }
}
])
