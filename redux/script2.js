//MULTIPLE REDUCER

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
const initialState={
    pizzaBase:100,
    toppings:['chesse','capsicum'],
    burgerBuns:200
}

const reducer=(state=initialState,action)=>{
         switch(action.type){
            case ORDER_PIZZA:
                return{
                    ...state,
                   pizzaBase: state.pizzaBase-1
                }
            case ORDER_BURGER:
            return{
                ...state,
                burgerBuns:state.burgerBuns-1
            }    
            default:
                return state
         }
}


//store

const store=createStore(reducer)
console.log(store.getState())
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(orderPizza()); 
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())

unsubscribe()

//y sab thoda confusion hoga islie scipt 3 mai dekho kyaaa krna hai iska

