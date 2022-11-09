# rn-barcode

For the react native framework, there is a barcode scanner component.

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