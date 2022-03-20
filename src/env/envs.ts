const CESIUM_TOKEN = process.env.VUE_APP_CESIUM_TOKEN || '',
  MAP_PLACE = process.env.VUE_APP_MAP_PLACE || '',
  LATITUDE = process.env.VUE_APP_LATITUDE || 0,
  LONGITUDE = process.env.VUE_APP_LONGITUDE || 0,
  envs = {
    CESIUM_TOKEN,
    LATITUDE,
    LONGITUDE,
    MAP_PLACE
  }

export { envs }
