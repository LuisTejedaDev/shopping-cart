import { SafeAreaView, StyleSheet, View } from "react-native"
import { Header, Product } from "../../Components"
import { useSelector } from "react-redux"
import { selectProducts } from "../../slices/productSlice"

export default ({navigation}) => {

    const products = useSelector(selectProducts)

    return(
        <>
			<SafeAreaView style={{backgroundColor: '#236490'}}/>
            <Header title="Carrito de Compras" canGoBack={() => navigation.goBack()} />
			<View style={styles.container}>
                <View style={{height: 'auto', alignSelf: 'stretch', marginVertical: 12}}>
                    {
                        products.filter(x => x.selected !== 0).map(x => 
                            <Product key={x.id} isShoppingCart={true} {...x}/>
                        )
                    }
                </View>
				<View style={{flex: 1}}/>
			</View>
			<SafeAreaView style={{backgroundColor: '#236490'}}/>
		</>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f1f1f1'
	}
})