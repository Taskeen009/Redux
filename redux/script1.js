// const redux=require('redux')

// const createStore=redux.createStore

// const ORDER_PIZZA='ORDER_PIZZA'

// //ACTION

// // const action={
// //     type:ORDER_PIZZA,
// //     shop_name:"PIzza shop",
// // }



// //ACTION CREATOR
// function orderPizza(){
//     return action={
//         type:ORDER_PIZZA,
//         //shop_name:"PIzza shop",
//        // payload
//     }
// }

// //Reducer
// const initialState={
//     pizzaBase:100,
//     toppings:['cheese','capsicum']
// }


// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ORDER_PIZZA:
//             return{
//                 ...state,
//                 pizzaBase:state.pizzaBase-1
//             }
//         default:
//             return state;
//     }
// }

// //STORE
// //1 store needs to hold application state
// const store=createStore(reducer)

// //2 exposesa method to getstate to get access to cuuent state
// console.log(store.getState())

// //3 registers listeners via subscribe(listener)
// store.subscribe(()=>console.log("updated state",store.getState()))

// //4 allows to get updated by a dispatch action
// // store.dispatch({
// //     type:ORDER_PIZZA,
    
// // })
// store.dispatch(orderPizza())



const redux=require('redux')
const createStore=redux.createStore

const ORDER_PIZZA="ORDER_PIZZA"



function orderPizza(){
    return action={
        type:ORDER_PIZZA,
        
    }
}

//REDUCER
const initialState={
    pizzaBase:100,
    toppings:['chesse','capsicum']
}

const reducer=(state=initialState,action)=>{
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


//store

const store=createStore(reducer)
console.log(store.getState())
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(orderPizza()); 
unsubscribe()
store.dispatch(orderPizza())
store.dispatch(orderPizza())

