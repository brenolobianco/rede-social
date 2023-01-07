
export class Toast{
  static CriarPopup(){
    const container=document.querySelector('.modal-erro')
    const div = document.createElement('div')
  
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const button = document.createElement('button')

    div.classList.add('toast')
    h2.innerText='Acesso não autorizado'
    p.innerText = 'Essa conta não existe, logo não pode acessar a página dos posts'
    button.innerText = 'Entendi'
container.append(div)
    div.append(h2,p,button)
    button.addEventListener('click',()=>{
      div.classList.toggle('toast-close')
    })

    return div

   
  }
}
