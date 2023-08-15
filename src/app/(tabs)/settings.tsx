import { StyleSheet, Text, View } from "react-native";


export default function Profile(){
    return(
        <View style= { styles.viewProps }>
            <Text style= { styles.textProps }>
                Settings
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