module.exports = {
    connect : {
        BLPassword     : [true,"-","-","-"],
        serialNumber   : [false, 'serialNumber', '^([0-9A-Z]{10})$', 'string'],
        skuNumber      : [false, 'skuNumber', '^(AUG-AC[0-9]{2})|(02-01-001)$', 'string'],
        macAddressWiFi : [false, 'wifiMacAddress', 'mac address format', 'string'],
        shipDate       : [false, 'shipDate', 'ISO8601 date', 'date']
    },

    doorbell : {
        serialNumber     : [false, 'serialNumber', '^(D1[0-9A-Z]{8})$', 'string'],
        skuNumber        : [false, 'skuNumber', '^(AUG-AB[0-9]{2})|(02-01-001)$', 'string'],
        augfirmware      : [false, 'augfirmware', 'semver', 'string'],
        battserialnumber : [false, 'batterySerialNumber', '^([0-9A-Z]{10})$', 'string']
    }
}