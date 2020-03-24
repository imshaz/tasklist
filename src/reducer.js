let inittialState = [
    {
        url: "../assets/images/task.jpg",
        title: 'userName 1',
        description: "description 1",
        time: ''
    },
    {
        url: "../assets/images/task.jpg",
        title: 'userName 2',
        description: "description 2",
        time: '10:12'
    },
    {
        url: "../assets/images/task.jpg",
        title: 'userName 3',
        description: "description 3",
        time: ''
    }
]

const rootReducer = function (state = inittialState, action) {
    switch (action.type) {
      case "ADD":
          console.log(action.payload)
        return [...state , action.payload]
      default:
        return state;
    }
  };


  export default rootReducer