const datos = [
    {
        id: 1,
        nombre: "Cupcakes 1",
        stock: 5,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake2.jpg",
        precio: 399
    },
    {
        id: 2,
        nombre: "Cupcakes 2",
        stock: 0,
        descripcion: "Estos cupcakes estan hechos de masa de vainilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake3.jpg",
        precio: 329
    },
    {
        id: 3,
        nombre: "Cupcakes 3",
        stock: 7,
        descripcion: "Estos cupcakes estan hechos de masa de frutilla con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake4.jpg",
        precio: 379
    },
    {
        id: 4,
        nombre: "Cupcakes 4",
        stock: 7,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate blanco con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake5.jpg",
        precio: 219
    },
    {
        id: 5,
        nombre: "Cupcakes 5",
        stock: 9,
        descripcion: "Estos cupcakes estan hechos de masa de chocolate con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake6.jpg",
        precio: 359
    },
    {
        id: 6,
        nombre: "Cupcakes 6",
        stock: 10,
        descripcion: "Estos cupcakes estan hechos de masa de avellanas con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake2.jpg",
        precio: 399
    },
    {
        id: 7,
        nombre: "Cupcakes 7",
        stock: 6,
        descripcion: "Estos cupcakes estan hechos de masa de zanahoria con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake3.jpg",
        precio: 529
    },
    {
        id: 8,
        nombre: "Cupcakes 8",
        stock: 4,
        descripcion: "Estos cupcakes estan hechos de masa de calabaza con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake4.jpg",
        precio: 459
    },
    {
        id: 9,
        nombre: "Cupcakes 9",
        stock: 6,
        descripcion: "Estos cupcakes estan hechos de masa de jengibre con brillos de avena y algun ingrediente mas que no se que lleva",
        imagen: "./assets/cupcake5.jpg",
        precio: 359
    },
]


export const getDatos = ()=>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(datos)
        },2000)
    })
}