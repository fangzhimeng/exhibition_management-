<template>
  <div class="about">
    <table>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      <tr v-for="item in staticData" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
data() {
return {
staticData: [ // 这里是静态数据的数组
{ id: 1, name: '张三', age: 20 },
{ id: 2, name: '李四', age: 25 },
{ id: 3, name: '王五', age: 30 }
]
};
},

  data2() {
    return {
      staticData2: [ // 这里是静态数据的数组
        { id: 1, columnname: '姓名'},
        { id: 2, columnname: 'ni' },
        { id: 3, columnname: '王五'}
      ]
    };
  }


}
</script>