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
      dataList: [{company_module_query: '张三', payment_date: 20,  payment_method: '男', remittance_unit: '男', bank_receipt_RMB: '男', bank_receiving_account: '男', bank_receipt_USD: '男'
        , cash_collection_method: '男', payer: '男', cash_payee: '男', cash_receipts_RMB: '男', cash_receipts_USD: '男', total_amount_received_¥: '男', total_amount_received_$: '男', signing_unit: '男'

        , allow_deletion_modification: '男', allow_search: '男', bank_receipt_¥: '男',owner: '男',  staff: '男', Modifier: '男', number: '男',creation_time: '男', creator: '男',update_time: '男', operate: '男'}],
      //列名List
      titleList: [ // 这里是静态数据的数组
        { id: 1, label: '公司模块查询',value:'company_module_query'},
        { id: 2, label: '收款日期',value:'payment_date'},
        { id: 3, label: '银收方式',value:'payment_method'},
        { id: 4, label: '汇款单位',value:'remittance_unit'},
        { id: 5, label: '银行收款（人民币）',value:'bank_receipt_RMB'},
        { id: 6, label: '银行收款账户',value:'bank_receiving_account'},
        { id: 7, label: '银行收款（美元）',value:'bank_receipt_USD'},
        { id: 8, label: '现收方式',value:'cash_collection_method'},


        { id: 9, label: '付款人',value:'payer'},
        { id: 10, label: '现金收款人',value:'cash_payee'},
        { id: 11, label: '现金收款（人民币）',value:'cash_receipts_RMB'},
        { id: 12, label: '现金收款（美元）',value:'cash_receipts_USD'},
        { id: 13, label: '收款总额¥',value:'total_amount_received_¥'},
        { id: 14, label: '收款总额$',value:'total_amount_received_$'},
        { id: 15, label: '签约单位',value:'signing_unit'},
        { id: 16, label: '展商模块查询',value:'exhibitor_module_query'},
        { id: 17, label: '允许删改',value:'allow_deletion_modification'},
        { id: 18, label: '允许查找',value:'allow_search'},
        { id: 19, label: '银行收款¥',value:'bank_receipt_¥'},
        { id: 20, label: '所有者',value:'owner'},

        { id: 21, label: '员工',value:'staff'},
        { id: 22, label: '修改者',value:'Modifier'},
        { id: 23, label: '编号',value:'number'},
        { id: 24, label: '创建时间',value:'creation_time'},
        { id: 25, label: '创建者',value:'creator'},
        { id: 26, label: '更新时间',value:'update_time'},
        { id: 27, label: '操作',value:'operate'}

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
        { id: 1, label: '项目简称',value:'company_module_query'},
        { id: 2, label: '所有者',value:'payment_date' },
        { id: 3, label: '银收方式',value:'payment_method'},
        { id: 4, label: '汇款单位',value:'remittance_unit'},
        { id: 5, label: '银行收款（人民币）',value:'bank_receipt_RMB'},
        { id: 6, label: '银行收款账户',value:'bank_receiving_account'},
        { id: 7, label: '布展结束日期',value:'bank_receipt_USD'},
        { id: 8, label: '合同金额',value:'cash_collection_method'},




        { id: 9, label: '付款人',value:'payer'},
        { id: 10, label: '现金收款人',value:'cash_payee'},
        { id: 11, label: '公司',value:'cash_receipts_RMB'},
        { id: 12, label: '现金收款（美元）',value:'cash_receipts_USD'},
        { id: 13, label: '收款总额¥',value:'total_amount_received_RMB'},
        { id: 14, label: '收款总额$',value:'total_amount_received_USD'},
        { id: 15, label: '签约单位',value:'signing_unit'},
        { id: 16, label: '成本总额',value:'total_cost'},


        { id: 17, label: '毛利润',value:'staff'},
        { id: 18, label: '项目地点',value:'project_locations'},
        { id: 19, label: '开幕日期',value:'opening_date'},
        { id: 20, label: '撤展日期',value:'dismantling_date'},
        { id: 21, label: '主办单位',value:'sponsor'},
        { id: 22, label: '承办单位',value:'organizer'},


        { id: 23, label: '项目类别',value:'project_category'},
        { id: 24, label: '允许删改',value:'allow_deletion_modification'},
        { id: 25, label: '允许查找',value:'allow_search'},
        { id: 26, label: '编号',value:'number'},
        { id: 27, label: '创建时间',value:'creation_time'},
        { id: 28, label: '创建者',value:'creator'},
        { id: 29, label: '修改者',value:'Modifier'},
        { id: 30, label: '更新时间',value:'update_time'},
        { id: 31, label: '操作',value:'operate'}
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