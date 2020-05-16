import App, { Container } from 'next/app';

import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        {/* Page wrapping around the Component can share store/state for all Component */}
        <Page>
          <Component />
          {/* Component will either be index.js or sell.js */}
        </Page>
      </Container>
    );
  }
}

export default MyApp;
