// const $siteList = $('.siteList')
// const $lastLi = $siteList.find('li.last')

// const x = localStorage.getItem('x')
// const xObject = JSON.parse(x)

// const hasMap = xObject || [
//     {logo: 'A', url: 'https://www.acfun.cn'},
//     {logo: 'B',  url: 'https://www.bilibili.com'}  
// ]

// const simplifyUrl = (url)=>{
//     return url.replace('https://', '')
//         .replace('http://', '')
//         .replace('www.', '')
//         // replace 只是替换url，不能直接return
//         // 所以return simplifyUrl
//         .replace(/\/.*/, '')
//         // 反斜杠是转译， 替换 / 开头的内容，为空
// }

// const render = () =>{
//     $siteList.find('li:not(.last)').remove()
//     hasMap.forEach((node,index) => {
//         const $li = $(`<li>
//             <div class="site">
//                 <div class="logo">${node.logo}</div>
//                 <div class="link">${simplifyUrl(node.url)}</div>
//                 <div class="close">
//                     <svg class="icon">
//                         <use xlink:href="#icon-close"></use>
//                     </svg>
//                 </div>
//             </div>
//         </li>`).insertBefore($lastLi) 

//         // 添加icon-close后，点击时，也在a标签里面，所以页面会跳转，
//         // 解决办法是：1、直接添加时，监听close
//         // 阻止冒泡，这里不是指冒泡事件
//         $li.on('click', ()=>{
//             window.open(node.url)
//         })
//         $li.on('click','.close',(e)=>{
//             e.stopPropagation()
//             // stopPropagation 停止传递
//             hasMap.splice(index, 1)
//             // 从当前节点删掉
//             render()
//             // 重新渲染
//         })
//     })
// }

// render()

// $('.addButton').on('click', ()=>{
//     let url = window.prompt('请问你要添加的网址是啥？')
//     if(url.indexOf('http')!==0){
//         url = 'https://' + url
//     }

//     console.log(url)

//     hasMap.push({
//         logo: simplifyUrl(url)[0].toUpperCase(),
//         // toUpperCase 小写转换为大写
//         // 还可以用css控制，添加text-transform: upperCase; 即可
//         url: url
//     })

//     render()
// })

// window.onbeforeunload = () =>{
//     const string = JSON.stringify(hasMap)
//     localStorage.setItem('x',string)
// }

// $(document).on('keypress', (e) => {
//     const key = e.key
//     // 可以简写为 const {key} = e
//     for(let i =0;i<hasMap.length;i++){
//         if (hasMap[i].logo.toLowerCase() === key){
//             window.open(hasMap[i].url)
//         }
//     }
// })




const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
  {logo: 'A', url: 'https://www.acfun.cn'},
  {logo: 'B', url: 'https://www.bilibili.com'}
]
const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '') // 删除 / 开头的内容
}

const render = () => {
  $siteList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {
    const $li = $(`<li>
      <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${simplifyUrl(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </li>`).insertBefore($lastLi)
    $li.on('click', () => {
      window.open(node.url)
    })
    $li.on('click', '.close', (e) => {
      e.stopPropagation() // 阻止冒泡
      hashMap.splice(index, 1)
      render()
    })
  })
}

render()

$('.addButton').on('click', () => {
  let url = window.prompt('请问你要添加的网址是啥？')
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  console.log(url)
  hashMap.push({
    logo: simplifyUrl(url)[0].toUpperCase(),
    url: url
  })
  render()
})

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x', string)
}

$(document).on('keypress', (e) => {
  const {key} = e
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url)
    }
  }
})