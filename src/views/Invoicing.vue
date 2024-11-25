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
      dataList: [{company_module_query: '张三', application_date: 20, applicant: '男', application_invoice_type: '男', application_invoice_header: '男', application_unit_address: '男', application_duty_paragraph: '男', application_phone_number: '男'
        , application_bank_deposit: '男', application_bank_account: '男', application_invoice_value: '男', billing_type: '男', invoice_header: '男', issuing_office: '男', invoice_amount_ch: '男', invoice_amount_am: '男'
        , invoice_number_starting: '男', invoice_number_received: '男', invoice_number: '男', tracking_number: '男', recipient: '男', exhibitors: '男', construction_unit: '男', total_charge: '男'
        , received_amount: '男', invoiced_amount: '男', exhibitor_module_query: '男', owner: '男', number: '男', creation_time: '男',creator: '男', operate: '男'}],
      //列名List
      titleList: [ // 这里是静态数据的数组
        { id: 1, label: '公司模块查询',value:'company_module_query'},
        { id: 2, label: '申请日期',value:'application_date' },
        { id: 3, label: '申请人',value:'applicant'},
        { id: 4, label: '申请-开票类型',value:'application_invoice_type'},
        { id: 5, label: '申请-发票抬头',value:'application_invoice_header'},
        { id: 6, label: '申请-单位地址',value:'application_unit_address'},
        { id: 7, label: '申请-税号',value:'application_duty_paragraph'},
        { id: 8, label: '申请-电话号码',value:'application_phone_number'},
        { id: 9, label: '申请-开户银行',value:'application_bank_deposit'},
        { id: 10, label: '申请-银行账号',value:'application_bank_account'},
        { id: 11, label: '申请-发票金额',value:'application_invoice_value'},
        { id: 12, label: '开票类型',value:'billing_type'},
        { id: 13, label: '发票抬头',value:'invoice_header'},
        { id: 14, label: '开票单位',value:'issuing_office'},
        { id: 15, label: '开票金额¥',value:'invoice_amount_ch'},
        { id: 16, label: '开票金额$',value:'invoice_amount_am'},
        { id: 17, label: '发票号码(起)',value:'invoice_number_starting'},
        { id: 18, label: '发票号码(讫)',value:'invoice_number_received'},
        { id: 19, label: '发票张数',value:'invoice_number'},
        { id: 20, label: '快递单号',value:'tracking_number'},
        { id: 21, label: '收件人',value:'recipient'},
        { id: 22, label: '参展单位',value:'exhibitors'},
        { id: 23, label: '搭建单位',value:'construction_unit'},
        { id: 24, label: '收费总额',value:'total_charge'},
        { id: 25, label: '已收款项',value:'received_amount'},
        { id: 26, label: '已开金额',value:'invoiced_amount'},
        { id: 27, label: '展商模块查询',value:'exhibitor_module_query'},
        { id: 28, label: '所有者',value:'owner'},
        { id: 29, label: '编号',value:'number'},
        { id: 30, label: '创建时间',value:'creation_time'},
        { id: 31, label: '创建者',value:'creator'},
        { id: 32, label: '操作',value:'operate'}
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
        { id: 1, label: '公司模块查询',value:'company_module_query'},
        { id: 2, label: '申请日期',value:'application_date' },
        { id: 3, label: '申请人',value:'applicant'},
        { id: 4, label: '申请-开票类型',value:'application_invoice_type'},
        { id: 5, label: '申请-发票抬头',value:'application_invoice_header'},
        { id: 6, label: '申请-单位地址',value:'application_unit_address'},
        { id: 7, label: '申请-税号',value:'application_duty_paragraph'},
        { id: 8, label: '申请-电话号码',value:'application_phone_number'},
        { id: 9, label: '申请-开户银行',value:'application_bank_deposit'},
        { id: 10, label: '申请-银行账号',value:'application_bank_account'},
        { id: 11, label: '申请-发票金额',value:'application_invoice_value'},
        { id: 12, label: '开票类型',value:'billing_type'},
        { id: 13, label: '发票抬头',value:'invoice_header'},
        { id: 14, label: '开票单位',value:'issuing_office'},
        { id: 15, label: '开票金额¥',value:'invoice_amount_ch'},
        { id: 16, label: '开票金额$',value:'invoice_amount_am'},
        { id: 17, label: '发票号码(起)',value:'invoice_number_starting'},
        { id: 18, label: '发票号码(讫)',value:'invoice_number_received'},
        { id: 19, label: '发票张数',value:'invoice_number'},
        { id: 20, label: '快递单号',value:'tracking_number'},
        { id: 21, label: '收件人',value:'recipient'},
        { id: 22, label: '参展单位',value:'exhibitors'},
        { id: 23, label: '搭建单位',value:'construction_unit'},
        { id: 24, label: '收费总额',value:'total_charge'},
        { id: 25, label: '已收款项',value:'received_amount'},
        { id: 26, label: '已开金额',value:'invoiced_amount'},
        { id: 27, label: '展商模块查询',value:'exhibitor_module_query'},
        { id: 28, label: '所有者',value:'owner'},
        { id: 29, label: '编号',value:'number'},
        { id: 30, label: '创建时间',value:'creation_time'},
        { id: 31, label: '创建者',value:'creator'},
        { id: 32, label: '操作',value:'operate'}
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