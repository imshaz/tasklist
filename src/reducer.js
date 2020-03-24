let inittialState = [
    {
        url: "../assets/images/task.jpg",
        title: 'userName 1',
        description: "description 1",
        time: '',
        completed:true
    },
    {
        url: "../assets/images/task.jpg",
        title: 'userName 2',
        description: "description 2",
        time: '10:12',
        completed:true

    },
    {
        url: "../assets/images/task.jpg",
        title: 'userName 3',
        description: "description 3",
        time: '',
        completed:false

    }
]

const rootReducer = function (state = inittialState, action) {
    switch (action.type) {
      case "ADD":
          console.log(action.payload)
        return [...state , action.payload]

        case "UPDATE":
            console.log(action.payload)
            const {index, time} = action.payload
            
            return state.map((item, i) => {
                if (index !== index) {
                  return item
                }
                return {
                  ...item,
                  time: time, completed:true
                }
              })
      default:
        return state;
    }
  };


  export default rootReducer