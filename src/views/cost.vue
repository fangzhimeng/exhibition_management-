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
    return {
      //数据List
      dataList: [{signing_date: '张三', opposite_unit: 20,  contacts: '男', telephone: '男', mobile_phone: '男', E_mail: '男', booth_area: '男'
        , contract_amount: '男', main_structure: '男', special_decoration_management_fee: '男', electricity_connection_fee: '男', overtime_pay: '男', margin: '男', premium: '男',
        total_cost: '男', owner: '男', exhibitor_module_query: '男', standard_exhibitions_number: '男', exhibition_fees_total: '男', product_type: '男', product_unit_price: '男',
        discount: '男', product_unit_area: '男', purchase_area: '男',product : '男',allow_deletion_modification: '男', allow_search: '男',Modifier: '男',
        creator: '男', update_time: '男',number: '男',signing_time: '男', order_name: '男',project1: '男', company_module_query : '男', operate: '男'}],
      //列名List
      titleList: [ // 这里是静态数据的数组
        { id: 1, label: '签约日期',value:'signing_date'},
        { id: 2, label: '对方单位',value:'opposite_unit'},
        { id: 3, label: '联系人',value:'contacts'},
        { id: 4, label: '联系电话',value:'telephone'},
        { id: 5, label: '手机',value:'mobile_phone'},
        { id: 6, label: 'E_mail',value:'E_mail'},
        { id: 7, label: '展台面积',value:'booth_area'},
        { id: 8, label: '合同金额',value:'Contract_amount'},


        { id: 9, label: '主体结构',value:'main_structure'},
        { id: 10, label: '特装管理费',value:'special_decoration_management_fee'},
        { id: 11, label: '接电费',value:'electricity_connection_fee'},
        { id: 12, label: '加班费',value:'overtime_pay'},
        { id: 13, label: '保证金',value:'margin'},
        { id: 14, label: '保险费',value:'premium'},
        { id: 15, label: '成本合计',value:'total_cost'},
        { id: 16, label: '所有者',value:'owner'},

        { id: 17, label: '展商模块查询',value:'exhibitor_module_query'},
        { id: 18, label: '标展数量',value:'standard_exhibitions_number'},
        { id: 19, label: '展费总额¥',value:'exhibition_fees_total'},
        { id: 20, label: '产品类型',value:'product_type'},
        { id: 21, label: '产品单价',value:'product_unit_price'},
        { id: 22, label: '折扣',value:'discount'},

        { id: 23, label: '产品单位面积',value:'product_unit_area'},
        { id: 24, label: '购买面积',value:'purchase_area'},
        { id: 25, label: '产品',value:'product'},
        { id: 26, label: '允许删改',value:'allow_deletion_modification'},

        { id: 27, label: '允许查找',value:'allow_search'},
        { id: 28, label: '修改者',value:'Modifier'},
        { id: 29, label: '创建者',value:'creator'},
        { id: 30, label: '更新时间',value:'update_time'},
        { id: 31, label: '编号',value:'number'},

        { id: 32, label: '签约时间',value:'signing_time'},
        { id: 33, label: '订单名',value:'order_name'},
        { id: 34, label: '所属项目1',value:'project1'},
        { id: 35, label: '公司模块查询',value:'company_module_query'},
        { id: 36, label: '操作',value:'operate'}
      ]
      //
      // tableColumns:['接电费模块查询','申请日期' ,'申请人','申请-开票类型','申请-发票抬头','申请-单位地址','申请-税号','申请-电话号码','申请-开户银行'
      //   '申请-银行账号', '申请-发票金额','开票类型','发票抬头','开票单位','开票金额¥','开票金额$','发票号码(起)','发票号码(讫)','发票张数','快递单号',
        //   '收件人','参展单位', '搭建单位','收费总额','已收款项','已开金额','展商模块查询','对方单位','编号','签约时间','创建者','订单名']
    };
  },
  data2() {
    return {

      titleList2: [ // 这里是静态数据的数组
        { id: 1, label: '签约日期',value:'signing_date'},
        { id: 2, label: '对方单位',value:'opposite_unit'},
        { id: 3, label: '联系人',value:'contacts'},
        { id: 4, label: '联系电话',value:'telephone'},
        { id: 5, label: '手机',value:'mobile_phone'},
        { id: 6, label: 'E_mail',value:'E_mail'},
        { id: 7, label: '展台面积',value:'booth_area'},
        { id: 8, label: '合同金额',value:'Contract_amount'},


        { id: 9, label: '主体结构',value:'main_structure'},
        { id: 10, label: '特装管理费',value:'special_decoration_management_fee'},
        { id: 11, label: '接电费',value:'electricity_connection_fee'},
        { id: 12, label: '加班费',value:'overtime_pay'},
        { id: 13, label: '保证金',value:'margin'},
        { id: 14, label: '保险费',value:'premium'},
        { id: 15, label: '成本合计',value:'total_cost'},
        { id: 16, label: '所有者',value:'owner'},

        { id: 17, label: '展商模块查询',value:'exhibitor_module_query'},
        { id: 18, label: '标展数量',value:'standard_exhibitions_number'},
        { id: 19, label: '展费总额¥',value:'exhibition_fees_total'},
        { id: 20, label: '产品类型',value:'product_type'},
        { id: 21, label: '产品单价',value:'product_unit_price'},
        { id: 22, label: '折扣',value:'discount'},

        { id: 23, label: '产品单位面积',value:'product_unit_area'},
        { id: 24, label: '购买面积',value:'purchase_area'},
        { id: 25, label: '产品',value:'product'},
        { id: 26, label: '允许删改',value:'allow_deletion_modification'},

        { id: 27, label: '允许查找',value:'allow_search'},
        { id: 28, label: '修改者',value:'Modifier'},
        { id: 29, label: '创建者',value:'creator'},
        { id: 30, label: '更新时间',value:'update_time'},
        { id: 31, label: '编号',value:'number'},

        { id: 32, label: '签约时间',value:'signing_time'},
        { id: 33, label: '订单名',value:'order_name'},
        { id: 34, label: '所属项目1',value:'project1'},
        { id: 35, label: '公司模块查询',value:'company_module_query'},
        { id: 36, label: '操作',value:'operate'}      ]
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