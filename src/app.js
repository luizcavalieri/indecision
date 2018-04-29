/* STATEFUL FUNCTIONAL REACT COMPONENTS */
class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of a computer;',
            options:  props.options //['Thing one', 'Thing two', 'Thing three']
        };
    }

    componentDidMount(){
       try{
           const json = localStorage.getItem('optionsIA');
           const options = JSON.parse(json);
           options && this.setState(() => ({ options }));
       }catch (e) {
           console.log('Error: '+e);
       }

    }

    componentDidUpdate(provProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const jsonOption = JSON.stringify(this.state.options);
            localStorage.setItem('optionsIA', jsonOption);
        }
    }
    componentWillUnmount(){
        // console.log('componentDidMountt');
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleDeleteOptions() {
        // this is a shorthand option for function returning object
        this.setState(() => ({ options: [] }));
    }

    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option) {
            return 'Enter valid value to add item.';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render(){
        const title = 'Indecision',
              subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header
                    title={'Indecion App v1.2'}
                />

                <User
                    name={"Luiz"}
                    age={"32"}
                />

                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />

                <AddOptions
                    handleAddOption={this.handleAddOption}
                />

            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};


class AddOptions extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return { error } // this is the same as "return { error: error }"
        });

        if(!error) event.target.elements.option.value = '';
        event.target.elements.option.focus();
    }


    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


/* STATELESS FUNCTIONAL COMPONENTS */
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App Default',
    subtitle: 'Put your life in the hands of a computer;',
};


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};


const Options = (props) => {
    return (
          <div>
              <button onClick={props.handleDeleteOptions}>Remove All</button>
              <p>total options: {props.options.length}</p>
              {props.options.length === 0 && <p>Please add an option to start.</p>}
              <ol>
                  {
                      props.options.map((option) => (
                          <Option
                              key={option}
                              optionText={option}
                              handleDeleteOption={props.handleDeleteOption}
                          />
                      ))
                  }
              </ol>
          </div>
    );
};


const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }} >
                Remove
            </button>
        </li>
    );
};


const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));