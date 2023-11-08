import { NextResponse } from "next/server"
 
const modeloCamisa = [
    {id:1, modelo:"regata", cor:"azul", img:"/img/t-shirt-1976334_1280.png"},
    {id:2, modelo:"polo", cor:"vermelha", img:"/img/t-shirt-1976334_1280.png"},
    {id:3, modelo:"social", cor:"branca", img:"/img/t-shirt-1976334_1280.png"},
    {id:4, modelo:"m-longa", cor:"azul", img:"/img/t-shirt-1976334_1280.png"}
]
 
export async function GET(request, {params}) {
    //Ter que ter uma estrategia para retornar a lista e tambem o item especifico
   
    if(params.id > 0 && params.id <= modeloCamisa.length){
        const modelo = modeloCamisa.find((modelo) => modelo.id == params.id);
        return NextResponse.json(modelo);
    }else{
        return params.id == 0 ? NextResponse.json(modeloCamisa) : NextResponse.redirect("http://localhost:3000/error");
    }
   
    return NextResponse.json(modeloCamisa);
 
}