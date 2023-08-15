import { Button, StyleSheet, Text, View } from "react-native";
import { useSearchParams } from 'expo-router'

export default function Product(){

    const { id } = useSearchParams()
    return(

        <View style= { styles.viewProps }>
            <Text style= { styles.textProps }>
                Produto: {id}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewProps: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textProps: {
        fontSize: 44,
        fontWeight: "700"
    }
})