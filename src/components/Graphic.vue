<template>
 <div class="wrap_G" >
   <el-tabs type="border-card">
     <el-tab-pane label="影像检索" @click="button_show">
      <div class="_img2" ><img src="../assets/地点标注.png" /></div>
      <div class="_img3" ><img src="../assets/日历.png"/></div>
      <div class="_img1" > <img src="../assets/文件.png"></div>
     <!-- 数据集选择 -->
      <div class="shujuji">
        <el-button type="primary" size="mini">选择数据集</el-button>
        <p>*点击选择数据集</p>
      </div>
     <!-- 地图范围的选择 -->
      <div class="tab_table">
       <el-tabs v-model="activeName" >
         <!-- 行政区 -->
         <el-tab-pane label="行政区" name="first">
           <el-cascader
             placeholder="省直辖市/地级市州/区县旗"
             :options="options_city"
             @active-item-change="handleItemChange"
             :props="props"
             size="mini"
             change-on-select="true"
           ></el-cascader>
         </el-tab-pane>
     <!-- 经纬度 -->
         <el-tab-pane label="经纬度" name="second">
            经度：<input type="text" class="input_coordinate"> </input>
            到 <input type="text" class="input_coordinate"> </input>
            纬度：<input type="text" class="input_coordinate"> </input>
            到<input type="text" class="input_coordinate"> </input>
         </el-tab-pane>
     <!-- 行列号 -->
         <el-tab-pane label="行列号" name="third">
             path：<input type="text" class="input_coordinate"> </input>
            到<input type="text" class="input_coordinate"> </input>
            row：<input type="text" class="input_coordinate"> </input>
            到<input type="text" class="input_coordinate"> </input>
         </el-tab-pane>
     <!-- 地图选择 -->
         <el-tab-pane label="地图选择" name="fourth">
             <el-button type="plain" size="mini" icon="el-icon-search">点选择</el-button>
             <el-button type="plain" size="mini" icon="el-icon-search">线选择</el-button>
             <el-button type="plain" size="mini" icon="el-icon-search">面选择</el-button>
        </el-tab-pane>
     <!-- 矢量文件 -->
         <el-tab-pane label="矢量文件" name="firth">
             <!-- 上传按钮，功能还没有实现 -->
             <el-button plain size="mini">上传</el-button>
             <p>*选择矢量文件上传</p>
         </el-tab-pane>
       </el-tabs>
       </div>

     <!-- 时间选择 -->
     <div class="dataTime">
       时间范围：
       <el-date-picker
             size="mini"
             v-model="value6"
             type="daterange"
             range-separator="至"
             start-placeholder="开始日期"
             end-placeholder="结束日期">
           </el-date-picker>
     </div>
     </el-tab-pane>
     <!-- 上传影像 -->
     <el-tab-pane label="上传影像" >
       <el-button plain size="mini">上传</el-button>
             <p>*选择TM影像上传</p>
     </el-tab-pane>

   </el-tabs>

   <!-- 取消按钮    功能还没哟偶实现  目标：单击重置，双击隐藏-->
   <div class="ex_button">
     <el-button type="danger" size="small">搜索</el-button>
     <el-button type="primary" size="small" @click="Graphic_hide">取消</el-button>
   </div>
   </div>



</template>

<script>
  export default {

// 从父组件传信息过来，但是现在好像不用，指组件的显示与隐藏部分
    // props:{
    //   Graphic_show: Boolean
    // },

    data() {
      return {
        //搜索与取消按钮的显隐
        buttonShow:true,

        activeName: 'first',
        alue6: '',
        valueDate:'',//日期选择
       //省直辖市列表？
        options_city: [{
         label: '江苏',
         cities: []
         }, {
         label: '浙江',
         cities: []
        }],
     //省市及其子项
        props: {
         value: 'label',
         children: '',
       },
     // 取消按钮的要向父组件传递的
     //visible: this.Graphic_show,
      };
    },

//这个监听事件好像也可以不需要，目前还是能运行，单指隐藏组件
// watch: {
//     visible(val) {
//       this.Graphic_show = val;
//     }
//   },
    methods: {

      //省市县的响应跳转
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options_city[0].cities.length) {
        this.options_city[0].cities = [{
        label: '南京',
        cities:[]
        }, {
        label: '南通',
        }];
        } else if (val.indexOf('浙江') > -1 && !this.options_city[1].cities.length) {
        this.options_city[1].cities = [{
        label: '杭州'
        }];
        }
        }, 300);
      },
      // 取消按钮事件，子向父传递信息
      Graphic_hide(){
         this.$emit('GraphicVisibleEvent', false);
        },
      },




  };
</script>

<style>
 /* 外边框 */
  .wrap_G{
    left: 0;
    width:444px;
    top:70px;
    height: 300px;
  }
/* 第一个tabtable的头 */
  .wrap_G .el-tabs__content{
     left: 5px;
     height: 140px;
  }
/* 文字样式 */
  p{
     display: inline;
     color: red;
  }
/* tab栏长度 */
 .el-tabs__header{
   width:442px;
 }
  /* tab栏的两个彩色按钮 */
 .yingxiangjiansuo{
   position: absolute;
   right:4px;
   top:4px;
 }



 /* 数据集部分 */
.shujuji{
  left:30px;
  position: absolute;
  top:8px;
 }
/* .shujuji_img{


   display: inline;
 } */
  ._img1{
  position:absolute;
  left: 0rem;
  top:12px;
  }
  ._img2{
    position:absolute;
    top:55px;
    left: 0rem;
  }
._img3{
  position:absolute;
  top:138px;
  left: 0;
}
 img{
   width: 20px;
 }
/* .cancel{
  position: absolute;
  top:0px;
  left:420px;
}
.cancel el-button{
  padding:10px;
} */
  /* 行政区 级联选择器属性修改 */
/* 地点检索 */

/* 位置部分的设计 */

.tab_table{
  position:absolute;
  height:100px;
  width:400px;
  left:30px;
  top:40px;
 }
.tab_table .el-tabs__header{
   width: 400px;
 }
 .tab_table .el-tabs__content{
   left:0;
 }
.el-tab-pane{
  width: 400px;
  }
  .el-cascader{
    border-radius: unset;
    width: 400px;
  }
  .el-input__suffix-inner{
    width: 10px;
  }
 .el-cascader-menu{
   min-width:155px;
 }
.el-cascader-node{
  padding:0 3px 0 2px;
}
.el-cascader-node__label{
  padding:0 0 0 10px;
}
.el-cascader-node__postfix{
  right:0;
}
.input_coordinate{
  width: 50px;
  display: inline;
  height: 20px;
}

/* 日期选择 属性修改 */
.dataTime{
  position: absolute;
  top: 135px;
  left: 30px;;
  width: 400px;
}
.el-date-editor--daterange.el-input,
 .el-date-editor--daterange.el-input__inner,
 .el-date-editor--timerange.el-input,
 .el-date-editor--timerange.el-input__inner{
  width: 315px;
  border-radius: unset;
}
/* 两个额外的按钮 */
.ex_button{
  position:absolute;
  top:3.5px;
  right: 5px;
  }


</style>
