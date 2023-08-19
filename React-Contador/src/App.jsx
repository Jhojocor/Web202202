import React from "react"
import { Button,Counter,Header } from "./components/index"

export function App(){
    return(
        <section className="Arreglo"> 
            <Header />
            <Counter />
            <div className="Arreglo2">
                <Button type="Add"/>
                <Button type="Substract"/>
            </div>
        </section>
    )
}