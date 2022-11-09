# rn-barcode

For the react native framework, there is a barcode scanner component.

[![publish](https://github.com/pushpender-singh-ap/rn-barcode/actions/workflows/npm.yml/badge.svg?branch=deploy&event=push)](https://github.com/pushpender-singh-ap/rn-barcode/actions/workflows/npm.yml)
[![GitHub license](https://img.shields.io/github/license/pushpender-singh-ap/rn-barcode.svg)](https://github.com/pushpender-singh-ap/rn-barcode/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pushpender-singh-ap/rn-barcode.svg)](https://github.com/pushpender-singh-ap/rn-barcode/issues)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/pushpender-singh-ap/rn-barcode/pulls)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/pushpender-singh-ap/rn-barcode.svg)](https://github.com/pushpender-singh-ap/rn-barcode/pull/)
[![GitHub contributors](https://img.shields.io/github/contributors/pushpender-singh-ap/rn-barcode.svg)](https://github.com/pushpender-singh-ap/rn-barcode/graphs/contributors/)
[![NPM Version](https://img.shields.io/npm/v/react-native-otp-verify-remastered.svg?style=flat)](https://www.npmjs.com/package/react-native-otp-verify-remastered)
[![GitHub last commit](https://img.shields.io/github/last-commit/pushpender-singh-ap/rn-barcode.svg?style=flat)](https://github.com/pushpender-singh-ap/rn-barcode/commits)

## Please note that this package is only for Android.

## Installation

```sh
npm install rn-barcode
```
## Usage

```javascript
import RnBarcodeScannerView from 'rn-barcode';

const scanner = () => {

    const onBarCodeRead = async (scanResult) => {
        console.log("scan result", scanResult)
    }

    return (
      <RnBarcodeScannerView
          onBarCodeRead={onBarCodeRead}
          style={{ flex: 1 }}
          torchMode={"off"}
          cameraType={"back"}
        />
    );

}
```

## License

MIT