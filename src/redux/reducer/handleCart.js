const handleCart = [];

const handleCarts = (state=handleCart,action) => {
    let findPro;
    let index,totalPrice;
    let discountPrice,totalQuantities;
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //check if product is already exist
            const exist = state.find((x)=> x.id === product.id);
            if(exist){
                //Increase the Quantity
                return state.map((x)=>
                x.id === product.id ? {...x,qty: x.qty+1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
           

            case "DELITEM":
                const exist1 = state.find((x)=>x.id === product.id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x,qty: x.qty-1}:x
                    );
                }
           
            // case "INC":
            //     findPro = state.product.find(product => product.id === action.payload);
            //     index = state.product.findIndex(product => product.id === action.payload);
            //     findPro.quantity += 1;
            //     state.product[index] = findPro;
            //     return{
            //         ...state,
            //         totalPrice : state.totalPrice + findPro.discountPrice,totalQuantities:state.totalQuantities+1
            //     }
        default:
            return state;
           
    }
}

export default handleCarts;