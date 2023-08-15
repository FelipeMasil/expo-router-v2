import { StyleSheet, Text, View } from "react-native";


export default function Home(){
    return(
        <View style= { styles.viewProps }>
            <Text style= { styles.textProps }>
                Home
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