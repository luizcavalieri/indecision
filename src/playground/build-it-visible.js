
class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }

    }


    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }

        });

        console.log(this.state.visibility);
    }

    render() {
        return (
          <div>
            <h1>Visbility Toggle</h1>

            <button onClick={this.handleToggleVisibility}>
                {
                     this.state.visibility ? 'Hide details' : 'Show details'
                }
            </button>
                {
                    this.state.visibility && (<p>This is visible now</p>)
                }
          </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

console.log('App is running');





// let visibility = false;
//
// const visibilityToggle = () => {
//     visibility = !visibility;
//
//     renderVariablesChanges();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderVariablesChanges = () => {
//     const template = (
//         <div>
//             <h1>Visbility Toggle</h1>
//
//             <button onClick={visibilityToggle}>
//                 {
//                     visibility ? 'Hide details' : 'Show details'
//                 }
//             </button>
//             {
//                 visibility && (<p>This is visible now</p>)
//             }
//
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// renderVariablesChanges();