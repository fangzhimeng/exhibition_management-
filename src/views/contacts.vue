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
      dataList: [{company: '张三', exhibition_owner: 20,  name: '男', position: '男', mobile_phone: '男', mobile_phone2: '男', E_mail: '男'
        , E_mail2: '男', telephone: '男', phone_number_400: '男', fax: '男', booth_area1r: '男', qq: '男', address: '男', zip_code: '男'
        , contacts_number_remarks: '男', department: '男', allow_modification: '男', allow_search: '男',
        creation_time: '男',Modifier: '男',creator: '男',number: '男',  update_time: '男', operate: '男'}],
      //列名List
      titleList: [ // 这里是静态数据的数组
        { id: 1, label: '公司',value:'company'},
        { id: 2, label: '所属展会所有者',value:'exhibition_owner'},
        { id: 3, label: '姓名',value:'name'},
        { id: 4, label: '职位',value:'position'},
        { id: 5, label: '手机',value:'mobile_phone'},
        { id: 6, label: '手机1',value:'mobile_phone2'},
        { id: 7, label: 'E_mail',value:'E_mail'},
        { id: 8, label: 'E_mail2',value:'E_mail2'},


        { id: 9, label: '电话',value:'telephone'},
        { id: 10, label: '400电话',value:'phone_number_400'},
        { id: 11, label: '传真',value:'fax'},
        { id: 12, label: '微信',value:'weChat'},
        { id: 13, label: 'qq',value:'qq'},
        { id: 14, label: '地址',value:'address'},
        { id: 15, label: '邮编',value:'zip_code'},
        { id: 16, label: '联络次数备注',value:'contacts_number_remarks'},

        { id: 17, label: '部门',value:'department'},
        { id: 18, label: '允许修改',value:'allow_modification'},
        { id: 19, label: '允许查找',value:'allow_search'},
        { id: 20, label: '创建时间',value:'creation_time'},
        { id: 21, label: '修改者',value:'Modifier'},
        { id: 22, label: '创建者',value:'creator'},
        { id: 23, label: '编号',value:'number'},
        { id: 24, label: '更新时间',value:'update_time'},
        { id: 25, label: '操作',value:'operate'}
      ]
      //
      // tableColumns:['公司模块查询','申请日期' ,'申请人','申请-开票类型','申请-发票抬头','申请-单位地址','申请-税号','申请-电话号码','申请-开户银行'
      //   '申请-银行账号', '申请-发票金额','开票类型','发票抬头','开票单位','开票金额¥','开票金额$','发票号码(起)','发票号码(讫)','发票张数','快递单号',
        //   '收件人','参展单位', '搭建单位','收费总额','已收款项','已开金额','展商模块查询','所属展会所有者','编号','创建时间','创建者','操作']
    };
  },
  data2() {
    return {

      titleList2: [ // 这里是静态数据的数组
        { id: 1, label: '公司',value:'company'},
        { id: 2, label: '所属展会所有者',value:'exhibition_owner'},
        { id: 3, label: '姓名',value:'name'},
        { id: 4, label: '职位',value:'position'},
        { id: 5, label: '手机',value:'mobile_phone'},
        { id: 6, label: '手机1',value:'mobile_phone2'},
        { id: 7, label: 'E_mail',value:'E_mail'},
        { id: 8, label: 'E_mail2',value:'E_mail2'},


        { id: 9, label: '电话',value:'telephone'},
        { id: 10, label: '400电话',value:'phone_number_400'},
        { id: 11, label: '传真',value:'fax'},
        { id: 12, label: '微信',value:'weChat'},
        { id: 13, label: 'qq',value:'qq'},
        { id: 14, label: '地址',value:'address'},
        { id: 15, label: '邮编',value:'zip_code'},
        { id: 16, label: '联络次数备注',value:'contacts_number_remarks'},

        { id: 17, label: '部门',value:'department'},
        { id: 18, label: '允许修改',value:'allow_modification'},
        { id: 19, label: '允许查找',value:'allow_search'},
        { id: 20, label: '创建时间',value:'creation_time'},
        { id: 21, label: '修改者',value:'Modifier'},
        { id: 22, label: '创建者',value:'creator'},
        { id: 23, label: '编号',value:'number'},
        { id: 24, label: '更新时间',value:'update_time'},
        { id: 25, label: '操作',value:'operate'}
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