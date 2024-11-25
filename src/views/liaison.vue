<template>
  <basic-container>
    <avue-crud
        :page.sync="page"
        :data="tableData"
        :table-loading="tableLoading"
        :option="tableOption"
        @on-load="getList"
        @search-change="searchChange"
        @search-reset="searchReset"
        @refresh-change="refreshChange"
        @size-change="sizeChange"
        @current-change="currentChange"
        @row-update="handleUpdate"
        @row-save="handleSave"
        @row-del="handleDel"
    >
    </avue-crud>
  </basic-container>

  <div  class="table-container">

    <el-table ref="userTable" :header-cell-style="{ background: '#F2F6FC', color: '#131414' }" :data="dataList" border max-height="500">
      <el-table-column label="标识ID" type="index" width="100" align="center" />
      <el-table-column v-for="item in titleList" :key="item.value" :label="item.label" :prop="item.value" />
    </el-table>

    <table>
<!--      <tr v-for="item in staticData" :key="item.id">-->
<!--        <td>{{ item.name }}</td>-->
<!--        <td>{{ item.age }}</td>-->
<!--      </tr>-->
    </table>
  </div>
</template>
<script>
export default {
  data() {
    2.4+2.4+2.2+1.9+1.9
    2.6+2.6+2.4+2.1+2.1
    2.8+2.8+2.6+2.3+2.3
    3.0+3.0+2.6+2.3+2.3
    3.2+3.2+2.8+2.5+2.5
    24-12=12
    return {
      //数据List
      dataList: [{company: '张三', exhibition: 20,  update_time: '男', which_number_contacts: '男', next_contact_time: '男', effective_contact_information_desc: '男'
        , operate: '男'}],
      //列名List
      titleList: [ // 这里是静态数据的数组
        { id: 1, label: '公司',value:'company'},
        { id: 2, label: '所属展会',value:'exhibition'},
        { id: 3, label: '更新时间',value:'update_time'},

        { id: 4, label: '第几次联络',value:'which_number_contacts'},
        { id: 5, label: '下次联络时间',value:'next_contact_time'},
        { id: 6, label: '有效联络情况描述',value:'effective_contact_information_desc'},

        { id: 7, label: '操作',value:'operate'}
      ]
      //
      // tableColumns:['公司模块查询','申请日期' ,'申请人','申请-开票类型','申请-发票抬头','申请-单位地址','申请-税号','申请-电话号码','申请-开户银行'
      //   '申请-银行账号', '申请-发票金额','开票类型','发票抬头','开票单位','开票金额¥','开票金额$','发票号码(起)','发票号码(讫)','发票张数','快递单号',
        //   '收件人','参展单位', '搭建单位','收费总额','已收款项','已开金额','展商模块查询','所有者','编号','创建时间','创建者','操作']
    };
  },
  data2() {
    return {

      titleList2: [ // 这里是静态数据的数组
        { id: 1, label: '公司',value:'company'},
        { id: 2, label: '所属展会',value:'exhibition'},
        { id: 3, label: '更新时间',value:'update_time'},

        { id: 4, label: '第几次联络',value:'which_number_contacts'},
        { id: 5, label: '下次联络时间',value:'next_contact_time'},
        { id: 6, label: '有效联络情况描述',value:'effective_contact_information_desc'},

        { id: 7, label: '操作',value:'operate'}
      ]
    };
  }

}
</script>
<style scoped>
.table-container {
  overflow-y: scroll; /* 创建垂直滚动条 */
  max-height: 400px; /* 根据需求设定最大高度 */
}
</style>