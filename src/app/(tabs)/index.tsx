import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Home(){
    return(
        <View style= { styles.viewProps }>
            <Text style= { styles.textProps }>
                Home
            </Text>
            <Link href="/product/5" asChild>
                <Button title="Ver Produto" />
            </Link>
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