import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
    children: React.JSX.Element
}

const FlexCenter = (props: Props) => {
  return (
    <View style={styles.flexCenter}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    flexCenter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 10
    }
})

export default FlexCenter