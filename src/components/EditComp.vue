<template>
    <div v-if="store.state.isEdit" class="bg-[#b8c3c7] fixed top-0 left-0 h-screen w-screen z-[9999] center-flex">
        <div class="neumorph !bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-fit p-10 font-bank-miles md:rounded-2xl">
     <h1 v-if="store.state.isEdit" class="text-center tracking-widest font-extrabold text-outline-bold text-3xl opacity-60">EDITING</h1>
    <form @submit.prevent class="text-black flex flex-col items-start justify-center gap-4">

    <label for="note" class="text-lg font-bold w-full">Note
        <input id="note" v-model="editForm.note" placeholder="asdlk fsdf...." class="neumorph-btn-down outline-none rounded-lg w-full px-2 py-4 transition-all focus:neumorph-btn-up" type="text" autocomplete="off">
    </label>

    <button @click="editItemFind" class="neumorph-btn-up px-4 py-1 rounded-lg ml-auto">Update</button>
    </form>
    </div>
    </div>
    </template>

<script setup>
import  store  from "/src/store";
import { reactive } from "vue";

//--------------VARIABLES-----------

const editForm = reactive({
    note:"",
})
//--------------FUNCTIONS-----------

//edit item
const editItemFind = () => {
if(editForm.note.length <= 100)
{
    const tempList = store.state.list.map(obj =>obj.id === store.state.editid ? 
    { ...obj, 
        id:obj.id,
        income:obj.income,
        amount:obj.amount,
        note:editForm.note,
        currency:obj.currency,
        date: new Date() } : obj
);        
store.state.list = tempList
store.state.isEdit=false
store.state.baseEditCurrency=editForm.currency
editForm.note =""
}
else{

    store.state.isEdit=false
} 
}


</script>    