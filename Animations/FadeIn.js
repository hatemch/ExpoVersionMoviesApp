// Animations/FadeIn.js

import React from 'react'
import { Animated, Dimensions } from 'react-native'

class FadeIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.positionLeft,
            {
                toValue: 0,
                //useNativeDriver: true // solve the warning Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`
            }
        ).start()
    }

    render() {
        return (
            <Animated.View
                style={{ left: this.state.positionLeft }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeIn