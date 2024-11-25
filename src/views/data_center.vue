
<template>
  <avue-tree ref="tree"
             :option="option"
             :data="data"
             v-model="form"
             @node-contextmenu="nodeContextmenu"
             @node-click="nodeClick">
  </avue-tree>
</template>
<script>
export default {
  data () {
    return {
      form: {},
      data: [
        {
          value: 0,
          label: '一级部门',
          children: [
            {
              value: 1,
              label: '一级部门1',
            }, {
              value: 2,
              label: '一级部门2',
            }
          ]
        }, {
          value: 3,
          label: '二级部门',
          children: [
            {
              value: 4,
              label: '二级部门1',
            }, {
              value: 5,
              label: '二级部门2',
            }
          ]
        }
      ],
      option: {
        defaultExpandAll: true,
        formOption: {
          labelWidth: 100,
          column: [{
            label: '自定义项',
            prop: 'label'
          }, {
            label: '测试',
            prop: 'test'
          }],
        }
      }
    }
  },
  mounted () {
    this.$refs.tree.setCurrentKey(0)
  },
  methods: {
    nodeContextmenu (data, node, comp) {
      this.$message.success(JSON.stringify(data))
    },
    nodeClick (data) {
      this.$message.success(JSON.stringify(data))
    }
  }
}
</script>


<!--<template>-->
<!--  <basic-container>-->
<!--    <avue-crud-->
<!--        :page.sync="page"-->
<!--        :data="tableData"-->
<!--        :table-loading="tableLoading"-->
<!--        :option="tableOption"-->
<!--        @on-load="getList"-->
<!--        @search-change="searchChange"-->
<!--        @search-reset="searchReset"-->
<!--        @refresh-change="refreshChange"-->
<!--        @size-change="sizeChange"-->
<!--        @current-change="currentChange"-->
<!--        @row-update="handleUpdate"-->
<!--        @row-save="handleSave"-->
<!--        @row-del="handleDel"-->
<!--    >-->
<!--    </avue-crud>-->
<!--  </basic-container>-->

<!--  <div  class="table-container">-->

<!--&lt;!&ndash;    <query-tree :query="state.queryList" @node-click="handleNodeClick">&ndash;&gt;-->
<!--&lt;!&ndash;    </query-tree>&ndash;&gt;-->


<!--        <el-button type="primary" @click="checkALL">全选/全不选</el-button>-->
<!--        <el-button type="primary" @click="save"-->
<!--                   style="left: 200px; top: 20px; position: absolute; z-index:9999">保存</el-button>-->
<!--        <avue-tree ref="tree" :option="option" :data="treeData"   multiple-->
<!--                   v-model="form" @check-change="checkChange" class="width:50%,height:50%;">-->
<!--        </avue-tree>-->




<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->


<!--  data() {-->
<!--    return {-->
<!--      treeData: [],-->
<!--      isALLCheck: false,-->
<!--      //-->
<!--      option: {-->
<!--        defaultExpandAll: true,-->
<!--        multiple: true,-->
<!--        filter: false,-->
<!--        menu: false,-->
<!--        formOption: {-->
<!--          labelWidth: 100,-->
<!--          column: [{-->
<!--            label: '自定义项',-->
<!--            prop: 'label'-->
<!--          }, {-->
<!--            label: '测试',-->
<!--            prop: 'test'-->
<!--          }],-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  /**-->
<!--   * 全选/全不选-->
<!--   */-->
<!--  checkALL() {-->
<!--    //console.log('menuTree',this.$refs.menuTree);-->
<!--    this.isALLCheck = !this.isALLCheck;-->
<!--    var data = this.$refs.menuTree.data;-->
<!--    for (var i = 0; i < data.length; i++) {-->
<!--      this.$refs.menuTree.setChecked(data[i], this.isALLCheck, true);-->
<!--    }-->
<!--  },-->
<!--  /**-->
<!--   * 保存功能-->
<!--   */-->
<!--  save() {-->
<!--    var that = this;-->
<!--    //-->
<!--    this.roleId;-->
<!--    debugger-->
<!--    //-->
<!--    console.log('menuTree', this.$refs.menuTree);-->
<!--    var data = this.$refs.menuTree.getCheckedNodes();-->
<!--    for (var i = 0; i < data.length; i++) {-->
<!--      var checked = data[i];-->
<!--      console.log(checked);-->
<!--    }-->
<!--    //-->
<!--  }-->
<!--}-->

<!--//   const QueryTree = defineAsyncComponent(-->
<!--//     () => import("/@/components/QueryTree/index.vue")-->
<!--// );-->
<!--//-->
<!--// const state = reactive({-->
<!--//   queryList: (name: String) => {-->
<!--//     return api({-->
<!--//       name: name,-->
<!--//     });-->
<!--//   },-->
<!--// });-->
<!--//-->
<!--// const handleNodeClick = (e: any) => {};-->
<!--200*3%         400*300=12          500*20%*20%*2-->


<!--</script>-->
<style scoped>
.table-container {
  overflow-y: scroll; /* 创建垂直滚动条 */
  max-height: 400px; /* 根据需求设定最大高度 */
}
</style>