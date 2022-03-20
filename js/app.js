'use strict'

const productos = [
    {
        id: 1,
        nombre:"Lechuga", 
        precio: 78, 
        stock: 3
    },
    {
        id: 2,
        nombre:"Morron", 
        precio: 115, 
        stock: 3, 
        cantidad: 1
    },
    {
        id: 3,
        nombre:"Tomate", 
        precio: 210, 
        stock: 3
    },
    {
        id: 4,
        nombre:"Acelga", 
        precio: 80, 
        stock: 3
    },
    {
        id: 5,
        nombre:"Puerro", 
        precio: 89, 
        stock: 3
    },
    {
        id: 6,
        nombre:"Papa", 
        precio: 80, 
        stock: 3 
    }
]

let carrito = []
let cantidad = 0
let opcion = 0
let totalCompra = 0

const comprobarStock = (stock, cantidad) => {
    if(stock < cantidad) {
        return false
    } else {
        return true
    }

}

const restaStock = (stock, cantidad) => {
    stock -= cantidad
    return stock
}

const calculeTotalPrecio = (cantidad, precio) => {
     return cantidad * precio
}


const compra = (productos, productoElegido, cantidad) =>{
    productos.forEach( producto => {
        if(producto.id == productoElegido){
            
            let comprueba = comprobarStock(producto.stock, cantidad)
            
            if(comprueba == true) {
                totalCompra += calculeTotalPrecio(cantidad, producto.precio)
                carrito.push(`${producto.nombre} $${producto.precio}`)
                producto.stock = restaStock(producto.stock, cantidad)
                
            }else {
                console.log(`No hay mas de este producto`)
            }
        }
    })
}

do {
    opcion = Number(prompt(`Que desea hacer: 
                            1 - Comprar Producto
                            2 - Buscar precios
                            0 - Terminar su compra`))
    
    switch(opcion){
        case 1:
            let productoElegido =prompt(`Elija un producto de la lista:
                            1- Lechuga  $78
                            2- Morron   $115
                            3- Tomate   $210
                            4 - Acelga  $80
                            5 - Puerro  $89
                            6 - Papa    $80`)

            cantidad = prompt(`Que cantidad del producto va a llevar en kg.: `)

            compra(productos, productoElegido, cantidad)
        break;
        
        case 2: 
            const filtoPorPrecio = productos.filter( (producto) => producto.precio > 100)
            filtoPorPrecio.forEach(producto => {
                console.log(`${producto.nommbre}-${producto.precio}`)                
            });
        break;

        case 0:
            console.log(`Usted acaba de comprar ${carrito} por un total de $${totalCompra}`)

    } 
} 
while(opcion != 0)