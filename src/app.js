import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import LoginView from './components/LoginView'
class App extends Component {
    render(){
        return(
            <View style={[styles.container]}>
                <LoginView></LoginView>
             </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white'
    }
})

export default App 