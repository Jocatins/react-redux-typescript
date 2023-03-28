# React- Redux with TypeScript

-   Steps in setting up a React-Redux Application
    1] - npm install react-redux redux

2] - Create a store(redux-store) .

3] -Define your reducers - Reducers are more like switch statements
They are functions that take the current state and action and return a new state.
They are pure functions
counterReducer(state, action) => {
return new state;
}
