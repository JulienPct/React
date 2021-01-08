//ECRITURE REACT SANS JSX POUR COMPRENDRE
//UTILISATION DE JSX NECESITTE BABEL POUR INTERPRETER LE LANGAGE JSX AUX NAVIGATEURS 
// let n = 0

// function render() {

//     const title = React.createElement('h1', {},
//     'Bonjour tout le monde ',
//     React.createElement('span', {}, n)
//     )
//     ReactDOM.render(title, document.querySelector('#app'))
// }

// render()

// window.setInterval(()=>{
//     n++
//     render()
// }, 1000)

let n = 0;

function numberFormats(n) {
    return n.toString().padStart(2, '0')
}

function render() {

    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const lis = items.map((item, k) => <li key={k}>{item}</li>) 
    //map permet de parcourir le tableau, puis on renvoie du jsx. K est l'index du tableau, et correspondera à la key de l'élément 
    const title = 
    <React.Fragment> 
    <h1 className = "title" id = "title">
        Bonjour les gens <span>{n}</span>
    </h1>
    <ul>{lis}</ul> 
    </React.Fragment>
    

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(()=>{
    n++
    render()
}, 1000)

