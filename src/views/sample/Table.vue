<template>
   <q-page padding>
      <div class="q-pa-md">
         <table-list
            title=""
            :rows="rows"
            :columns="columns"
            :paginationInfo="paginationInfo"
            rowKey="id"
            :hide-header="false"
            :hide-bottom="false"
            :hide-pagination="false"
            separator="horizontal"
            :loading="loading"
            detailBtnText="수정"
            @onPageChange="onPageChange"
            @onRowClick="openPopup"
         >
            <template v-slot:body-cell-name="props">
               <q-td>
                  <div>
                     <q-badge rounded :color="getColor(props.props.row.seviceState)" />
                     {{ props.props.row.name }}({{ props.props.row.id }})
                  </div>
               </q-td>
            </template>
         </table-list>
      </div>
   </q-page>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import usePagination from '@/composables/usePagination'
import TableList from '@/components/table/TableList.vue'

const { proxy } = getCurrentInstance()

const parameter = ref({})

const { totalCount, rows, paginationInfo, loading, onPageChange, getDatas, onDetail } = usePagination({
   object: 'sample',
   method: 'getTableDatas',
   parameter: parameter.value,
   pageSizeNum: 5,
   pageRowsPerPage: 10,
})

const columns = [
   { name: 'row-number', align: 'center', label: 'No.', headerStyle: 'width: 70px' },
   { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
   { name: 'title', align: 'left', label: 'Title', field: 'title', sortable: true },
   { name: 'userId', align: 'center', label: 'USER ID', field: 'userId', sortable: true },
   {
      name: 'completed',
      required: true,
      label: 'Completed',
      align: 'center',
      field: (row) => row.completed,
      format: (val) => (val === true ? '예' : '아니오'),
      sortable: true,
   },
   { name: 'detail', align: 'center', label: '' },
]

onMounted(() => {
   getDatas()
})
</script>

<style scoped></style>
