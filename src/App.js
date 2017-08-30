import React, { Component } from 'react';
import MapPosition from './components/map_position/map_position';
import SearchBar from './components/search_bar/search_bar';
import WeatherForecast from './components/weather_forecast/weather_forecast';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="search-wrapper">
            <SearchBar/>
        </div>
        <div className="map-weather-wrapper">
            <div className="map-wrapper">
                <MapPosition/>
            </div>
            <div className="weather-wrapper">
                <WeatherForecast/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
