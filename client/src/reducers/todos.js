const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    
    case 'TOGGLE_TODO':
      return state.map(item => item.id === action.id ? todo(item, action) : item)

    default:
      return state;
  }
};

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {id: action.id, text: action.text, completed: false};
    
    case 'TOGGLE_TODO':
      return {...state, completed: !state.completed};

    default:
      return state;
  }
};

export default todos; 