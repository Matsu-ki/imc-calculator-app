import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultadoIMC: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    imc: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corAbaixoPeso: {
        backgroundColor: '#f0dc82',
    },

    corNormal: {
        backgroundColor: '#32c232',
    },

    corObeso: {
        backgroundColor: '#ad75ad',
    },
});

export default styles;