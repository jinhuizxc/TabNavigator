import { StyleSheet, TextInput, View} from 'react-native'
import React, {Component} from 'react'
import {size, px3dp} from '../util/ScreenUtil'
import PropTypes from 'prop-types'

export default class _TextInput extends Component {
    static propType = {
        placeholder: PropTypes.string,
        onChangeText: PropTypes.func,
        addstyle: View.propTypes.style,
        placeholderTextColor:PropTypes.string,
    };

    render() {
        const {addstyle} = this.props;
        return (
            <TextInput underlineColorAndroid="transparent"
                       placeholderTextColor='#e2f0f7'
                       placeholder={this.props.placeholder}
                       onChangeText={this.props.onChangeText}
                       onEndEditing={this.props.onEndEditing}
                       style={[styles.text_input,addstyle]}
                       secureTextEntry={this.props.secureTextEntry}
            />
        )
    }
}

const styles = StyleSheet.create({
    text_input: {
        height: px3dp(110),
        paddingLeft: px3dp(10),
        marginLeft: px3dp(15),
    }
});

