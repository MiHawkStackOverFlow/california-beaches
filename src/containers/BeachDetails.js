import React, { Component } from 'react';
import axios from "axios";
import { CALIFORNIA_BEACHES_API_URL } from '../config';

export default class BeachDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beach: null
    }
  }
  
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(CALIFORNIA_BEACHES_API_URL + '/id/' + id).then((response) => {
      if(response.status >= 200 && response.status < 300) {
        console.log(response.data); 
        this.setState({ beach: response.data })
      }
    })
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h1>Hello</h1>
      </div>
    );
  }
}