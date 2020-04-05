import React from "react";

interface IState {
  conditions: {};
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { conditions: {} };
  }

  search = () => {
    let queryString = "http://sample.com?";
    for (let [key, value] of Object.entries(this.state.conditions)) {
      queryString += `${key}=${value}&`;
    }
    alert(queryString);
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      conditions: Object.assign(this.state.conditions, {
        [event.target.name]: event.target.value,
      }),
    });
    console.log(this.state.conditions);
  };

  render() {
    return (
      <>
        <h3>rest API search condition maker</h3>
        <div>
          <label>input1 : </label>
          <input type="number" name="input1" onChange={this.onChange}></input>
        </div>
        <div>
          <label>input2 : </label>
          <input type="text" name="input2" onChange={this.onChange}></input>
        </div>
        <div>
          <label>input3 : </label>
          <input type="text" name="input3" onChange={this.onChange}></input>
        </div>
        <div>
          <input type="button" value="search" onClick={this.search}></input>
        </div>
      </>
    );
  }
}

export default App;
