<template>
<div v-if="store.state.toggleAdd " class="bg-[#b8c3c7] fixed top-0 left-0 h-screen w-screen z-[9999] center-flex">
    <div :class="addForm.income ? '!bg-gradient-to-r from-transparent via-green-500/20 to-transparent':'!bg-gradient-to-r from-transparent via-red-500/20 to-transparent'" class="neumorph  h-fit p-10 font-bank-miles md:rounded-2xl">

<!-- INCOME EXPENSE SELECT BUTTONS -->
<div class=" w-fit h-12 neumorph mx-auto my-10 rounded-lg center-flex ">
    <div @click="addForm.income = true" :class="addForm.income? 'neumorph-btn-up opacity-100 ':'neumorph-btn-down opacity-20'" class="w-1/2 font-bold select-none tracking-widest h-full transition-all center-flex text-lg rounded-l-lg cursor-pointer text-center px-4 hover:opacity-60 text-green-500 text-outline-thin uppercase">income</div>
    <div @click="addForm.income = false" :class="!addForm.income? 'neumorph-btn-up opacity-100 ':'neumorph-btn-down opacity-20'" class="w-1/2 font-bold select-none tracking-widest h-full transition-all center-flex text-lg rounded-r-lg cursor-pointer text-center px-4 hover:opacity-60 text-red-500 text-outline-thin uppercase">expense</div>
</div>


<!-- ADD FORM -->
<form @submit.prevent class="text-black flex flex-col items-start justify-center gap-4">
    <!-- AMOUNT INPUT -->
<label for="amount" class="text-lg font-bold w-full">Amount
    <input  id="amount" v-model="addForm.amount" placeholder="86465..." class="neumorph-btn-down outline-none rounded-lg w-full px-2 py-2 transition-all focus:neumorph-btn-up" type="number" autocomplete="off">
</label>
<!-- NOTE INPUT -->
<label for="note" class="text-lg font-bold w-full">Note
    <input id="note" v-model="addForm.note" placeholder="asdlk fsdf...." class="neumorph-btn-down outline-none rounded-lg w-full px-2 py-4 transition-all focus:neumorph-btn-up" type="text" autocomplete="off">
</label>
<!-- CURRENCY SELECT INPUT -->
<label for="currency" class="text-lg font-bold w-full">Currency
    <select name="currency"  id="currency" v-model="store.state.baseEditCurrency" class="neumorph-btn-down transition-all focus:neumorph-btn-up rounded-lg w-full bg-transparent outline-0 p-1">
        <option value="AED">AED</option>
        <option value="AFN">AFN</option>
        <option value="ALL">ALL</option>
        <option value="AMD">AMD</option>
        <option value="ANG">ANG</option>
        <option value="AOA">AOA</option>
        <option value="ARS">ARS</option>
        <option value="AUD">AUD</option>
        <option value="AWG">AWG</option>
        <option value="AZN">AZN</option>
        <option value="BAM">BAM</option>
        <option value="BBD">BBD</option>
        <option value="BDT">BDT</option>
        <option value="BGN">BGN</option>
        <option value="BHD">BHD</option>
        <option value="BIF">BIF</option>
        <option value="BMD">BMD</option>
        <option value="BND">BND</option>
        <option value="BOB">BOB</option>
        <option value="BRL">BRL</option>
        <option value="BSD">BSD</option>
        <option value="BTC">BTC</option>
        <option value="BTN">BTN</option>
        <option value="BWP">BWP</option>
        <option value="BYN">BYN</option>
        <option value="BYR">BYR</option>
        <option value="BZD">BZD</option>
        <option value="CAD">CAD</option>
        <option value="CDF">CDF</option>
        <option value="CHF">CHF</option>
        <option value="CLF">CLF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="COP">COP</option>
        <option value="CRC">CRC</option>
        <option value="CUC">CUC</option>
        <option value="CUP">CUP</option>
        <option value="CVE">CVE</option>
        <option value="CZK">CZK</option>
        <option value="DJF">DJF</option>
        <option value="DKK">DKK</option>
        <option value="DOP">DOP</option>
        <option value="DZD">DZD</option>
        <option value="EGP">EGP</option>
        <option value="ERN">ERN</option>
        <option value="ETB">ETB</option>
        <option value="EUR">EUR</option>
        <option value="FJD">FJD</option>
        <option value="FKP">FKP</option>
        <option value="GBP">GBP</option>
        <option value="GEL">GEL</option>
        <option value="GGP">GGP</option>
        <option value="GHS">GHS</option>
        <option value="GIP">GIP</option>
        <option value="GMD">GMD</option>
        <option value="GNF">GNF</option>
        <option value="GTQ">GTQ</option>
        <option value="GYD">GYD</option>
        <option value="HKD">HKD</option>
        <option value="HNL">HNL</option>
        <option value="HRK">HRK</option>
        <option value="HTG">HTG</option>
        <option value="HUF">HUF</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="IMP">IMP</option>
        <option value="INR">INR</option>
        <option value="IQD">IQD</option>
        <option value="IRR">IRR</option>
        <option value="ISK">ISK</option>
        <option value="JEP">JEP</option>
        <option value="JMD">JMD</option>
        <option value="JOD">JOD</option>
        <option value="JPY">JPY</option>
        <option value="KES">KES</option>
        <option value="KGS">KGS</option>
        <option value="KHR">KHR</option>
        <option value="KMF">KMF</option>
        <option value="KPW">KPW</option>
        <option value="KRW">KRW</option>
        <option value="KWD">KWD</option>
        <option value="KYD">KYD</option>
        <option value="KZT">KZT</option>
        <option value="LAK">LAK</option>
        <option value="LBP">LBP</option>
        <option value="LKR">LKR</option>
        <option value="LRD">LRD</option>
        <option value="LSL">LSL</option>
        <option value="LTL">LTL</option>
        <option value="LVL">LVL</option>
        <option value="LYD">LYD</option>
        <option value="MAD">MAD</option>
        <option value="MDL">MDL</option>
        <option value="MGA">MGA</option>
        <option value="MKD">MKD</option>
        <option value="MMK">MMK</option>
        <option value="MNT">MNT</option>
        <option value="MOP">MOP</option>
        <option value="MRO">MRO</option>
        <option value="MUR">MUR</option>
        <option value="MVR">MVR</option>
        <option value="MWK">MWK</option>
        <option value="MXN">MXN</option>
        <option value="MYR">MYR</option>
        <option value="MZN">MZN</option>
        <option value="NAD">NAD</option>
        <option value="NGN">NGN</option>
        <option value="NIO">NIO</option>
        <option value="NOK">NOK</option>
        <option value="NPR">NPR</option>
        <option value="NZD">NZD</option>
        <option value="OMR">OMR</option>
        <option value="PAB">PAB</option>
        <option value="PEN">PEN</option>
        <option value="PGK">PGK</option>
        <option value="PHP">PHP</option>
        <option value="PKR">PKR</option>
        <option value="PLN">PLN</option>
        <option value="PYG">PYG</option>
        <option value="QAR">QAR</option>
        <option value="RON">RON</option>
        <option value="RSD">RSD</option>
        <option value="RUB">RUB</option>
        <option value="RWF">RWF</option>
        <option value="SAR">SAR</option>
        <option value="SBD">SBD</option>
        <option value="SCR">SCR</option>
        <option value="SDG">SDG</option>
        <option value="SEK">SEK</option>
        <option value="SGD">SGD</option>
        <option value="SHP">SHP</option>
        <option value="SLE">SLE</option>
        <option value="SLL">SLL</option>
        <option value="SOS">SOS</option>
        <option value="SRD">SRD</option>
        <option value="STD">STD</option>
        <option value="SVC">SVC</option>
        <option value="SYP">SYP</option>
        <option value="SZL">SZL</option>
        <option value="THB">THB</option>
        <option value="TJS">TJS</option>
        <option value="TMT">TMT</option>
        <option value="TND">TND</option>
        <option value="TOP">TOP</option>
        <option value="TRY">TRY</option>
        <option value="TTD">TTD</option>
        <option value="TWD">TWD</option>
        <option value="TZS">TZS</option>
        <option value="UAH">UAH</option>
        <option value="UGX">UGX</option>
        <option value="USD">USD</option>
        <option value="UYU">UYU</option>
        <option value="UZS">UZS</option>
        <option value="VEF">VEF</option>
        <option value="VES">VES</option>
        <option value="VND">VND</option>
        <option value="VUV">VUV</option>
        <option value="WST">WST</option>
        <option value="XAF">XAF</option>
        <option value="XAG">XAG</option>
        <option value="XAU">XAU</option>
        <option value="XCD">XCD</option>
        <option value="XDR">XDR</option>
        <option value="XOF">XOF</option>
        <option value="XPF">XPF</option>
        <option value="YER">YER</option>
        <option value="ZAR">ZAR</option>
        <option value="ZMK">ZMK</option>
        <option value="ZMW">ZMW</option>
        <option value="ZWL">ZWL</option>
    </select>
</label>
<!-- SUBMIT BUTTON -->
<button @click="addFunc" class="neumorph-btn-up px-4 py-1 rounded-lg ml-auto">Add</button>
</form>
</div>
</div>
</template>

<script setup>
import  store  from "/src/store";
import { reactive } from "vue";
import axios from "axios";


//--------------VARIABLES-----------
const addForm = reactive({
    amount:null,
    note:"",
    currency:"",
    income:true
})
//--------------FUNCTIONS-----------

//reset form fields
const resetForm = ()=>{
    addForm.amount=null
    addForm.note=""
    addForm.currency=""

}
//convert to base currency
const convertToBaseCurrency=()=>{
    const link ="https://api.currencyapi.com/v3/latest?apikey=RgQyx6ttJHIuv8pPsi748wwqbQaynz2qbCLLvUIb&currencies="
    const reqCurrency = store.state.baseEditCurrency
    const reqLink = `${link}+${store.state.baseCurrency}&base_currency=${reqCurrency}`
    var exRate = 0.0

    axios.get(reqLink).then(response =>{
        exRate = response.data.data[store.state.baseCurrency].value
        
        if(addForm.income==true){
            store.state.cost.total = store.state.cost.total + (addForm.amount * exRate)
            store.state.cost.income = store.state.cost.income + (addForm.amount * exRate)
            resetForm()
        }
        else if(addForm.income==false){
            store.state.cost.total = store.state.cost.total - (addForm.amount * exRate)
            store.state.cost.expense = store.state.cost.expense - (addForm.amount * exRate)
            resetForm()
        }
    })
}
//add to state
const addFunc=()=>{

if(addForm.amount <= 999999 && addForm.amount>=1  && addForm.note.length <= 100 && addForm.note != "" )
{
    store.state.list.push({
        id:new Date().getTime(),
        income:addForm.income,
        amount:addForm.amount,
        note:addForm.note,
        currency:store.state.baseEditCurrency,
        date: new Date()
    })    
    convertToBaseCurrency()
    store.state.toggleAdd=false
}
else{
    store.state.toggleAdd=false
}
}


</script>