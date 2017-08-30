import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './search_bar.scss';



class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: 'New Delhi',
            scriptLoaded: false
        };

    }

    componentDidMount(){
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ scriptLoaded: true });
        }
    }

    componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.setState({ scriptLoaded: true });
            } else {
                console.log('error');
            };
        }
    }

    onInputchange = (address) => {
        this.setState({ address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    };



    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onInputchange,
        };
        if (!this.state.scriptLoaded) {
            return (
                <h4>Please wait</h4>
            )
        }
        return (
            <div className="search-bar">
                <PlacesAutocomplete inputProps={inputProps} />
            </div>
        );
    }
}

export default scriptLoader(
    [
        'http://maps.googleapis.com/maps/api/js?key=AIzaSyCRF-DWSOOQcQvZkPlRAIBCmcNukZV9DvI&libraries=places&region=IN'
    ],
)(SearchBar)
