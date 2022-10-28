import { useState } from "react";

export const UseContador = () =>{

const [data, SetData] =  useState(0)

const aumetar = () => {
    SetData (data+1)
}
const reset = () => {
    SetData(0)
}
const disminuir = () => {
    if (data <= 0) {
        SetData(data = 0)
    }
    else{
        SetData(data-1)
    }
    
}

return {
    aumetar, reset, disminuir, data, SetData
}
}
