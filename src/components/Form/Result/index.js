import { Text, View } from 'react-native';
import styles from './style';

export default function Result(props){
    let color;
    if(props.imc < 18.5){
        color = styles.corAbaixoPeso;
    }else if(props.imc >= 18.5 && props.imc < 24.9){
        color = styles.corNormal;
    }else{
        color = styles.corObeso;
    }
    return(
        <View style={styles.resultadoIMC}>
            <Text style={styles.info}>Seu IMC é de:</Text>
            <Text style={styles.imc}>{props.imc}</Text>
            <Text style={[styles.msgResultado, color]}>{props.msgResultado}</Text>
        </View>
    );
}