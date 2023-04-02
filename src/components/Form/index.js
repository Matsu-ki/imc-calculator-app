import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";



export default function Form (){

    
const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [msgCalculo, setMsgCalculo] = useState(null)
const [msgResultado, setMsgResultado] = useState(null)
const [imc, setIMC] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [inputError, setInputError] = useState(false)



    function calcularImc(alturaFormat, pesoFormat){
    let imcFinal = (Number.parseFloat(pesoFormat) / (Number.parseFloat(alturaFormat) * Number.parseFloat(alturaFormat)))
    setIMC(imcFinal.toFixed(1));
    resultado(imcFinal);
}

    function resultado(imc){
    if(imc >= 17 && imc < 18.5){
        setMsgResultado("Você está abaixo do peso")
    }else if(imc >= 18.5 && imc <= 24.9){
        setMsgResultado("Você está com o peso normal")
    }else if(imc >= 25 && imc <= 29.9){
        setMsgResultado("Você está acima do peso")
    }else if(imc >= 30 && imc <= 34.9){
        setMsgResultado("Você está com obesidade")
    }else if(imc >= 35 && imc <= 39.9){
        setMsgResultado("Você está com obesidade II (severa)")
    }else if(imc >= 40){
        setMsgResultado("Você está com obesidade III (mórbida)")
    }else{
        setMsgResultado("Você está muito abaixo do seu peso")
    }
    }

    function validacao(){
        if (altura == null || peso == null) {
            setInputError(true)
            setMsgCalculo("Preencha os campos!");
            setIMC(null)
        } else {
            setInputError(false)
            let alturaFormat = altura.replace(",",".");
            let pesoFormat = peso.replace(",",".");
            if(alturaFormat >= 0 && pesoFormat >= 0){
                calcularImc(alturaFormat, pesoFormat);
                setAltura(null);
                setPeso(null);
                setTextButton("Calcular Novamente")
                setMsgCalculo(null)
            } else {
                setInputError(true)
                setMsgCalculo("Valor Inválido!")
                setAltura(null)
                setPeso(null)
                setTextButton("Calcular")
            }
        }
    }


    function limparCampos() {
        setInputError(false);
        setAltura(null);
        setPeso(null);
        setTextButton("Calcular");
        setMsgCalculo(null);
        setMsgResultado(null);
        setIMC(null);
    }


    return(
        <View style={styles.form}>
            { imc == null ?
            <View>
                { msgCalculo != null && (
                <Text style={styles.alerta}>{msgCalculo}</Text>
            )}
                <Text style={styles.label}>Digite sua altura</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    value={altura}
                    onChangeText={setAltura}
                />

                <Text style={styles.label}>Digite seu peso</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={setPeso}
                />

                <TouchableOpacity onPress={() => validacao()}>
                    <Text style={styles.button}>{textButton}</Text>
                </TouchableOpacity>
                </View>
            :
            <View>
            <Result imc={imc} msgResultado={msgResultado}/>
            <TouchableOpacity onPress={() => {limparCampos()}}>
                <Text style={styles.button}>Calcular Novamente</Text>
            </TouchableOpacity>
        </View>
            }
        </View>
    );
}
