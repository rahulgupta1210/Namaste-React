# Monolith Architecture:-

//whole team work on same repo.
//whole app need deployment for small changes

----------------------------------------------------------

# Microservices:-
//each team work on different repo.
//single resposibility principal
//separation of concern
//all services will run in different port -diff port we can deploy diff services


# approach 1

Load ---> Api--->render

# approach 2

Load--->Render ---->Api ---->Rerender

React render cycle is efficient

# useEffect hooks --->(hook is normal js function which has special purpose)

--React library used as named import.

useEffect(()=>{
console.log('abce')
},[])

useEffect(()=>{
 const timer = setInterVal(()=>{
    console.log('render')
 },1000)   
 console.log('useeffect);
 return ()=>{
    clearInterVal(timer)
    console.log('use effect return)
 };

},[])

//useEffect why we can not use async

//use effect return will be used in functional componnet as willmounting phase if we leave the page

// dependency injection satisfied that many time render will be called
//fetch the data in useEffect hook

//once body component render then useEffect hook will be called after component has been rendered.

//fetch used to fetch from api it is given by browser

//shimmer ui -load fake page untill we get the real data
//user will be able to anticipate the card and whatever is comin

//useState -use

//we need to bind the input with value and use the onchhange methdo

//whenever change the local state var component is getting rerendered

//whenever state variables update ,react triggers a reconcialiatin cycle (re-render the component)

//react fiber compare two vertual dom and find the difference and update the exact place where is the change

//cross proxy we can use for bypass for cors
