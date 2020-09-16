<template>
<div class="wrap">
  <div class="map" id="map"></div>
    <!-- 右上角工具按钮 -->
<!-- <div class="tools">
      <div class="map-buttons"> -->
        <!-- 标注显示按钮 -->
        <!-- <div class="mark-show">
         <el-checkbox v-model="checked1" @click="viewMark" label="显示标注" border></el-checkbox>
         </div>
          <div class="buttons">
          <el-button-group>
          <el-button type="plain" @click="Show_MarkAdd(true)" />
               <el-button type="plain" @click="addPoint" >
               <i class="iconfont iconditubiaoji1"></i>点标注</el-button>

             <el-button type="plain" @click="Show_MarkAdd(true)" >
               <i class="iconfont iconzhixian"></i>线标注</el-button>

             <el-button type="plain" @click="Show_MarkAdd(true)">
               <i class="iconfont iconjuxing"></i>矩形标注</el-button>
             <el-button type="plain"  @click="Show_MarkAdd(true)">
               <i class="iconfont iconduobianxing"></i>多边形标注</el-button>
           </el-button-group>

       </div>

      </div>
     </div> -->
    <MarkAdd class="MarkAdd" v-show="show_markadd"
      :show_markadd="show_markadd"
      @MarkAddVisibleEvent="Show_MarkAdd">
    </MarkAdd>


 </div>
</template>

<script>

  import MarkAdd from "../components/MarkAdd.vue" //添加标注弹窗

    export default {
      data () {
        return {
          checked1: false,
          show_markadd:false,
          map:'',
        };
      },
     components:{
       MarkAdd,
     },

     methods:{
       Show_MarkAdd(visible){
       this.show_markadd=visible;
       },
     },
     //显示标注
     viewMark(){

     },

    };
</script>

<style>
  /* 地图框 */
    .map{
         position: absolute;
         width: 100%;
         left: 0;
         top:70px;
         bottom:40px ;
         z-index: -1;
         /* background-color: #42B983; */
    }
    /* 显示标注按钮 */
  .mark-show{
    position: absolute;
    top:100px;
    right:600px;
    width: 112px;
    background-color: white;
    border-radius: 5px;

  }
  /* 工具按钮 */
  .buttons{
    position: absolute;
    top:100px;
    right: 0;
    width: 500px;
  }
 .MarkAdd{
    position: absolute;
    top:50%;
    left:50%;
    margin:auto;
  }


</style>
