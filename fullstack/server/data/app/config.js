
const menus = []

const add = (name , title , options = {})=>{
    route = options.route || ''
    menus.push({ name , title , ...options})
}

add('short-domain','短域名' , {
    icon: 'UnorderedListOutlined',
    childs: [
        {
            name: 'generate',
            title: '生成域名',
            icon: 'NodeExpandOutlined'
        },
        {
            name: 'resolve',
            title: '解析域名',
            icon: 'NodeCollapseOutlined'
        },
    ]
})

module.exports = {
    debug : true,
    menus : menus
}