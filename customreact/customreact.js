function customRender(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
   
}

const reactElement ={
    type:'a',
    props:{
        href:"htpps://google.com" ,
        target:'_blank'

    },
    children: 'Click me to visiit google'
}

const mainContainer =document.querySelector('#root') 
customRender(reactElement,mainContainer)