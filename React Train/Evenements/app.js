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
       this.state = {count: props.start, step: props.step, timer: null}
       this.toggle = this.toggle.bind(this)
       this.reset = this.reset.bind(this)
   }

   componentDidMount(){ //appel automatique à la création de Clock 
       this.play()
   }

   componentwillUnmout(){
       window.clearInterval(this.state.timer)
   }

   increm () {
       this.setState(function(state,props){
           return {count : state.count+state.step}
       })
   }

   pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
   }

   play () {
       window.clearInterval(this.state.timer)
       this.setState({
           timer: window.setInterval(this.increm.bind(this), 1000)
       })
   }

   reset () {
        // this.pause(
        // this.state.count = 0

        this.pause()
        this.play()
        this.setState((state, props) => ({count: props.start}))
   }

   toggle () {
       return this.state.timer ? this.pause() : this.play()
   }

   label () {
       return this.state.timer ? 'Pause' : 'Lecture'
   }

   render(){
       return <div>
           Valeur : {this.state.count}
           <button onClick={this.toggle}>{this.label()}</button>
           <button onClick={this.reset}>Réinitialiser</button>
           </div>
   }
 
}

Incrementer.defaultProps = { //parametre par défaut 
   start: 0,
   step : 1
}

// class ManualIncrementer extends React.Component {

//     constructor (props) {
//         super(props)
//         this.state = {n: 0}
//     }

//     increm (e) {
//         this.setState((state,props) => ({n : state.n + 1}))
//     }

//     render () {
//         return <div>Valeur : {this.state.n} <button onClick={this.increm.bind(this)}>Incrémenter</button> </div>
//     }

// }


function Home () {
   return <div>
       <Welcome name="Dorothée" />
       <Welcome name="Jean" />
       <Incrementer />
   </div>
}


//ReactDOM.render(<Welcome name="Jean">Bonjour tout le monde</Welcome>, document.querySelector('#app')) //Welcome est le nom de la méthode
ReactDOM.render(<Home name="Jean">Bonjour tout le monde</Home>, document.querySelector('#app')) //Welcome est le nom de la méthode