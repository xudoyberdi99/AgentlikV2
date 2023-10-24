import { createStore } from 'vuex'
import partners from '../modules/partners'
import news from '../modules/news'
import documents from '../modules/documents'
import achievements from '../modules/achievements'
import bams from '../modules/bams'
import courses from '../modules/courses'
import subject  from '../modules/subject'

const store = createStore({
 state: {},
 mutations: {},
 actions: {},
 modules: {
    partners,
    news,
    documents,
    achievements,
    bams,
    courses,
    subject,
},
})

export default store