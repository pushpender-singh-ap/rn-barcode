'use strict';

import React, {
    Component,
} from 'react';
import {
    requireNativeComponent,
    View,
} from 'react-native';

import PropTypes from 'prop-types';

class RnBarcodeScannerView extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if (!this.props.onBarCodeRead) {
            return;
        }

        this.props.onBarCodeRead({
            type: event.nativeEvent.type,
            data: event.nativeEvent.data,
        });
    }

    render() {
        return (
            <RNRnBarcodeScannerView {...this.props} onChange={this.onChange}>
                {this.props.children}
            </RNRnBarcodeScannerView>
        );
    }
}

RnBarcodeScannerView.propTypes = {
    ...View.propTypes,
    cameraType: PropTypes.string,
    onBarCodeRead: PropTypes.func,
    showLoadingIndicator: PropTypes.bool,
    torchMode: PropTypes.string,
};

var RNRnBarcodeScannerView = requireNativeComponent('RNRnBarcodeScannerView', RnBarcodeScannerView, {
    nativeOnly: { onChange: true }
});

module.exports = RnBarcodeScannerView;
