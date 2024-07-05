import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}
  onincrement = () => {
    this.state(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counterContainer">
        <h1>
          The Button has been clicked <span style="color:red">{count}</span>
        </h1>
        <p> Click the button to increase the count!</p>
        <button className="btn bg-primary" onClick={this.onincrement}>
          ClickMe
        </button>
      </div>
    )
  }
}
export default ClickCounter
