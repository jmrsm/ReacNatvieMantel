import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Alert,
    StyleSheet
}from 'react-native'

class LoginView extends Component{
    render(){
        return(
            <Image source={{uri :'https://images.unsplash.com/photo-1502445450262-e8ac19d23f19?dpr=1&auto=format&fit=crop&w=1534&q=60&cs=tinysrgb'}} style={[styles.container]}>
                <View>
                    <Text style={styles.titulo}>Mantel</Text>
                    <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
                        <Text style={styles.textBoton}>Login</Text>
                    </TouchableHighlight>    
                </View>
            </Image>
        )
    }
    onLogin(){
        Alert.alert(
            'Acceso',
            'Login a Mantel',
            [
                {
                    text:'Aceptar',
                    onPress:(this.aceptar.bind(this))
                },
            ]
        )
    }
    aceptar(){
        console.log('Login')
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        padding:30
    },
    boton:{
        width:300,
        height:30,
        backgroundColor:'#303F9F',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        borderRadius:8,
        borderWidth:1
    },
    textBoton:{
        color:'white'
    },
    titulo:{
        marginTop:100,
        fontSize:25,
        textAlign:'center',
        color:'white',
        backgroundColor: 'rgba(0,0,0,0)'
    }
})
export default LoginView