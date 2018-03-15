import Mock from 'mockjs'

const Random = Mock.Random
const data = function() {
    let r = []
    for (let i = 0; i < 5; i++) {
        let item = {
            id: i,
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            content: Random.csentence(3, 10), //  Random.csentence( min, max )
            date: Random.date(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
            time: Random.time() // Random.time() 返回一个随机的时间字符串
        }
        r.push(item)
    }

    return r
}

export default [
    {
        url: /\/home\/str\/\w+/, // '/home/test/:id'
        method: 'get',
        data: '这是从 mockjs 中获取的字符串'
    },
    {
        url: '/home/list',
        method: 'get',
        data
    }
]
