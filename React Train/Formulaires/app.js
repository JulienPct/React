function Field ({name, value, onChange, children}){
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
    </div>
}

function Checkbox ({name, value, onChange, children}){
    return <div className="form-check">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            // nom: ['demo2', 'demo1']   Pour les selects

            // checked: true   Pour les checkbox

            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        // this.setState({

        //     // nom: Array.from(e.target.selectedOptions).map(o => o.value)   Pour les selects

        //     //checked: e.target.checked   Pour les checkbox

        // })

        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            [name]: value
        })

    }

    handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false
        })
    }

    render() {
//         return <div>
//             {JSON.stringify(this.state.nom)}
//             <label htmlFor="nom">Mon nom</label>

// {/* Les selects */}

//             {/* <select value={this.state.nom} onChange={this.handleChange} multiple>
//                 <option value="demo1">Demo 1</option>
//                 <option value="demo2">Demo 2</option>
//                 <option value="demo3">Demo 3</option>
//             </select> */}

// {/* Les checkbox */}

//             {/* <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
//             {this.state.checked ? <div>Un message affiché si on coche la checkbox</div> : null} */}

//         </div>

/* Exemple */

        return <form className="container" onSubmit={this.handleSubmit}>

            {/* Champs controllés : value + onChange associés

            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/>
            </div>

            <div>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/>
            </div>

            <div>
                <label htmlFor="newsletter">S'abonner à la newsletter ?</label>
                <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"/>
            </div> */}
            
            {/* Champ non controllé : Pas de value ou "undefined" / utilisation de "defaultValue" */

            /* <input type="text" defaultValue="Salut"/> */}

            <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
            <Checkbox name="newsletter" checked={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
            
            <div className="form-group">
                <button className="btn btn-primary">Envoyer</button>
            </div>
            
            {JSON.stringify(this.state)}

        </form>

    }
}


//ReactDOM.render(<Welcome name="Jean">Bonjour tout le monde</Welcome>, document.querySelector('#app')) //Welcome est le nom de la méthode
ReactDOM.render(<Home name="Jean">Bonjour tout le monde</Home>, document.querySelector('#app'))