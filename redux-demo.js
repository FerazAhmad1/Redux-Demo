const redux = require("redux");

const countReducer = (
  state = {
    counter: 0,
  },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(countReducer);
console.log(store.getState());
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

// const CAKE_ORDERED = "CAKE_ORDERED";
// function cakeorder() {
//   return {
//     type: CAKE_ORDERED,
//     quanity: 1,
//   };
// }

// const initialStates = {
//   numberOfCakes: 10,
// };

// const reducer = (state = initialStates, action) => {
//   if (action.type === CAKE_ORDERED) {
//     return {
//       ...state,
//       numberOfCakes: state.numberOfCakes - 1,
//     };
//   }
// };
