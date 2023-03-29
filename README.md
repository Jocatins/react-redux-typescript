# React- Redux with TypeScript

-   Steps in setting up a React-Redux Application
    1] - npm install react-redux redux

2] Then you create action types which are enums and you define the types

3] create actions which are interfaces and export them with a union type

4] Create/Define the action-creators.

-   Action creators are functions that dispatch actions

5] Create the reducers - Reducers are more like switch statements
They are functions that take the current state and action and return a new state.
They are pure functions
counterReducer(state, action) => {
return new state;}

6] Create redux store

7] Create an index.js file that will

-   export all the actionCreators
-   export the store
-   export the reducers

8] Use logic/ functions in the applications with the aid of bindActionCreators from 'redux'
