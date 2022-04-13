import {imgCupcakes,imgCakes} from "../assets/images"

const items = [
    {
        id: 1,
        nombre: "Cupcakes 1",
        stock: 5,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[0],
        precio: 399
    },
    {
        id: 2,
        nombre: "Cupcakes 2",
        stock: 0,
        descripcion: "Estos cupcakes estan hechos de masa de vainilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[1],
        precio: 329
    },
    {
        id: 3,
        nombre: "Cupcakes 3",
        stock: 7,
        descripcion: "Estos cupcakes estan hechos de masa de frutilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[2],
        precio: 379
    },
    {
        id: 4,
        nombre: "Cupcakes 4",
        stock: 7,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate blanco con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[3],
        precio: 219
    },
    {
        id: 5,
        nombre: "Cupcakes 5",
        stock: 9,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[4],
        precio: 359
    },
    {
        id: 6,
        nombre: "Cupcakes 6",
        stock: 10,
        descripcion: "Estos cupcakes estan hechos de masa de avellanas con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[5],
        precio: 399
    },
    {
        id: 7,
        nombre: "Cupcakes 7",
        stock: 6,
        descripcion: "Estos cupcakes estan hechos de masa de zanahoria con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[0],
        precio: 529
    },
    {
        id: 8,
        nombre: "Cupcakes 8",
        stock: 4,
        descripcion: "Estos cupcakes estan hechos de masa de calabaza con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[1],
        precio: 459
    },
    {
        id: 9,
        nombre: "Cupcakes 9",
        stock: 6,
        descripcion: "Estos cupcakes estan hechos de masa de jengibre con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCupcakes[2],
        precio: 359
    },
    {
        id: 1001,
        nombre: "Cake 1",
        stock: 5,
        descripcion: "Estos Cake estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[0],
        precio: 399
    },
    {
        id: 1002,
        nombre: "Cake 2",
        stock: 0,
        descripcion: "Estos Cake estan hechos de masa de vainilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[1],
        precio: 329
    },
    {
        id: 1003,
        nombre: "Cake 3",
        stock: 7,
        descripcion: "Estos Cake estan hechos de masa de frutilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[2],
        precio: 379
    },
    {
        id: 1004,
        nombre: "Cake 4",
        stock: 7,
        descripcion: "Estos Cake estan hechos de masa de chocolate blanco con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[3],
        precio: 219
    },
    {
        id: 1005,
        nombre: "Cake 5",
        stock: 9,
        descripcion: "Estos Cake estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[4],
        precio: 359
    },
    {
        id: 1006,
        nombre: "Cake 6",
        stock: 10,
        descripcion: "Estos Cake estan hechos de masa de avellanas con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[5],
        precio: 399
    },
    {
        id: 1007,
        nombre: "Cake 7",
        stock: 6,
        descripcion: "Estos Cake estan hechos de masa de zanahoria con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[0],
        precio: 529
    },
    {
        id: 1008,
        nombre: "Cake 8",
        stock: 4,
        descripcion: "Estos Cake estan hechos de masa de calabaza con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[1],
        precio: 459
    },
    {
        id: 1009,
        nombre: "Cake 9",
        stock: 6,
        descripcion: "Estos Cake estan hechos de masa de jengibre con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: imgCakes[2],
        precio: 359
    },
]


export const getItems = ()=>{
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(items)
        },2500)
    })
}


export const getDatosbyId = id => {
    id = parseInt(id)
    return new Promise (resolve=>{
        setTimeout(()=>{
            let result = items.find(element => element.id === id)
            resolve(result)
        },2200)
    })
}