 function WelcomeFunc ({name, children}) {
     return <div>
            <h1>Bonjour {name}</h1>
            <p>
                {children}
            </p>
            </div>
 }

//DEUX METHODE DIFFERENTES

 class Welcome extends React.Component {

    render() {
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
        </div>
    }

 }


class Clock extends React.Component {


    constructor(props){
        super(props)
        this.state = {date: new Date( )}
        this.timer = null
    }

    componentDidMount(){ //appel automatique à la création de Clock 
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmout(){
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render(){
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}



//METHODE INCREMENTATION SANS PARAMETRE DE COMPONENT
// class Incrementer extends React.Component {


//     constructor(props){
//         super(props)
//         this.state = {count: 0}
//         this.timer = null
//     }

//     componentDidMount(){ //appel automatique à la création de Clock 
//         this.timer = window.setInterval(this.increm.bind(this), 1000)
//     }

//     componentwillUnmout(){
//         window.clearInterval(this.timer)
//     }

//     increm () {
//         this.setState({ count: this.state.count + 1 })
//     }


//     render(){
//         return <div>{this.state.count}</div>
//     }
  
// }


class Incrementer extends React.Component {


    constructor(props){
        super(props)
        this.state = {count: props.start, step: props.step}
        this.timer = null
    }

    componentDidMount(){ //appel automatique à la création de Clock 
        this.timer = window.setInterval(this.increm.bind(this), 1000)
    }

    componentwillUnmout(){
        window.clearInterval(this.timer)
    }

    increm () {
        this.setState(function(state,props){
            return {count : state.count+state.step}
        })
    }


    render(){
        return <div>Valeur : {this.state.count}</div>
    }
  
}

Incrementer.defaultProps = { //parametre par défaut 
    start: 0,
    step : 1
}



function Home () {
    return <div>
        <Welcome name="Dorothée" />
        <Welcome name="Jean" />
        <Clock/>
        <Incrementer start={10}/>
        <Incrementer start={100} step = {10} />
    </div>
}


 //ReactDOM.render(<Welcome name="Jean">Bonjour tout le monde</Welcome>, document.querySelector('#app')) //Welcome est le nom de la méthode
 ReactDOM.render(<Home name="Jean">Bonjour tout le monde</Home>, document.querySelector('#app')) //Welcome est le nom de la méthode