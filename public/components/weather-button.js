'use strict';

const e = React.createElement;

class WeatherButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Should return current temp for Atlanta from OpenWeather API!';
        }

        // Display a "Like" <button>
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Get current weather.'
        );
    }
}

const domContainer = document.querySelector('#weather_button_container');
ReactDOM.render(e(WeatherButton), domContainer);