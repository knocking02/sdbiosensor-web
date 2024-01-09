<template>
   <q-drawer v-model="store.drawerOpen.isDrawerOpen" show-if-above bordered>
      <div class="q-pa-md" style="max-width: 350px">
         <q-list bordered separator>
            <q-item clickable v-ripple to="/sample/echart">
               <q-item-section>
                  <q-item-label>ECHART</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/table">
               <q-item-section>
                  <q-item-label>Table </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/pagination">
               <q-item-section>
                  <q-item-label>Pagination </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/editor">
               <q-item-section>
                  <q-item-label>Quasar Editor </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/form">
               <q-item-section>
                  <q-item-label>Form </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/calendar">
               <q-item-section>
                  <q-item-label>Calendar </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/date">
               <q-item-section>
                  <q-item-label>Date Picker</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/message">
               <q-item-section>
                  <q-item-label>{{ $t('menu.message') }} </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/i18n">
               <q-item-section>
                  <q-item-label>{{ $t('menu.language') }}</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/axios">
               <q-item-section>
                  <q-item-label>AXIOS</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/util">
               <q-item-section>
                  <q-item-label>UTIL</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </div>
   </q-drawer>
</template>
<script setup>
import useStore from '@/stores'

const store = useStore()
</script>
<style scoped></style>
