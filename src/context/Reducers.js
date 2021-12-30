export function CartReducer(state,action){
    const {type,payload} = action;
switch (type){
    case 'ADD_TO_CART':{
        return{
            ...state,
            cart:[...state.cart,{...payload,qty:1}]
        }
    }
    case 'REMOVE_FROM_CART':{
        return{
            ...state,
            cart:state.cart.filter(item=>item.id!==payload.id)
        }
    }
    case 'CHANGE_CART_QTY':{
        const {id,qty} =payload;
        return{
            ...state,
            cart:state.cart.filter(c=>c.id===id?c.qty=qty:c.qty)
        }
    }
    default:
        return state;
}
}

export function ProductReducer(state,action){
    const {type,payload} = action;
    switch (type){
        case 'SORT_BY_PRICE':
            return{
                ...state,
                sort:payload,
            }
        case 'FILTER_BY_STOCK':
            return{
                ...state,
                byStock:!state.byStock
            }
        case 'FILTER_BY_DELIVERY':
            return{
                ...state,
                byFastDelivery:!state.byFastDelivery,
            }
        case 'FILTER_BY_SEARCH':
            return{
                ...state,
                searchQuery:payload,
            }
        case 'FILTER_BY_RATINGS':
            return{
                ...state,
                byRatings:payload,
            }
        case 'CLEAR_FILTERS':
            return{
                ...state,
                byStock:false,
                byFastDelivery:false,
                byRatings:0,
                searchQuery:'',
                sort:''
            }
        default:
            return state;
    }
}