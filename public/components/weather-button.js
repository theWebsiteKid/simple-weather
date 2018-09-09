'use strict'; // strict mode

const element = React.createElement;

class WeatherButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return 'Should return current temp for Atlanta from OpenWeather API!';
        }
        // Display a "Get Weather" <button>
        return element(
            'button',
            { onClick: () => this.setState({ clicked: true }) },
            'Get Weather!'
        );
    }
}

const domContainer = document.querySelector('#weather_button_container');
ReactDOM.render(element(WeatherButton), domContainer);