
# Higher order component:-
- is a function which takes a component and return a componnet
- is a normal js function
- act as enhancer -take a component ,enhance and return it back

# Pure function

function wll not change the behaviour of the parameter we ll enhance adding some prperties on top of it

# controlled and Uncontrolled
-parent doesnt have controll on child component 
-if res categor controlled 
-if parent control other then it is controlled componnet
-if componet has its own state and controlled own is called uncontrolled


UI Layer -JSX
Data layer -state,props

# lifting the state up

# props drilling read

# react context we can just avoid prps drilling
# react context is a way to share data between components without passing props down manually
-context is a global place -so any where from app we can access data
-kind of global variable .but dont use as this word
-for class based componnet we can access context using UserContext.consumer (refer about page)
-if we can wrap one component userContext provider there ony access l be there
-Context is globa space that we can provide to all the app

-useContext is the hook


# power of context-

if about us page is not loaded and we updatwd the user name i/p -if we load about it ll be updated value

# context vs redux
- context is used for small or medium app
- redux is used for big app 
-redux is scalabe
- we need to create multiple context

