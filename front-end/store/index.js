

export default {
    namespaced: true,
  
    state() {
        return {
          swich:true,
          
        }
    },
 
    getters: {
       
    },
    
    mutations:{
      isSwitch(state,value){
       return state.swich = value
      },
    }
  
  }