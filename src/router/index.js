import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView, 
  PartnersView,
  NewsView,
  NewsDetailView,
  DocumentsView,
  AchievementsView,
  AchievementsDetailView,
  PriceView,
  BAMView,
  CoursesView,
  InteractivService,
    LastNews,
    UseFulLinks
} from '@/views'


const  routes= [
    {
      path:'/',
      name:'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: InteractivService
    },
    {
      path: '/lastnews',
      name: 'lastnews',
      component: LastNews
    },
    {
      path: '/usefullinks',
      name: 'usefullinks',
      component: UseFulLinks
    },
    {
      path:'/partners',
      name:'partners',
      component: PartnersView,
    },
    {
      path:'/news',
      name:'news',
      component: NewsView,
    },
    {
      path:'/news-detail/:id',
      name:'news-details',
      component: NewsDetailView,
    },
    {
      path:'/documents',
      name:'documents',
      component: DocumentsView,
    },
    {
      path:'/achievements',
      name:'achievements',
      component: AchievementsView,
    },
    {
      path:'/achievements/achievements-detail/:id',
      name:'achievements-details',
      component: AchievementsDetailView,
    },
    {
      path:'/price',
      name:'price',
      component: PriceView,
    },
    {
      path:'/bams',
      name:'bams',
      component: BAMView,
    },
    {
      path:'/courses',
      name:'courses',
      component: CoursesView,
    },
  ];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});
export default router
