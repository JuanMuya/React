import React, { useState } from "react"
import useCounter from "../hooks/useCounter"
import { useSafeLayoutEffect } from "@chakra-ui/react"

const CounterComponent = () => {

    const { contador, suma, resta } = useCounter(0, 1)




    return (
        <div>
            <h3>Contador:{contador} </h3>
            <button onClick={resta}>restar</button>
            <button onClick={suma}>sumar </button>
        </div>
    )
}

export default CounterComponent