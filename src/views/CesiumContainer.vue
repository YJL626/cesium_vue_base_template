<template>
  <div id="cesiumContainer"></div>
</template>
<script setup lang="ts">
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'

import { envs } from '@/env/envs'
import { useParkingStore } from '@/stores/parkingStore'
const parkingStore = useParkingStore()
parkingStore.init()
console.log(parkingStore)

const initCesium = () => {
  window.CESIUM_BASE_URL = ''
  Cesium.Ion.defaultAccessToken = envs.CESIUM_TOKEN

  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
  })

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0)
    }
  })
}
onMounted(initCesium)
</script>
<style lang="scss" scope></style>
