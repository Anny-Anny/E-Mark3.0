<template>
<div>
  <div class="title_N">
    <div class="navigation">
    <img src="../assets/标题2.png"/>
    <ul class="ul-left">
      <li ><a @click="Graphic_Show(true)">遥感影像</a></li>
      <li><a @click="Mark_Show(false)">标注编辑</a></li>
    </ul>
    <ul class="ul-right">
      <li ><a>用户</a></li>
      <li><a>帮助</a></li>
    </ul>
    </div>
  </div>
  <!-- 显示组件 -->
<!--  <Graphic class="graphic" :Graphic_show="Graphic_Show"> -->
     <Graphic class="graphic" v-show="Graphic_show"
      :Graphic_show="Graphic_show"
      @GraphicVisibleEvent="Graphic_Show">
    </Graphic>
    <Mark class="mark" v-show="Mark_show"></Mark>
    
</div>
</template>

<script>

   import Graphic from "../components/Graphic.vue"
   import Mark from "../components/Mark.vue"
   
   export default {
     data () {
       return {
        Graphic_show:false,
        Mark_show:false,
        };
      },
     components:{
       Graphic,
       Mark,
     },
    methods:{
      
        Graphic_Show(visible) {
          this.Graphic_show = visible;
          this.Mark_show=false;
        },
    
        Mark_Show(){
          this.Graphic_show=false;
          this.Mark_show=true;
        }
      // Graphic_Show(){
      //   this.isShow=true;
      //   // this.Graphic_show=true;
      // },
      // handleCancel(){
      //   this.Graphic_show=false;
      //   },
   //    Graphic_hide(){
   //      this.Graphic_show=false;
   //    }
    }
 };

</script>

<style>

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
    .graphic{
      position:absolute;

    }
</style>
