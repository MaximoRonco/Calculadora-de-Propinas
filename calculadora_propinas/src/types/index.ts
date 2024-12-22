export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// De esta forma tomamos todo lo de MenuItem y lo asignamos
// hacia OrderItem + la quantity que es la cantidad de tipo numero
export type OrderItem = MenuItem & {
    quantity: number
}