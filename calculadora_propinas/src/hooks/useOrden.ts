import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrden() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuItem) =>{
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updateOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            // Toma una copia de lo que hay en la orden y en la parte de cantidad toma lo que ya tenemos como cantidad y le agrega uno
            setOrder(updateOrder)
        }else{
            const newItem = { ...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: MenuItem['id']) =>{
        setOrder(order.filter(item => item.id !== id))
        // Basicamente dice que guarde todos los elementos que son distindos al id que le pas
        // lo cual seria como eliminarlo con el filter
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
