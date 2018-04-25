class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0,
            name: 'Junghee'
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));











// function isTemplateThere(checkExisting) {
//
//     if(checkExisting) {
//         return checkExisting
//     }
//     else {
//         return undefined;
//     }
// }
// const secondTemplate = (
//     <div>
//         <h1>This is a h1 tag</h1>
//         <p>{information.title}</p>
//         {information.template ? isTemplateThere(information.template) : 'No template'}
//     </div>
// );
//
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
//
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// let count = 0;
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();