import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from "react-redux"
import { selectProducts } from "../../../slices/productSlice"
import { useEffect } from "react"

export default () => {

    const navigation = useNavigation()
    const products = useSelector(selectProducts)

    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('ShoppingCart')}    
        >
            <Material name={'cart'} size={20} color={'#fff'}/>
            <View style={{width: 16, height: 16, borderRadius: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 3, right: 3}}>
                <Text style={{fontSize: 9, color: '#2874A6', fontWeight: 'bold'}}>{products.reduce((acumulado, actual) => acumulado + actual.selected, 0)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})