import home from '@/view/home'
import home1 from '@/view/home/home1'
import member from '@/view/member'
import member1 from '@/view/member/member1'

export default [{
    path: '/',
    name: 'home',
    component: home,
    children: [{
        name: 'home1',
        path: '/home1',
        component: home1
    }]
}, {
    path: '/member',
    name: 'member',
    component: member,
    children: [{
        name: 'member1',
        path: '/member/member1',
        component: member1
    }]
}]
