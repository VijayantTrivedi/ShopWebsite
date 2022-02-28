// For Add Item  to Cart 
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// For Delete Item  from Cart 
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}


export const adjustQty = (product,value) =>{
    return{
        type : "COUNTER",
        payload:{
            id:product,
            qty:value,
        },
    };
};