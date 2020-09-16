<template>
 <div class="button_map">
  <button @click="changeImg">切换影像底图</button>
  <button @click="change_vec">切换街道底图</button>
  <button @click="change_ter">切换地形底图</button>
  </div>
</template>

<script>
  import Map from 'ol/Map'
  import View from 'ol/View'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import XYZ from 'ol/source/XYZ'
  import {fromLonLat} from 'ol/proj.js';

  export default {
    name:'baseMap',
    data () {
      return {
        // map: null,
        map_img:null,
        map_vec:null,
        map_ter:null,
      }
    },
    methods:{
        changeImg (){
           this.$emit("changeImg",{})
          var img = new TileLayer({
            source: new XYZ({
              url:  'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
            })
          });
          this.map.addLayer(img)
        },
        change_vec(){
          var map_cva= new TileLayer({
            source: new XYZ({
              url: "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
            })
          });
          var map_vec =new TileLayer({
            source: new XYZ({
              url: "http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
            })
          });

          this.map.addLayer(map_vec);
          this.map.addLayer(map_cva);
          //console.log(this.map.getLayers());
        },
        change_ter(){
          var map_ter =new TileLayer({
            source: new XYZ({
              url: "http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
            })
          });
          var map_cta =new TileLayer({
            source: new XYZ({
              url:  "http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
            })
          });
          this.map.addLayer(map_ter);
          this.map.addLayer(map_cta);
        }
      }

    }
</script>

<style>
 .button_map{
   position: absolute;
   top:100px;
   z-index: 1;
 }
</style>
