import { StyleSheet } from "react-native";
import { COLORS } from "../global/theme";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.headerBackground,
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%'
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color:  COLORS.textTitle
    },
    button: {
        width: 100
    }
});