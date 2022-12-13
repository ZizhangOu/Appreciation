const content = document.getElementById('content')
const addedBtn = document.getElementById('addedBtn')
const list = document.getElementById('list')

const listContent = []

addedBtn.addEventListener('click',function(){
    console.log('content',content.value)

    listContent.unshift({
        content:content.value
    })

    let htmlStr = ''

    listContent.forEach(function(item){
        htmlStr = htmlStr + 
        `
        <div class="item">
          <div>
            <p>content：${item.content}</p>
          </div>
        </div>
        `
    

    })

    list.innerHTML = htmlStr

})