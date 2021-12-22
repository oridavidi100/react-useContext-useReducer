// No Side Effects
export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_DATA':
      return [...action.data];
    case 'FILTER_LIST':
      let stateAfterFilter = state.filter(function (item) {
        return item.name.includes(action.title);
      });
      return [...stateAfterFilter];
    case 'ADD_FRIEND':
      let name = action.name;
      let age = action.age;
      let id = action.id;
      return [...state, { name, age, id }];
    case 'REMOVE_FRIEND':
      let removedName = action.name;
      const filterstate = state.filter((friend) => friend.name !== removedName);
      return [...filterstate];
    case 'UPDATE_NAME':
      console.log('r');
      const Id = action.id;
      console.log(action.id);
      const newvalue = action.newvalue;
      const updatedState = state.map((item) => {
        if (item.id == Id) return { ...item, name: newvalue };
        return item;
      });
      return [...updatedState];
    case 'UPDATE_AGE':
      const ID = action.id;
      console.log(action.id);
      const newage = parseInt(action.newage);
      const UpdatedState = state.map((item) => {
        if (item.id == ID) return { ...item, age: newage };
        return item;
      });
      return [...UpdatedState];
    default:
      return [...state];
  }
};
