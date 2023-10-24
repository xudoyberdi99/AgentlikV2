import SubjectService from "../service/subject"

const state={
    data:null,
    isloading:false,
    error:null, 
}

const mutations ={
    getSubjectsStart(state){
        state.isloading=true
        state.data=null
        state.error=null
    },
    getSubjectsSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getSubjectsFailure(state){
        state.isloading=false
    },
 
}

const actions ={
    subjects(context, courseId){
        return new Promise((resolve)=>{
            context.commit('getSubjectsStart')
            SubjectService.subjectList(courseId).then(response =>  {
                context.commit('getSubjectsSuccess', response.data)
                resolve(response.data)
                console.log('subjectList', response.data)
            }).catch(error=>{context.commit('getSubjectsFailure',error)
                console.log(error)}
            ) 
        })
    },
   
    
}

export default {
    state,
    mutations,
    actions, 
}