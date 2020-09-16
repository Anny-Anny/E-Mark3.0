<template>
<div class="wraper" >
  <!-- 为了美观加的 -->
   <div class="box">
      <div class="line">
   </div>

   </div>
       <el-row>
          <el-col :span="24">
            <div class="grid1">
              <p>对象名称：</p>
              <input type="text" placeholder="请输入标注名称"></input>
               <el-checkbox v-model="checked">显示/隐藏</el-checkbox>
            </div>
        </el-col>
       </el-row>

       <el-row>
         <el-col :span="24">
           <div class="grid2 ">
              <el-tabs v-model="activeName2" type="card" size="mini" @tab-click="handleClick">
                 <el-tab-pane label="说明" name="first">
                    <textarea class="said" type="text" />
                 </el-tab-pane>
                 <el-tab-pane label="空间信息" name="second">
                   <el-table
                      ref="singleTable"
                      :data="tableData"
                      highlight-current-row
                      @current-change="handleCurrentChange"
                      style="width: 100%">
                      <el-table-column
                         type="index"
                         width="20">
                      </el-table-column>
                      <el-table-column
                         property="date"
                         label="X"
                         width="100">
                      </el-table-column>
                      <el-table-column
                         property="name"
                         label="Y"
                         width="100">
                      </el-table-column>
                      <el-table-column
                         property="address"
                         label="Z">
                      </el-table-column>
                   </el-table>
                 </el-tab-pane>
                 <el-tab-pane label="投影信息" name="third">点没有投影信息，线有长度，面有周长和面积</el-tab-pane>
                 <el-tab-pane label="样式" name="fourth">样式设计</el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
   <el-row>
    <el-col :span="24">
     <div class="grid3">
        <el-button size="mini">导出坐标点</el-button>
        <el-button size="mini">定位</el-button>
        <el-button size="mini">确认</el-button>
        <el-button size="mini" @click="hide_MarkAdd">取消</el-button>
     </div>
    </el-col>
   </el-row>
</div>
</template>

<script>
  export default {

    data(){
      return{
         checked: true,
         activeName2: 'first',
         // 空间信息
         tableData: [],
         currentRow: null,

      };
    },
    methods: {
          //tab事件
          handleClick(tab, event) {
            console.log(tab, event);
          },
          //空间信息表格
           setCurrent(row) {
                  this.$refs.singleTable.setCurrentRow(row);
                },
                handleCurrentChange(val) {
                  this.currentRow = val;
                },
      hide_MarkAdd(){
       this.$emit('MarkAddVisibleEvent', false);
                
                },
                
              },


       
        
}

</script>

<style>
  /* 外边框 */
  .wraper{
    width:360px;
    top:300px;
    left:50%;
    height:370px;
    background-color: white;
    border:gainsboro solid thin;
  }
  /* 布局 */
  .el-row {
     margin-bottom: 5px;
     margin-top: 10px;
     margin-left: 10px;
     &:last-child {
       margin-bottom: 0;
     }
   }
   .el-col {
     border-radius: 4px;
   }
   .el-col-24{
     width: 340px;
   }
   .grid1{

    background:white;
    min-height: 25px;
   }
   .grid2{
     margin-left: 2.5px;

    background:white;
    height: 270px;
   }
   .grid3{
    background:white;
    min-height: 25px;
   }
   /* 字体 */
.grid1 p{
  vertical-align: middle;
  display: inline;
  color: #000000;
}

.box{
  position: absolute;

 height: 280px;
  left: 5px;
  width: 347px;
  border:gainsboro solid thin;
  top:40px;

}
.line{
  position: absolute;
 background-color: #000000;
  height: 0px;
  left: 7px;
  width: 333px;
  border-bottom: 1px solid #E4E7ED;
  top:34px;
z-index: 1;
}

 .grid2 .el-tabs__item{
  height: 30px;
  line-height: 30px;

}
.grid2 .el-tab-pane{
  width:335px;
}
.grid2 .el-tabs__content{
  width: 340px;
}
 .grid2 .el-tabs__nav-scroll{
  height: 30px;
}
 .grid2 .el-tabs__header{
  height: 30px;
  margin: 0 0 2.5px;
  width: 340px;

}
  .grid2 .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border-radius: 0px 0px 0 0;
  }
  .grid2 .el-tabs--card>.el-tabs__header{
    border-bottom: 0px solid #E4E7ED;
  }

 .said{
  height:230px;
  width: 328px;
  left: 20px;
  z-index: 2;
  }

 .sheji{
   width: 333px;
   height: 200px;
   border:gainsboro solid thin;
   }

.grid3 .el-button--mini {
padding: 7px 19px;
}


</style>
