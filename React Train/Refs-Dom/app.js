class Field extends React.Component {

    render(){

        return <div className="form-group">
            <input type="text" className="form-control" ref={this.props.forwardRef}/>
        </div>

    }

}

const FieldWithRef = React.forwardRef((props, ref) => {
    return <Field forwardRef={ref}/>
})

class Home extends React.Component {

    constructor (props) {

        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef() // Permet de créer un objet qui a une clé courante qui va contenir la référence que l'on souhaite utiliser

    }

    handleClick (e){

        console.log(this.input.current.value)

    }

    render(){

        return <div>
            <FieldWithRef ref={this.input} label="demo"/>
            <button onClick={this.handleClick}>Tester</button>
        </div>
    }

}

ReactDOM.render(<Home/>, document.querySelector('#app'))