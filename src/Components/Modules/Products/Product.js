import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from "react-redux"
import { addProduct, removeAllProducts, removeProduct } from "../../../slices/productSlice"

export default ({id, img, name, description, price, selected, stock, isShoppingCart = false}) => {
    const dispatch = useDispatch()

    return(
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: img}}
                    style={{height: 60, width: 60}}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontSize: 16, fontWeight: '400', color: '#383838', marginBottom: 2}}>{name}</Text>
                <Text style={{fontSize: 12, color: '#adadad', marginBottom: 2}}>{description.length > 30 ? `${description.substring(0,30)}...` : description}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#383838', marginBottom: 2}}>{`$${price}`}</Text>
                <View style={{height: 30, width: 90, backgroundColor: '#adadad', flexDirection: 'row', padding: 1}}>
                    <TouchableOpacity 
                        onPress={() => dispatch(removeProduct(id))}
                        style={styles.controlButton}>
                        <Material name={'minus'} size={19} color={'#383838'}/>
                    </TouchableOpacity>
                    <View style={{width: 1}}/>
                    <View style={[styles.controlButton, {backgroundColor: '#dadada'}]}>
                        <Text>{selected}</Text>
                    </View>
                    <View style={{width: 1}}/>
                    <TouchableOpacity 
                        onPress={() => dispatch(addProduct(id))}
                        style={styles.controlButton}>
                        <Material name={'plus'} size={19} color={'#383838'}/>
                    </TouchableOpacity>
                </View>
            </View>
            {
                isShoppingCart
                &&
                    <TouchableOpacity 
                        onPress={() => dispatch(removeAllProducts(id))}
                        style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Material name={'trash-can'} size={22} color={'#CB4335'}/>
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 'auto',
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
        marginBottom: 12,
        padding: 12,
        borderRadius: 12
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: '#dadada',
        padding: 4,
        borderRadius: 12,
        marginRight: 12,
    },
    controlButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    } 
})