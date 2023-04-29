<template>

    <div class="text-black  w-full md:w-2/3 neumorph md:rounded-2xl font-bank-miles font-bold tracking-widest  bg-slate-800 flex flex-col ">
<!-- NAVBAR -->
        <div class="flex py-4 items-center justify-around">
            <div @click="store.state.showTabs.all=true;store.state.showTabs.inbox=false;store.state.showTabs.outbox=false" :class="store.state.showTabs.all ? 'opacity-100 scale-110 hover:!scale-110 neumorph-btn-up':'opacity-40 neumorph-btn-down'" class="h-10 w-10 overflow-hidden group hover:bg-slate-500/50 hover:opacity-75 rounded-lg cursor-pointer hover:scale-105 scale-100 transition-all center-flex">
                <svg :class="store.state.showTabs.all ? 'fill-cyan-600':'fill-black'" class="group-hover:fill-cyan-300" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c.553,0,1-.448,1-1s-.447-1-1-1H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm1,13c0,.551-.448,1-1,1H5c-1.654,0-3-1.346-3-3V6.998c.854,.639,1.904,1.002,3,1.002H21c.552,0,1,.449,1,1v10Zm-2-5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
            </div>
            <div @click="store.state.showTabs.all=false;store.state.showTabs.inbox=true;store.state.showTabs.outbox=false" :class="store.state.showTabs.inbox ? 'opacity-100 scale-110 hover:!scale-110 neumorph-btn-up':'opacity-40 neumorph-btn-down'" class="h-10 w-10 overflow-hidden group hover:bg-slate-500/50 hover:opacity-75 rounded-lg cursor-pointer hover:scale-105 scale-100 transition-all center-flex">
                <svg :class="store.state.showTabs.inbox ? 'fill-green-600':'fill-black'" class="group-hover:fill-green-300" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M21,12h-3c-1.103,0-2,.897-2,2s-.897,2-2,2h-4c-1.103,0-2-.897-2-2s-.897-2-2-2H3c-1.654,0-3,1.346-3,3v4c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-4c0-1.654-1.346-3-3-3Zm1,7c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-4c0-.552,.448-1,1-1l3-.002v.002c0,2.206,1.794,4,4,4h4c2.206,0,4-1.794,4-4h3c.552,0,1,.448,1,1v4ZM7.293,7.121c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293V1c0-.553,.447-1,1-1s1,.447,1,1v7l2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-3.293,3.293c-.387,.387-.896,.582-1.405,.584l-.009,.002-.009-.002c-.509-.002-1.018-.197-1.405-.584l-3.293-3.293Z"/></svg>
            </div>
            <div @click="store.state.showTabs.all=false;store.state.showTabs.inbox=false;store.state.showTabs.outbox=true" :class="store.state.showTabs.outbox ? 'opacity-100 scale-110 hover:!scale-110 neumorph-btn-up':'opacity-40 neumorph-btn-down'" class="h-10 w-10 overflow-hidden group hover:bg-slate-500/50 hover:opacity-75 rounded-lg cursor-pointer hover:scale-105 scale-100 transition-all center-flex">
                <svg :class="store.state.showTabs.outbox ? 'fill-red-600':'fill-black'" class="group-hover:fill-red-300" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M21,12h-3c-1.103,0-2,.897-2,2s-.897,2-2,2h-4c-1.103,0-2-.897-2-2s-.897-2-2-2H3c-1.654,0-3,1.346-3,3v4c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-4c0-1.654-1.346-3-3-3Zm1,7c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-4c0-.552,.448-1,1-1l3-.002v.002c0,2.206,1.794,4,4,4h4c2.206,0,4-1.794,4-4h3c.552,0,1,.448,1,1v4ZM7.293,5.293c-.391-.391-.391-1.023,0-1.414L10.586,.586C10.972,.2,11.479,.006,11.986,.003l.014-.003,.014,.003c.508,.003,1.014,.197,1.4,.583l3.293,3.293c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-2.293-2.293v7c0,.553-.447,1-1,1s-1-.447-1-1V3l-2.293,2.293c-.391,.391-1.023,.391-1.414,0Z"/></svg>
            </div>
        </div>
<!-- INFORMATION -->
        <div class="border-t py-2 border-white flex justify-around items-center text-2xl">
            <div class="">TOTAL</div>
            <div :class="store.state.showTabs.all ? 'text-cyan-400':store.state.showTabs.inbox ? 'text-green-400': store.state.showTabs.outbox ? 'text-red-400':''" class="text-outline-thin drop-shadow-md neumorph-btn-up px-2 rounded-lg">
                {{ store.state.showTabs.all ? store.state.cost.total.toFixed(3) : store.state.showTabs.inbox ? store.state.cost.income.toFixed(3) : store.state.showTabs.outbox ? store.state.cost.expense.toFixed(3) : '' }}
                <select name="baseCurrency" id="baseCurrency" v-model="showCurrencyType" class="rounded-lg transition-all text-outline-thin w-fit bg-transparent outline-0 p-1">
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
                    <option  value="TRY">TRY</option>
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
            </div>
          
                


        </div>
<!-- OPERATIONS -->
        <div class="border-t border-white flex items-center md:justify-end justify-between px-2 py-2 md:pr-10 gap-2 md:gap-4">
            <div @click="store.state.toggleAdd = true"  class="neumorph-btn-up active:neumorph-btn-down mt-6 mr-0 md:mr-auto mx-4 select-none  p-2 rounded-lg cursor-pointer hover:scale-105 scale-100 transition-all" >
                <svg  fill="#000" class="rotate-45" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="18" height="18">
    <g>
    <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
    </g></svg>
    
            </div>
            <label v-if="store.state.showTabs.all" for="listType"><p class="z-50">Type</p>
                <select id="listType" v-model="listType" :class="listType!='None' ? '!neumorph-btn-up':'!neumorph-btn-down'" class="neumorph-btn-down rounded-lg transition-all focus:neumorph-btn-up  w-full bg-transparent outline-0 p-1">
                    <option selected value="None" >All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </label>
            <label for="currency"> <p class="z-50">Currency</p>
                <select  name="currency" id="currency" v-model="currencyType" :class="currencyType!='' ? '!neumorph-btn-up':'!neumorph-btn-down'" class="neumorph-btn-down rounded-lg transition-all focus:neumorph-btn-up  w-full bg-transparent outline-0 p-1">
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
                    <option  value="TRY">TRY</option>
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

            <div :class="listType !='None' || currencyType != '' ? 'opacity-100 pointer-events-auto neumorph-btn-up':'opacity-40 pointer-events-none neumorph-btn-down'" @click="resetFilter" class=" bg-red-500/90 hover:bg-red-600  mt-6 p-2 rounded-lg cursor-pointer hover:scale-105 scale-100 transition-all" >
                <svg  fill="#000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="18" height="18">
    <g>
    <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
    </g></svg>
    
            </div>
        </div>





<!-- ALL TAB  -->

        <div v-if="store.state.showTabs.all" class="border-t border-b max-h-96 border-white  overflow-x-hidden overflow-y-scroll mb-6 mt-2">
            <div v-for="i in store.state.list " :key="i" v-show="(listType=='None' ? true : listType=='Income' ? i.income : !i.income) && (currencyType == '' ? true : i.currency == currencyType ? true : '')"  :class="i.income ? 'neumorph-green hover:border-green-900/50 hover:!bg-gradient-to-r from-transparent via-green-600/20 to-transparent':'neumorph-red hover:border-red-900/50 hover:!bg-gradient-to-r from-transparent via-red-600/20 to-transparent'"  class="card  transition-all border-t border-b border-transparent my-4 py-6  mx-2 px-4  md:mx-10 md:my-6 rounded-lg flex  md:px-10 font-thin">
                <div :class="i.income ? 'text-green-500 ':'text-red-500 '" class=" w-3/12 text-center center-flex text-2xl text-outline-bold drop-shadow-lg   ">{{i.income ?'+':'-'}} {{i.amount}} {{ i.currency }}</div>
                <div class=" w-8/12 px-4 flex items-start flex-col justify-center">
                    <div class="drop-shadow-lg before:content-['´'] before:opacity-50 font-bold after:opacity-50 after:content-['´'] w-full text-ellipsis overflow-hidden">{{ i.note }}</div>
                    <div class=" opacity-70">{{ i.date }}</div>
                </div>
                <div class=" w-1/12 center-flex gap-4 flex-col">
                    <div @click="editOpen(i.id)" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M9,16h1.59c1.07,0,2.07-.42,2.83-1.17L23.12,5.12c.57-.57,.88-1.32,.88-2.12s-.31-1.55-.88-2.12c-1.17-1.17-3.07-1.17-4.24,0L9.17,10.59c-.76,.76-1.17,1.76-1.17,2.83v1.59c0,.55,.45,1,1,1ZM21.71,2.29c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71l-1.29,1.29-1.41-1.41,1.29-1.29c.39-.39,1.02-.39,1.41,0ZM10,13.41c0-.53,.21-1.04,.59-1.41l7-7,1.41,1.41-7,7c-.38,.38-.88,.59-1.41,.59h-.59v-.59Zm14,9.59c0,.55-.45,1-1,1-1.54,0-2.29-1.12-2.83-1.95-.5-.75-.75-1.05-1.17-1.05-.51,0-.9,.44-1.51,1.15-.7,.83-1.57,1.85-3.03,1.85s-2.32-1.03-3-1.87c-.58-.7-.96-1.13-1.46-1.13-.39,0-.63,.25-1.16,.91-.72,.88-1.71,2.09-3.84,2.09-2.76,0-5-2.24-5-5s2.24-5,5-5c.55,0,1,.45,1,1s-.45,1-1,1c-1.65,0-3,1.35-3,3s1.35,3,3,3c1.18,0,1.67-.6,2.29-1.36,.6-.73,1.34-1.64,2.71-1.64,1.47,0,2.32,1.03,3,1.87,.58,.7,.96,1.13,1.46,1.13s.9-.44,1.51-1.15c.7-.83,1.57-1.85,3.03-1.85s2.29,1.12,2.83,1.95c.5,.75,.75,1.05,1.17,1.05,.55,0,1,.45,1,1Z"/></svg>

                    </div>
                    <div @click="deleteItem(i.id)" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>

                    </div>
                </div>
                
            </div>
        </div>

        <!-- INBOX TAB  -->

        <div v-if="store.state.showTabs.inbox"  class="border-t border-b max-h-96 border-white  overflow-x-hidden overflow-y-scroll mb-6 mt-2">
            <div v-for="i in store.state.list " :key="i" v-show="store.state.showTabs.inbox && i.income && (currencyType == '' ? true : i.currency == currencyType ? true : '')  " :class="i.income ? 'neumorph-green hover:border-green-900/50 hover:!bg-gradient-to-r from-transparent via-green-600/20 to-transparent':'neumorph-red hover:border-red-900/50 hover:!bg-gradient-to-r from-transparent via-red-600/20 to-transparent'"  class="card  transition-all border-t border-b border-transparent my-4 py-6  mx-2 px-4  md:mx-10 md:my-6 rounded-lg flex  md:px-10 font-thin">
                <div :class="i.income ? 'text-green-500 ':'text-red-500 '" class=" w-3/12 text-center center-flex text-2xl text-outline-bold drop-shadow-lg   ">{{i.income ?'+':'-'}} {{i.amount}} {{ i.currency }}</div>
                <div class=" w-8/12 px-4 flex items-start flex-col justify-center">
                    <div class="drop-shadow-lg before:content-['´'] before:opacity-50 font-bold after:opacity-50 after:content-['´'] w-full text-ellipsis overflow-hidden">{{ i.note }}</div>
                    <div class=" opacity-70">{{ i.date }}</div>
                </div>
                <div class=" w-1/12 center-flex gap-4 flex-col">
                    <div @click="store.state.isEdit=true" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M9,16h1.59c1.07,0,2.07-.42,2.83-1.17L23.12,5.12c.57-.57,.88-1.32,.88-2.12s-.31-1.55-.88-2.12c-1.17-1.17-3.07-1.17-4.24,0L9.17,10.59c-.76,.76-1.17,1.76-1.17,2.83v1.59c0,.55,.45,1,1,1ZM21.71,2.29c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71l-1.29,1.29-1.41-1.41,1.29-1.29c.39-.39,1.02-.39,1.41,0ZM10,13.41c0-.53,.21-1.04,.59-1.41l7-7,1.41,1.41-7,7c-.38,.38-.88,.59-1.41,.59h-.59v-.59Zm14,9.59c0,.55-.45,1-1,1-1.54,0-2.29-1.12-2.83-1.95-.5-.75-.75-1.05-1.17-1.05-.51,0-.9,.44-1.51,1.15-.7,.83-1.57,1.85-3.03,1.85s-2.32-1.03-3-1.87c-.58-.7-.96-1.13-1.46-1.13-.39,0-.63,.25-1.16,.91-.72,.88-1.71,2.09-3.84,2.09-2.76,0-5-2.24-5-5s2.24-5,5-5c.55,0,1,.45,1,1s-.45,1-1,1c-1.65,0-3,1.35-3,3s1.35,3,3,3c1.18,0,1.67-.6,2.29-1.36,.6-.73,1.34-1.64,2.71-1.64,1.47,0,2.32,1.03,3,1.87,.58,.7,.96,1.13,1.46,1.13s.9-.44,1.51-1.15c.7-.83,1.57-1.85,3.03-1.85s2.29,1.12,2.83,1.95c.5,.75,.75,1.05,1.17,1.05,.55,0,1,.45,1,1Z"/></svg>

                    </div>
                    <div @click="deleteItem(i.id)" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>

                    </div>
                </div>
                
            </div>
        </div>


                <!-- OUTBOX TAB  -->

                <div v-if="store.state.showTabs.outbox"  class="border-t border-b max-h-96 border-white  overflow-x-hidden overflow-y-scroll mb-6 mt-2">
            <div v-for="i in store.state.list " :key="i" v-show="store.state.showTabs.outbox && i.income==false && (currencyType == '' ? true : i.currency == currencyType ? true : '')" :class="i.income ? 'neumorph-green hover:border-green-900/50 hover:!bg-gradient-to-r from-transparent via-green-600/20 to-transparent':'neumorph-red hover:border-red-900/50 hover:!bg-gradient-to-r from-transparent via-red-600/20 to-transparent'"  class="card  transition-all border-t border-b border-transparent my-4 py-6  mx-2 px-4  md:mx-10 md:my-6 rounded-lg flex  md:px-10 font-thin">
                <div :class="i.income ? 'text-green-500 ':'text-red-500 '" class=" w-3/12 text-center center-flex text-2xl text-outline-bold drop-shadow-lg   ">{{i.income ?'+':'-'}} {{i.amount}} {{ i.currency }}</div>
                <div class=" w-8/12 px-4 flex items-start flex-col justify-center">
                    <div class="drop-shadow-lg before:content-['´'] before:opacity-50 font-bold after:opacity-50 after:content-['´'] w-full text-ellipsis overflow-hidden">{{ i.note }}</div>
                    <div class=" opacity-70">{{ i.date }}</div>
                </div>
                <div class=" w-1/12 center-flex gap-4 flex-col">
                    <div @click="store.state.isEdit=true" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M9,16h1.59c1.07,0,2.07-.42,2.83-1.17L23.12,5.12c.57-.57,.88-1.32,.88-2.12s-.31-1.55-.88-2.12c-1.17-1.17-3.07-1.17-4.24,0L9.17,10.59c-.76,.76-1.17,1.76-1.17,2.83v1.59c0,.55,.45,1,1,1ZM21.71,2.29c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71l-1.29,1.29-1.41-1.41,1.29-1.29c.39-.39,1.02-.39,1.41,0ZM10,13.41c0-.53,.21-1.04,.59-1.41l7-7,1.41,1.41-7,7c-.38,.38-.88,.59-1.41,.59h-.59v-.59Zm14,9.59c0,.55-.45,1-1,1-1.54,0-2.29-1.12-2.83-1.95-.5-.75-.75-1.05-1.17-1.05-.51,0-.9,.44-1.51,1.15-.7,.83-1.57,1.85-3.03,1.85s-2.32-1.03-3-1.87c-.58-.7-.96-1.13-1.46-1.13-.39,0-.63,.25-1.16,.91-.72,.88-1.71,2.09-3.84,2.09-2.76,0-5-2.24-5-5s2.24-5,5-5c.55,0,1,.45,1,1s-.45,1-1,1c-1.65,0-3,1.35-3,3s1.35,3,3,3c1.18,0,1.67-.6,2.29-1.36,.6-.73,1.34-1.64,2.71-1.64,1.47,0,2.32,1.03,3,1.87,.58,.7,.96,1.13,1.46,1.13s.9-.44,1.51-1.15c.7-.83,1.57-1.85,3.03-1.85s2.29,1.12,2.83,1.95c.5,.75,.75,1.05,1.17,1.05,.55,0,1,.45,1,1Z"/></svg>

                    </div>
                    <div @click="deleteItem(i.id)" class="w-4 h-4 cursor-pointer  scale-100 hover:scale-110 transition-all">
                        <svg  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import store from "/src/store"
import { ref, watch } from "vue";
import axios from "axios";

//--------------VARIABLES-----------
const currencyType = ref('')
const showCurrencyType = ref('TRY')
const listType = ref("None")
const tempSCT = ref("")
//--------------FUNCTIONS-----------


//convert total value new currency

watch(showCurrencyType, (count, prevCount) => {

    tempSCT.value=prevCount
    showCurrencyType.value=count
    store.state.baseCurrency = showCurrencyType.value
    const link ="https://api.currencyapi.com/v3/latest?apikey=RgQyx6ttJHIuv8pPsi748wwqbQaynz2qbCLLvUIb&currencies="

    const reqCurrency = tempSCT.value
    const reqLink = `${link}+${showCurrencyType.value}&base_currency=${reqCurrency}`
    var exRate = 0.0
    axios.get(reqLink).then(response =>{
        exRate = response.data.data[showCurrencyType.value].value
        store.state.cost.total = store.state.cost.total * exRate
        store.state.cost.income = store.state.cost.income * exRate 
        store.state.cost.expense = store.state.cost.expense * exRate 
    })

})
//open edit modal
const editOpen=(id)=>{
    store.state.editid=id
    store.state.isEdit=true
}

//reset list filter
const resetFilter = ()=>{
    currencyType.value=""
    listType.value="None"
}

const deleteId= ref(0)
//delete item
const  deleteItem = (deleteid)=>{
    
    const user = store.state.list.filter(t => t.id == deleteid)
    deleteId.value = deleteid
    fixTotal(user[0].amount , user[0].currency ,user[0].income)

}


//fix total value after delete item.

const fixTotal = (amount , currency , income)=>{
    const fixamount = amount
    const fixcurrency = currency
    const fixincome = income
    const link ="https://api.currencyapi.com/v3/latest?apikey=RgQyx6ttJHIuv8pPsi748wwqbQaynz2qbCLLvUIb&currencies="
    const reqLink = `${link}+${fixcurrency}&base_currency=${store.state.baseCurrency}`
    var exRate = 0.0
    axios.get(reqLink).then(response =>{
        exRate = response.data.data[fixcurrency].value

        if(fixincome==true){
            store.state.cost.total = store.state.cost.total - (fixamount / exRate)
            store.state.cost.income = store.state.cost.income - (fixamount / exRate)
            store.state.list=store.state.list.filter(t => t.id != deleteId.value)

        }
        else if(fixincome==false){
            store.state.cost.total = store.state.cost.total + (fixamount / exRate)
            store.state.cost.expense = store.state.cost.expense + (fixamount / exRate)
            store.state.list=store.state.list.filter(t => t.id != deleteId.value)

        }
    })

}


</script>


<style scoped>
option{
    background-color: #b8c3c7;
    color:black;
}

.neumorph-green{

background: #b8c7c2;
box-shadow:  -6px 6px 21px #4a504e,
             6px -6px 21px #ffffff;
}
.neumorph-red{

background: #c7b8b8;
box-shadow:  -6px 6px 21px #504a4a,
             6px -6px 21px #ffffff;
}

</style>