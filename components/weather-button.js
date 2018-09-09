'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var element = React.createElement;

var WeatherButton = function (_React$Component) {
    _inherits(WeatherButton, _React$Component);

    function WeatherButton(props) {
        _classCallCheck(this, WeatherButton);

        var _this = _possibleConstructorReturn(this, (WeatherButton.__proto__ || Object.getPrototypeOf(WeatherButton)).call(this, props));

        _this.state = { clicked: false };
        return _this;
    }

    _createClass(WeatherButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.clicked) {
                return 'Should return current temp for Atlanta from OpenWeather API!';
            }
            // Display a "Get Weather" <button>
            return element('button', { onClick: function onClick() {
                    return _this2.setState({ clicked: true });
                } }, 'Get Weather!');
        }
    }]);

    return WeatherButton;
}(React.Component);

var domContainer = document.querySelector('#weather_button_container');
ReactDOM.render(element(WeatherButton), domContainer);