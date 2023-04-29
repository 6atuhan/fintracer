<template>
  <div class="bg-[#b8c3c7] text-white w-screen h-full ">
    <HeaderComp></HeaderComp>
    <div class="container  mx-auto py-4 flex gap-8 flex-wrap">
      <AddComp></AddComp>
      <EditComp></EditComp>
      <ListComp class="mx-auto"></ListComp>


    </div>
  </div>
</template>

<script setup>
import HeaderComp from "/src/components/HeaderComp.vue"
import ListComp from "/src/components/ListComp.vue"
import AddComp from "/src/components/AddComp.vue";
import EditComp from "/src/components/EditComp.vue";



</script>
<style>

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ffffff transparent ;
    
    
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #b8c3c7;
    background-color: #b8c3c7;
  }


  *::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 7px;
    border: 1px none #ffffff;
  }

</style>