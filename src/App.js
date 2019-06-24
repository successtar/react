import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Walex from './Mydir/Walex';

function App() {
  return (React.createElement("h2", {className : "App"}, "Welcome to the React World", React.createElement("h5", null, "No one is born a professional"))
  );
}

class Success extends Component {

  /* Set State */

  state = {

    guy : [
            {id:"x", name : "Success", school : "Uniben"},
            {id:"xx", name: "Walexy", school : "Unilorin"},
            {id:"xxx", name: "Am.goal", school : "OAU"}
          ],

    boss: "succes",

    show:true
  };
  
  /* Switch Component Names method */

  switch = (name1, name2, name3) => {

    this.setState({    

        guy : [
              {id:"x", name : name1, school : "ABU"},
              {id:"xx", name: name2, school : "Unilag"},
              {id:"xxx", name: name3, school : "EKSU"}
            ],
        show:true

        })
  };
  
  /* Update Name with user input Method */

  nameChange = (e, id) => {

    const index = this.state.guy.findIndex(list => list.id === id);

    const edit = {...this.state.guy[index]};

    edit.name = e.target.value;

    const guy = [...this.state.guy];

    guy[index] = edit;

    this.setState({  guy : guy });
  };

  /* Toggle list component view */

  toggle = () => {

    const status = this.state.show;

    this.setState({ show: !status });
  }

  /* Delete list component */

  delete = index => {

    const guy = [...this.state.guy];

    guy.splice(index, 1);
    
    this.setState({guy:guy});
  }


  render(){

    /* Create Inline Styling */

    const btnStyle = {

      color:"white",
      backgroundColor:"blue",
      border: "2px solid white",
      cursor:"pointer",
      margin:"5px",
      padding:"5px 10px",
      borderRadius:"5px"
    }

    /* Condition for view component */

    let compoList = null;

    if (this.state.show){

      compoList = (<div>
              { this.state.guy.map((pick, index) => {

                return <Walex 
                        name={pick.name}           
                        school={pick.school}
                        key={pick.id} 
                        styling={btnStyle}
                        delete ={() => this.delete(index)}
                        change ={(e) => this.nameChange(e, pick.id)}

                        />
              })}
            </div>
          );
    }

    /* Display JSX */

    return (
      <div className="App">
        
        <header className="App-header">
        
          <p > Successtar on this </p>
          <img src={logo} className="App-logo" alt="logo"  />

          <button 
            style={btnStyle}
            onClick={this.switch.bind(this, "The Boy is Good", "This Nice Guy", "The Cool guy")}
          >
            Click Me
          </button>

          <button 
            style={btnStyle}
            onClick={this.toggle}
          >
            Toggle Me
          </button>
          
          {compoList}

         </header>
         <App/>
        
      </div>
    );
  }
}

export default Success;
