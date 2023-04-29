import { createStore } from "vuex";
const store = createStore({
    state:{
        toggleAdd:false,
        isEdit:false,
        baseCurrency:"TRY",
        baseEditCurrency:"TRY",
        editid:"",
        cost:{
            total:0,
            income:0,
            expense:0,

        },
        list:[],
        showTabs:{
            all:true,
            inbox:false,
            outbox:false
        }
        
    },

})

export default store; 
