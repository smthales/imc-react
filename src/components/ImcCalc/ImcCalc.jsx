import Button from '../Button/Button';
import './ImcCalc.css';
import { useState } from 'react';


const ImcCalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault(); // impede o recarregamento do navegador ao clicar no botão Limpar, permitindo com que os hook sejam usados em seguida
        setWeight("");
        setHeight("");
    }
    
    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                
                <div className='form-inputs'>
                    <div className='form-control'>
                        <label htmlFor="height">Altura:</label>
                        <input 
                        type="text" 
                        name='height' 
                        id='height' 
                        placeholder='Exemplo: 1,75'
                        onChange={(e) => setHeight(e.target.value)} 
                        value = {height} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor="weight">Massa:</label>
                        <input 
                        type="text" 
                        name='weight' 
                        id='weight' 
                        placeholder='Exemplo: 80' 
                        onChange={(e) => setWeight(e.target.value)} 
                        value = {weight}/>
                    </div>
                </div>

                <div className='action-control'>
                    
                    <Button id='calc-btn' text='Calcular'/>
                    <Button id='clear-btn' text='Limpar' action={clearForm}/>
                
                </div>   

            </form>
        </div>
    )
};

export default ImcCalc;