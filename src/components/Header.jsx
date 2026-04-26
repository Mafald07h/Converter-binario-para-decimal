import "./Header.css";
import Button from "./Button.jsx";
import React, { useState } from "react";

function Header() {
    const [inputBinario, setInputBinario] = useState('');
    const [resultadoDecimal, setResultadoDecimal] = useState(0);

    const converterParaDecimal = () => {
        const listaNumeros = inputBinario.split("").reverse();
        
        let valorAcumulado = 0;

        for (let i = 0; i < listaNumeros.length; i++) {
            const bit = parseInt(listaNumeros[i], 10);
            if (bit === 1) {
                valorAcumulado += Math.pow(2, i);
            }
        }
        
        setResultadoDecimal(valorAcumulado);
    };

    return (
        <header>
            <h1 className="header__title">Converter de binário para decimal</h1>
            <div className="header__container">
                <p className="header__text">Desenvolvido em React JS + Javascript</p>
                
                <input 
                    type="text" 
                    placeholder="Digite o número em binário" 
                    className="header__input" 
                    value={inputBinario} 
                    onChange={(e) => setInputBinario(e.target.value)}
                />
                
                <div onClick={converterParaDecimal}>
                    <Button buttonTitle={"Converter"} />
                </div>

                <p className="resultado">Resultado: {resultadoDecimal}</p>
            </div>
        </header>
    );
}

export default Header;