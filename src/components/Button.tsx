import { forwardRef } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonProps= {
    title: string
}

export const Button= forwardRef<TouchableOpacity, ButtonProps>(({ title,...rest }, ref) => {
    return(
        <TouchableOpacity
        ref= {ref}
        style={ styles.tOpacity }
        {...rest}
        >
            <Text style={ styles.textStyle }>
                {title}
            </Text>
        </TouchableOpacity>
    )    
})

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