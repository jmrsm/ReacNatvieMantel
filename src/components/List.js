import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

const show_first = [
    {
        key : 1,
        name : 'Suits',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjYzOTU2Nl5BMl5BanBnXkFtZTgwMzAxMTg5MTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 2,
        name : 'grey Anatomy',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NDE4Mjg0MF5BMl5BanBnXkFtZTgwMjY0ODA0MzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 3,
        name : 'Arrow',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 4,
        name : 'Narcos',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 5,
        name : 'House of Card',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 6,
        name : 'Death Note',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
]

const show_second = [
    {
        key : 1,
        name : 'Suits',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjYzOTU2Nl5BMl5BanBnXkFtZTgwMzAxMTg5MTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 2,
        name : 'grey Anatomy',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NDE4Mjg0MF5BMl5BanBnXkFtZTgwMjY0ODA0MzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 3,
        name : 'Arrow',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 4,
        name : 'Narcos',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 5,
        name : 'House of Card',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        key : 6,
        name : 'Death Note',
        image : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
]



class List extends Component {
    _renderItem(item){
        return(
            <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
        )   
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style={styles.text}>Mi lista</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={()=> <View style={{width: 5}}/>}
                        renderItem={({item})=>this._renderItem(item)}
                        data = {show_first}
                    />
                </View>    
                <View>
                    <Text style={styles.text}>Categria</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={() => <View style={{width: 5}} />}
                        renderItem={({item})=>this._renderItem(item)}
                        data = {show_second}
                    />
                </View>    
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color:'white'
    }
})

export default List