import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Products, ShoppingCart } from "./Screens/Products"


export default () => {

	const Stack = createStackNavigator()

	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={"Products"}
			>
				<Stack.Screen name={'Products'} component={Products}/>
				<Stack.Screen name={'ShoppingCart'} component={ShoppingCart}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}