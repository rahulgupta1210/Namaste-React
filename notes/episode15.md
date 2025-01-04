
# Redux-
-redux work on data layer
-Redux is a predictable state container for JavaScript applications
-Redux is a library that helps you manage global state in your application

-Redux is not mandatory
-when application is big 
-application become easy to debug
-redux toolkit


-zustand library 
-zustand is a tiny library for managing global state in React applications


# Redux Store

-Is a JS object 
-any componnet can access and update
-kept in central app
-Slices inside redux store ,logical partition is called slice(e.g-user slice,card slice,theme's)
-click on add btn it dispatches an action,which call a reducer function and that reducer function will modify the cart(slice of the redux store)
-we will use the selector(will give data) to read the data from store and update into the cart-subscribing to the store


# redux toolkit
Install @redux/toolkit and react-redux
-build our store
connect out store to our app
Slice -cart Slice
dispatch
read data using selector

//selector is a hook in react -js function

//subscribe to write portion of the store when using useSelector
//use reducer and reducers keyword carefully

//vanilla or older redux -- redux use to say dont mutate the state and return was mandatory 
//react redux we can mutate the state or we have to mutate it
//immer lib find the diff of old state and new state and return in redux

//create immutable copy of nested object
//immer lib is used in react-redux to make the state immutable

//Redux dev tools

//RTK website read about RTK queries-middle ware /thunks was used earlier
now RTK queris