const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')

const x = localStorage.getItem('x')
// 储存本地之后，关闭网页重新打开之调用之用，
// 先声明，给储存地址一个名字，
// 在结尾的通过JSON.stringify 将对象转为字符串，
// 这时是一个字符串，
const xObject = JSON.parse(x)
// JSON.parse 是将字符串转换为对象
// parse 知识点：parse不会转换空字符串



const hasMap = xObject || [
    // 让初始值等于xObject,考虑可能为空，所以给一个保底值
    {logo: 'A', logoType: 'text', url: 'https://www.acfun.cn'},
    {logo: './images/bilibili.png', logoType: 'image', url: 'https://www.bilibili.com'},
    {logo: 'Q', logoType: 'text', url: 'https://www.qq.com'}
    
]

const render = () =>{
    $siteList.find('li:not(.last)').remove()
    hasMap.forEach(node=>{
        const $li = $(`<li>
            <a href="${node.url}">
                <div class="site">
                    <div class="logo">${node.logo[0]}</div>
                    <div class="link">${node.url}</div>
                </div>
            </a>
        </li>`).insertBefore($lastLi) 
    });
}

// hasMap.forEach(node=>{
//     const $li = $(`<li>
//             <a href="${node.url}">
//                 <div class="site">
//                     <div class="logo">${node.logo[0]}</div>
//                     <div class="link">${node.url}</div>
//                 </div>
//             </a>
//         </li>`).insertBefore($lastLi) 
//         // 遍历之后会调用函数会创建，所以HTML里面可以不写，前三个li，只留下最后的addbutton即可
// });

render()

$('.addButton')
    .on('click', ()=>{
        // console.log(1)
        let url = window.prompt('请问你要添加的网址是啥？')
        if(url.indexOf('http')!==0){

            // alert('请输入 http 开头的网址')
            url = 'https://' + url
            // const 不支持二次赋值，所以要改为 let
        };

        console.log(url);
        // const $li = $(`<li>
        //     <a href="${url}">
        //         <div class="site">
        //             <div class="logo">${url[0]}</div>
        //             <div class="link">${url}</div>
        //         </div>
        //     </a>
        // </li>`).insertBefore($lastLi)
        // //这里删掉也是因为，点击事件之后不让它在创建li；在hasMap里面添加一项。

        hasMap.push({
            logo: url[0],
            logoType: 'text',
            url: url
        });
        // 推送完之后，需要重新渲染，但是之前的需要删掉，否则冲突


        // $siteList.find('li:not(.last)').remove()


        render()
        //render就是下面的这一段代码，
        //因为和上面的代码一模一样，所以给它声明一个名字，优化一下。

        // hasMap.forEach(node=>{
        //     const $li = $(`<li>
        //         <a href="${node.url}">
        //             <div class="site">
        //                 <div class="logo">${node.logo[0]}</div>
        //                 <div class="link">${node.url}</div>
        //             </div>
        //         </a>
        //     </li>`).insertBefore($lastLi)
        // });

    })


// 测试手机，命令行获取IP
// ipconfig

window.onbeforeunload = () =>{
    const string = JSON.stringify(hasMap)
    // JSON.stringify 将对象转化为字符串
    window.localStorage.setItem('x', string)
    //储存在本地的内存里，x时是key，string是值；
}