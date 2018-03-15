import Mock from 'mockjs'
import home from './home'

// Mock.mock( url, post/get , 返回的数据)

const arr = [...home]
arr.forEach(({ url, method, data }) => {
    Mock.mock(url, method, data)
})
