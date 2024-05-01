import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({title = '', canGoBack = undefined, RightContent = undefined}) => {
    return(
        <View style={styles.header}>

            {
                canGoBack
                ?
                    <TouchableOpacity 
                        onPress={() => canGoBack()}
                        style={styles.button}>
                        <Material name={'arrow-left'} size={24} color={'#fff'}/>
                    </TouchableOpacity>
                :
                    <View style={styles.button} />
            }


            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{title}</Text>
            </View>

            {
                RightContent
                ?
                    <RightContent />
                :
                    <View style={styles.button} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#2874A6'
    },
    button: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})