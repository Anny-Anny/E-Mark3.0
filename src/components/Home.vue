<template>
  <div class="wrap" >
    
    <!-- 标题栏 -->
    <div class="title_N">
      <div class="navigation">
      <img src="../assets/标题2.png"/>
      <ul class="ul-left">
        <li ><a @click="Graphic_Show">遥感影像</a></li>
        <li><a>标注编辑</a></li>
      </ul>
      <ul class="ul-right">
        <li ><a>用户</a></li>
        <li><a>帮助</a></li>
      </ul>
      </div>
    </div>

   <!-- 地图窗口 -->
    <div class="map">
      <!-- 右上角工具按钮 -->
    <div class="tools">
        <div class="map-buttons">
          <!-- 标注显示按钮 -->
           <div class="mark-show">
           <el-checkbox v-model="checked1" label="显示标注" border></el-checkbox>
           </div>
            <div class="buttons">
            <el-button-group>
               <el-button type="plain" ><i icon="../assets/Cart_remove_128px_1198149_easyicon.net">点标注</i></el-button>

               <el-button type="plain" icon="el-icon-share" @click="show_MarkAdd" >线标注</el-button>

               <el-button type="plain" icon="el-icon-delete">矩形标注</el-button>
               <el-button type="plain" icon="el-icon-delete" @click="show_MarkAdd">多边形标注</el-button>
             </el-button-group>

           </div>

        </div>
       </div>

     </div>


    <!-- 底部 -->
    <div class="bottom"></div>
    
    <!-- 组件引用 -->
    <MarkAdd v-show="show_markadd"></MarkAdd>
    <Graphic v-show="Graphic_show"></Graphic>
  </div>


</template>

<script>
import MarkAdd from "./MarkAdd.vue"
import Graphic from "./Graphic.vue"
  export default {
    data () {
      return {
        checked1: false,
        show_markadd:false,
        Graphic_show:false,
             };
      },
      components:{
        MarkAdd,
        Graphic,
      },
     methods:{
			 show_MarkAdd(){
       this.show_markadd=true;
			 },
       Graphic_Show(){
         this.Graphic_show=true;
       },

		 }
  };
</script>

<style>
 /* 边框 */
 .wrap{
    height: auto;
    width: 100%;
  }
/* 标题栏的框 */
  .title_N{
    position: absolute;
    height: 70px;
    width: 100%;
    left: 0;
    top:0;
    background-color:#00BFFF;
  }
  /* 标题栏内容的框 */
  .navigation{
     position: absolute;
     width:90%;
     height: 100%;
     left: 50px;
  }
 /* 标题栏图片 */
  .navigation img{
    position: absolute;
    width: 380px;
    height: 70px;
    top:0px;
    bottom: 0px;
    margin:auto;
  }
/* 标题栏左侧导航 */
/*  .ul-left{
    list-style: none;
    margin-left: 50px;
    display: inline;
} */
  .ul-left{
    position: absolute;
    list-style: none;
    margin-left: 400px;
    width:350px;
    height: 70px;
  }
 /* .navigation ul{
    position: absolute;
    list-style: none;
    margin-left: 100px;
    width:200px;
    height: 70px;
  } */
  .ul-left li{
    display: inline;
    font-size: 22px;
    vertical-align: top;
    width: 100px;
    height: 70px;
    color: #FFFFFF;
  }
  .ul-left a{
    cursor: pointer;
    font-family:"arial black";
    height: 70px;
    line-height: 35px;
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    display: inline;
  }
  .ul-left a:hover{
    color: #FFF	;
    background-color:rgb(0,205,255);
  }
  /* 右侧导航栏 */
  .ul-right{
    position: absolute;
    right: 0;
    position: absolute;
    list-style: none;
    width:100px;
    top:8px;
  }
  .ul-right li{
    display: inline;
    font-size: 20px;
    vertical-align: bottom;
    width: 80px;
    height:40px;
    color: #FFFFFF;
  }
  .ul-right a{
  cursor: pointer;
   text-decoration: none;
   color: #FFFFFF;
  }
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
  top:10px;
  position: absolute;
  right:600px;
  width: 100px;
}
/* 工具按钮 */
.buttons{
  position: absolute;
  top:10px;

   right: 0;
    width: 500px;

}
 /* 页面底部 */
  .bottom{
   position:absolute;
   height:40px;
   width:100%;
   bottom:0;
   left: 0;
  background-color: rgb(10,100,200);
  }
</style>
