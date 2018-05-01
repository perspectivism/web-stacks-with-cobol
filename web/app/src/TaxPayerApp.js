import React, { Component } from 'react';

import { Button, ControlLabel, HelpBlock, FormControl, 
     FormGroup, Grid, Row, Col, PageHeader, Table } from 'react-bootstrap';

import axios from 'axios'

class TaxPayerApp extends Component {
  
  constructor(props, context) {
    super(props, context);
  
    this.state = {
      searchId: '',
      taxpayer: {}
    };
  }
  
  getTaxPayerIdValidationState() { 
    const val = this.state.searchId;
    const isValid = val.length === 0 || (val.length > 0 && !isNaN(val));
    return isValid ? null : 'error';
  }
  
  handleTaxPayerIdChange(e) {
    this.setState({ searchId: e.target.value });
  }

  handleTaxPayerIdKey(e) {
    if (e.which === 13) {
      e.preventDefault();
      this.handleSearchClicked();
    }
  }

  handleSearchClicked() {
    var self = this;
    axios.get('http://api.docker.localhost/taxpayer/' + self.state.searchId)
      .then(function(res) {
        self.setState({
          taxpayer: res.data
        });
      })
      .catch(function() {
        alert('Try entering a number in the range of 1 - 1000.');
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2} className='text-center'>            
            <PageHeader>
              <div>Arendelle TaxPayer System</div>
              <div>
                  <small>
                      Retrieve taxpayer information and computing taxes owed.
                  </small>
              </div>
            </PageHeader>            
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <form>
              <FormGroup
                controlId='formBasicText'
                validationState={this.getTaxPayerIdValidationState()}
              >
                <ControlLabel>Enter TaxPayer ID:</ControlLabel>
                <FormControl
                  autoFocus='true'
                  type='text'
                  value={this.state.value}
                  placeholder='Enter an integer value'
                  onChange={this.handleTaxPayerIdChange.bind(this)}
                  onKeyPress={this.handleTaxPayerIdKey.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>
                    The default install of this app includes taxpayer IDs in the range
                    of 1 - 1000.
                </HelpBlock>
              </FormGroup>

              <Button
                bsStyle={'primary'}
                onClick={this.handleSearchClicked.bind(this)}
              >
                  Search
              </Button>
            </form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <Table style={Object.keys(this.state.taxpayer).length === 0 ? {display:'none'} : {diplay: ''}}>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Filing Status</th>
                    <th>Taxable Income</th>
                    <th>Taxes Owed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.taxpayer.id}</td>
                  <td>{this.state.taxpayer.firstname}</td>
                  <td>{this.state.taxpayer.lastname}</td>
                  <td>{this.state.taxpayer.filingStatus}</td>
                  <td>{this.state.taxpayer.taxableIncome}</td>
                  <td>{this.state.taxpayer.taxesOwed}</td>
                </tr>
              </tbody>
            </Table>        
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TaxPayerApp;
