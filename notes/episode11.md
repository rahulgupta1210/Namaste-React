# Class based component all theory and lifeCycle

# class name of class  extends React.Component
use render method to return the jsx

//functional case we get props as arguement

//class case you get prps in constructor and need to use super(props)

//why we need super(props);

//so new instacnce of class is created constructor will be called

//use state inside class based component

//loading a class component on a web page means we creating a new instatnce of the class then constructor will be called and this is the best place for creating state variable

const {count,count2} = this.state;
//in class based componnet-never update state variable directly,will create inconsistency in app

//when we update this.setState({ count: count + 1 }) component will be rerendered and will change that portion only

//when button clicked it will find the diff and update the DOM

//how class based cmponent loaded or mounted

import {Component} from "react";
then
class About extends Component



# Lifecycle of class based component:-

1- About - parent
 when we load abut componnt -then it ll check and see the Userclass component then -constructor will be called on userclass then render will be called

 1st Constructor will be called 
 2nd Render method will be called

# Lifecycle
 //parent constuctor ---> 
 //parent render --->
 //child constructor ---->
 //child render--->
 //child compomtDidmount ----> once child mounted completely--then 
 //parent componntdidmunt will be called

 //componntdidmunt will be called once componnet is mounted completed

 //e.g.--componentDidmount use to make API call
componntdidmunt in details?

 # React want to render the compont and get the data from api get the data and fill the data inside component

 //react will batch the render phase of child if multiple childs are there

# react has two phase
1.Render Phase 
    .constrctor
    .render

2.Commit phase
    .componnetDidMount


//cmpnnet will render with default value 

//constructr will be called with dummy data 
//then componet didmount was called and api call finished
//setState will update the state variable -react trigger render once again with state value ll be updated with new value
//componntDidUpdate is called at end.


# Mounting Cycle
-   Constructor is called
-   Render will be called (dummy data)
-   <HTML loaded wit dummy data >
-   componentDidMount called in which we called API
-   This.setState called --state variable is updated

# Update Cycle

-   render(API Data)
-   <HTML loaded with real data>
-   componentDidUpdate called


# Unmounting
-   componentWillUnmount called when we move to other route e.g.click on contactUs

