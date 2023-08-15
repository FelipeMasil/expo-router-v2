import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonProps= {
    title: string
}


export function Button(props: ButtonProps) {
    return(
        <TouchableOpacity style={ styles.tOpacity }>
            <Text style={ styles.textStyle }>
                {props.title}
            </Text>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    tOpacity: {
        width: 200,
        padding: 16,
        backgroundColor: "#8257e5",
        alignItems: "center",
        borderRadius: 8
    },
    textStyle: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700"
    }
})