import PartnerService from "../service/partners"

const state={
    data:null,
    isloading:false,
    error:null,
}

const mutations ={

    getPartnersStart(state){
        state.isloading=true
        state.data=null
        state.error=null
    },
    getPartnersSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getPartnersFailure(state){
        state.isloading=false
    }
}

const actions ={
    partners(context){
        return new Promise((resolve,reject)=>{
            context.commit('getPartnersStart')
            PartnerService.partners().then(response =>  {
                context.commit('getPartnersSuccess', response.data.content)
                resolve(response.data.content)
            }).catch(()=>context.commit('getPartnersFailure'))  
        })
    },
}

export default {
    state,
    mutations,
    actions, 
}