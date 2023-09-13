import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplySpeaks = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="count-heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="apply-breaks"
            type="button"
            onClick={this.onApplySpeaks}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
