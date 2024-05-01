import {SafeAreaView, StyleSheet, Text, View} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {selectProducts, setProducts} from "../../slices/productSlice"
import { useEffect, useState } from "react"
import { Cart, Header, Product } from "../../Components"

export default () => {

	const dispatch = useDispatch()
	const [loading, setLoading] = useState(null)
	const products = useSelector(selectProducts)

	const getInformation = () => {
		setLoading(true)
		setTimeout(() => {
			dispatch(setProducts([
				{
					id: 1,
					img: 'https://i.ibb.co/vd8hSSB/camisa.webp',
					name: 'Camisa de Vestir',
					description: 'Color Verde Esmeralda Talla G',
					price: 1225,
					stock: 3,
					selected: 0
				},
				{
					id: 2,
					img: 'https://i.ibb.co/K0GjPDV/zapatillas.webp',
					name: 'Zapatillas Nike',
					description: 'Calzado Moderno Talla 28',
					price: 3200,
					stock: 10,
					selected: 0
				},
				{
					id: 3,
					img: 'https://i.ibb.co/MhyyWNw/mochila.webp',
					name: 'Mochila para Acampar',
					description: 'Capacidad de 27 kilos, Cómoda, Color Negro',
					price: 780,
					stock: 5,
					selected: 0
				},
				{
					id: 4,
					img: 'https://i.ibb.co/KKx5wPq/audifonos.png',
					name: 'Audifonos Sony Ocrocher',
					description: 'Audifonos Inálambricos Sony',
					price: 2128,
					stock: 3,
					selected: 0
				},
				{
					id: 5,
					img: 'https://i.ibb.co/tYQWY7S/reloj.png',
					name: 'Reloj Calvin Klein',
					description: 'Reloj de Mano, Correa de Piel, Autorecargable',
					price: 8249,
					stock: 8,
					selected: 0
				},
			]))
			setLoading(false)
		}, 2500);
	}

	useEffect(() => {
		getInformation()
	}, [])

	return(
		<>
			<SafeAreaView style={{backgroundColor: '#236490'}}/>
            <Header title="Productos" RightContent={Cart} />
			<View style={styles.container}>
                {
                    !loading
                    ?
                        <View style={{height: 'auto', alignSelf: 'stretch', marginVertical: 12}}>
                            {
                                products.map(x => 
                                    <Product key={x.id} isShoppingCart={false} {...x}/>
                                )
                            }
                        </View>
                    :
                        <Text>Cargando...</Text>
                }
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