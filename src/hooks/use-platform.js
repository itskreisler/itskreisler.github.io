import Platform from 'react-platform-js'
const usePlatform = () => {
  return {
    OS: Platform.OS,
    OSVersion: Platform.OSVersion,
    Browser: Platform.Browser,
    BrowserVersion: Platform.BrowserVersion,
    DeviceType: Platform.DeviceType,
    DeviceModel: Platform.DeviceModel,
    DeviceVendor: Platform.DeviceVendor,
    Engine: Platform.Engine,
    EngineVersion: Platform.EngineVersion,
    CPU: Platform.CPU,
    UA: Platform.UA
  }
}

export { usePlatform }
