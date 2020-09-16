
 <template>
   <div>
     <div id="map" class="map-x">
       <div class="buttons1">
         <!-- <el-checkbox v-model="checked1" label="显示标注" border></el-checkbox> -->
         <!-- 显示标注按钮 -->
              <el-button v-show="false" @click="addPoint" size="mini">
              </el-button>
               <el-tooltip effect="dark" content="点标注" placement="left" >
                <el-button type="plain" @click="addPoint" size="mini">
                <i class="iconfont iconditubiaoji1"></i></el-button>
               </el-tooltip>

               <el-tooltip effect="dark" content="线标注" placement="left">
                <el-button type="plain" @click="addLine" size="mini">
                <i class="iconfont iconzhixian"></i></el-button>
               </el-tooltip>

               <el-tooltip effect="dark" content="矩形标注" placement="left">
                <el-button type="plain" @click="addRect" size="mini">
                  <i class="iconfont iconjuxing"></i></el-button>
               </el-tooltip>

                <el-tooltip effect="dark" content="多边形标注" placement="left">
                 <el-button type="plain" @click="addRect" size="mini">
                   <i class="iconfont iconduobianxing" cricle></i></el-button>
                </el-tooltip>

               <el-tooltip effect="dark" content="显示标注" placement="left">
                <el-button type="plain" @click="viewMark" size="mini">
                 <i class="font_family icon-xianshibiaozhu" ></i></el-button>
              </el-tooltip>

              <el-tooltip effect="dark" content="添加所有控件" placement="left">
                <el-button type="plain" @click="addControl" size="mini">
                  <i class="font_family icon-kongjian" ></i></el-button>
               </el-tooltip>

               <el-tooltip effect="dark" content="加载瓦片地图" placement="left">
                <el-button type="plain" @click="addVector" size="mini">
                  <i class="font_family icon-iWhereVisual-wapianditufuwu" ></i></el-button>
               </el-tooltip>

              <el-tooltip effect="dark" content="加载矢量地图" placement="left">
                <el-button type="plain" @click="addVector" size="mini">
                  <i class="font_family icon-shiliangtu" ></i></el-button>
               </el-tooltip>

             <el-tooltip effect="dark" content="添加静态地图" placement="left">
               <el-button type="plain" @click="addImgStatic" size="mini">
                 <i class="font_family icon-tupian1"></i></el-button>
              </el-tooltip>


         </div>

      <div class="baseMap">
      <el-button @click="change_img"  size="small" round>切换影像底图</el-button>
     <el-button  @click="change_vec" size="small" round>切换街道底图</el-button>
     <el-button  @click="change_ter" size="small" round>切换地形底图</el-button>
    <!-- <BaseMap :baseMap="baseMap" ref="baseMap"></BaseMap> -->
     </div>
     </div>
   </div>
 </template>

 <script>

  import "../view/Map.vue"
  import 'ol/ol.css'
  import { Map, View,Control } from 'ol'
  import {Tile,Vector,Image} from 'ol/layer'
  import {OSM,XYZ,Vector as VectorSource,ImageStatic} from 'ol/source'
  import Draw, { createBox } from "ol/interaction/Draw"
  import Select from 'ol/interaction/Select'
  import Style from 'ol/style/Style'
  import Stroke from 'ol/style/Stroke'
  import Circle from 'ol/style/Circle'
  import Fill from 'ol/style/Fill'
  import Polygon from 'ol/geom/Polygon'
  import {MousePosition,ScaleLine,FullScreen}from 'ol/control'
  import Feature from 'ol/Feature'
  import Point from 'ol/geom/Point';
  import {transform, fromLonLat, toLonLat} from 'ol/proj'
  import GeoJSON from 'ol/format/GeoJSON'

  export default {
     // name: 'map',
    data () {
      return {
        map: null,
        map_img:null,
        map_vec:null,
        map_ter:null,

        pointLayer:null,
        lineLayer:null,
        rectLayer:null,
        polygonLayer:null,
        draw:null,
        gaodeMapLayer:null,
        vectorMapLayer:null,
        imgStatic:null,

        checked1:false,
        }
     },
     mounted () {
       //天地图
       // this.map=new T.Map('map')
       // var lnglat = new T.LngLat(116.40969,39.89945)
       // this.map.centerAndZoom(lnglat,12);
       var view =new View({
         center: fromLonLat([116.40969,39.89945]),
         zoom: 4
       })
       this.map = new Map({
         target: 'map',
         layers: [
           new Tile({
             source: new OSM()
           })
         ],
         view: view
       })
       this.pointLayer = new Vector({
           source: new VectorSource(),
           style: new Style({
            //线条样式
               stroke: new Stroke({
                   color: '#264df6',
                   width: 2
               }),
               //填充
               fill: new Fill({
                   color: 'rgba(37,241,239,0.2)'
               }),
               //画点时需要
               image: new Circle({
                   radius: 7,
                   //填充
                   fill: new Fill({
                       //填充颜色
                       color: '#e81818'
                   })
               })

           })
       });
       this.map.addLayer(this.pointLayer);

       // 添加一个绘制的线使用的layer
       this.lineLayer = new Vector({
           source: new VectorSource(),
           style: new Style({
               stroke: new Stroke({
                   color: 'red',
                   size: 1
               })
           })
       });
       this.map.addLayer(this.lineLayer);

       // 添加一个绘制的矩形使用的layer
       this.rectLayer = new Vector({
           source: new VectorSource(),
           style: new Style({
               stroke: new Stroke({
                   color: 'purple',
                   size: 1
               })
           })
       });
       this.map.addLayer(this.rectLayer);

       //添加一个绘制多边形的Layer
       this.polygonLayer = new Vector({
           source: new VectorSource(),
           style: new Style({
               stroke: new Stroke({
                   color: 'blue',
                   size: 1
               })
           })
       });
       this.map.addLayer(this.polygonLayer);

      },

     methods:{
       //  changeImg(){

       // },
       // change_img(){
       //   this.$ref.baseMap.changeImg();
       // },
       // change_vec(){
       //      this.$ref.baseMap.change_vec();
       // },

       //绘制点
         addPoint(){
           this.map.removeInteraction(this.draw);
           this.draw=new Draw({
             type: 'Point', // 设置绘制点
             source: this.pointLayer.getSource()
           });
           this.map.addInteraction(this.draw);
         },

         //绘制线
         addLine(){
           this.map.removeInteraction(this.draw);
           this.draw=new Draw({
             type: 'LineString', // 设置绘制线
             maxPoints:2,
             source: this.lineLayer.getSource()
           });
           this.map.addInteraction(this.draw);
         },

         //绘制矩形
         addRect(){
           this.map.removeInteraction(this.draw);
           this.draw = new Draw({
           type: 'Circle',
           source: this.rectLayer.getSource()  ,
           freehand: false,
           geometryFunction: createBox(),
       });
             this.map.addInteraction(this.draw);
         },
         //绘制多边形
         addPolygon(){
           this.map.removeInteraction(this.draw);
           this.draw=new Draw({
             type: 'Polygon' ,// 设置绘制多边形
             source: this.polygonLayer.getSource()
           });
           this.map.addInteraction(this.draw);
         },
         addVector(){
               this.vectorMapLayer=new Vector({
                         source: new VectorSource({
                             url: 'E:\eMarkRS1\eMarkRS\src\changsha.geojson',     // 地图来源
                             format: new GeoJSON()    // 解析矢量地图的格式化类
                         })
                     });
                     this.map.addLayer(this.vectorMapLayer)

         },

         //加载静态地图
         addImgStatic()
         {
           var center= [112.60752106, 27.97457504]
           var extent = [center[0]- 256*1000/2, center[1]-256*1000/2, center[0]+256*1000/2, center[1]+256*1000/2];
           //this.imgStatic
           var a =new Image({
                 source: new ImageStatic({
                     url: '方特.jpg',
                     imageExtent: extent     // 映射到地图的范围
                 })
             });
           this.map.addLayer(a);
           console.log(a)
             },

         //添加控件
         addControl(){
               this.map.addControl(new MousePosition());
               this.map.addControl(new ScaleLine());
               this.map.addControl(new FullScreen());
         },
       change_img (){
         var img = new Tile({
           source: new XYZ({
             url:  'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
           })
         });
         this.map.addLayer(img)
       },
       change_vec(){
         var map_cva= new Tile({
           source: new XYZ({
             url: "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
           })
         });
         var map_vec =new Tile({
           source: new XYZ({
             url: "http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
           })
         });

         this.map.addLayer(map_vec);
         this.map.addLayer(map_cva);
         //console.log(this.map.getLayers());
       },
       change_ter(){
         var map_ter =new Tile({
           source: new XYZ({
             url: "http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
           })
         });
         var map_cta =new Tile({
           source: new XYZ({
             url:  "http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
           })
         });
         this.map.addLayer(map_ter);
         this.map.addLayer(map_cta);
       },
       viewMark(){

           console.log("1");
           this.pointLayer.setZIndex(1);
           this.lineLayer.setZIndex(2);
           this.polygonLayer.setZIndex(3);
           this.rectLayer.setZIndex(4);


           },
    },



   // components:{
   //    BaseMap,
   //  }
   }
 </script>

 <style>
.map-x{
  position: absolute;
  width: 100%;
  /* z-index: -1; */
}
/* 工具按钮 */
  .buttons1{
    position: absolute;
    top: 70px;
    right: 10px;
    float: left;
    width: 60px;
  }
  .baseMap{
    position: absolute;
    top:80px;
    left: 0px;
    width: 500px;
  }
  .item{
/*    margin:400px */
  }
 </style>
