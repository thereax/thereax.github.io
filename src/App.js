import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Layout, Icon, Button, Row, Col, Modal } from 'antd';
import { BrowserView, MobileView } from 'react-device-detect';
import BottomScrollListener from 'react-bottom-scroll-listener';
import NoDollarsAccepted from './components/noDollarsAccepted';
import ReapForm from './components/ReapForm';

import './App.css';

const { Content, Footer } = Layout;

class App extends Component {
  state = { showModal: false };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  onSuccess = () => {
    this.setState({
      showModal: false,
    });
  }

  onFailure = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const fundStyle = {
      fontSize: '125px',
      color: 'black',
    };

    return (
      <Layout className="layout">
        <Content className="content">
          <div className="header">
            <div className="gradients">
            </div>
          </div>
          <Row type="flex" justify="center">
            <div className="intro">
              <h1>Take the guess work out of your real estate investment purchase</h1>
              <p>Quickly validate location application and discover new areas to invest.</p>

              <Modal
                title="Basic Modal"
                visible={this.state.showModal}
                onOk={this.onSuccess}
                onCancel={this.onFailure}
              >
                <ReapForm />
              </Modal>

              <Button
                className="signup_button"
                type="primary"
                onClick={this.showModal}
              >
                Sign Up
              </Button>
            </div>
          </Row>
          <div className="offering">
            <MobileView>
              <div className="card">
                <Zoom>
                  <Icon type="safety" theme="outlined" style={fundStyle}/>
                  <h3>Eliminate Uncertainty</h3>
                </Zoom>
                <Fade delay={500}>
                  <p>REAP analyzes locations across the US and uncovers top performing and quickly appreciating real estate markets.</p>
                </Fade>
              </div>
              <div className="card">
                <Zoom>
                  <Icon type="area-chart" theme="outlined" style={fundStyle}/>
                  <h3>Measure which areas are appreciating</h3>
                </Zoom>
                <Fade delay={500}>
                  <p>View and create real estate property indexes. Chart property values over time. Identify the most fitting areas for your investment.</p>
                </Fade>
              </div>
              <div className="card">
                <Zoom>
                  <Icon component={NoDollarsAccepted} style={fundStyle}/>
                  <h3>Free</h3>
                </Zoom>
                <Fade delay={500}>
                  <p>REAP is a free tool intended to assist you in crafting the best possible invesment strategy.</p>
                </Fade>
              </div>
            </MobileView>
            <BrowserView>
              <Row>
                <Col span={8}>
                  <div className="card">
                    <Zoom>
                      <Icon type="safety" theme="outlined" style={fundStyle}/>
                      <h3>Eliminate Uncertainty</h3>
                    </Zoom>
                    <Fade delay={500}>
                      <p>REAP analyzes locations across the US and uncovers top performing and quickly appreciating real estate markets.</p>
                    </Fade>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="card">
                    <Zoom>
                      <Icon type="area-chart" theme="outlined" style={fundStyle}/>
                      <h3>Measure which areas are appreciating</h3>
                    </Zoom>
                    <Fade delay={500}>
                      <p>View and create real estate property indexes. Chart property values over time. Identify the most fitting areas for your investment.</p>
                    </Fade>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="card">
                    <Zoom>
                      <Icon component={NoDollarsAccepted} style={fundStyle}/>
                      <h3>Free</h3>
                    </Zoom>
                    <Fade delay={500}>
                      <p>REAP is a free tool intended to assist you in crafting the best possible invesment strategy.</p>
                    </Fade>
                  </div>
                </Col>
              </Row>
            </BrowserView>
          </div>
        </Content>
        <Footer className="footer">
        </Footer>
        <BottomScrollListener onBottom={this.showModal} />
      </Layout>
    );
  }
}

export default App;
