/**
 * @providesModule LayoutStyle
 */

import { StyleSheet, Platform, Dimensions } from 'react-native';


export default StyleSheet.create({
    mainContainer: {
        flex:1,


    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        paddingTop:25,
        backgroundColor: "#323a75",
    },
    headerIconCotainer:{
        flexDirection: "row",
        backgroundColor: "transparent",
        borderColor: null,
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,
        alignSelf: "center",
    },
    headerIcon:{
        alignSelf: 'center',
        color: '#fff',
    },
});
