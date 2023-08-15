import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'
import { Button } from "@/components/Button";

export default function Home(){
    return(
        <View style= { styles.viewProps }>
            <Text style= { styles.textProps }>
                Home
            </Text>
            <Button title="Configurações" />
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