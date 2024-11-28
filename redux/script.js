const redux=require('redux')
const createStore=redux.createStore

const ORDER_PIZZA="ORDER_PIZZA"
const ORDER_BURGER="ORDER_BURGER"

function orderPizza(){
    return action={
        type:ORDER_PIZZA,
        
    }
}

function orderBurger(){
    return action={
        type:ORDER_BURGER
    }
}

//REDUCER 
//Make different initial state
const initialStateForPizza={
    pizzaBase:100,
    //toppings:['chesse','capsicum'],
}

const initialStateForBurger={
    burgerBuns:200
}


const reducerPizza=(state=initialStateForPizza,action)=>{
         switch(action.type){
            case ORDER_PIZZA:
                return{
                    ...state,
                   pizzaBase: state.pizzaBase-1
                }   
            default:
                return state
         }
}

const reducerBurger=(state=initialStateForBurger,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
               burgerBuns: state.burgerBuns-1
            }   
        default:
            return state
     }
}


//store

const store=createStore(reducerPizza)
console.log(store.getState())
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(orderPizza()); 
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())

unsubscribe()