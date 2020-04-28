import React from 'react'
import logo from 'assets/images/logo.svg'
import StyledApp from './styled-app'
import StyledHeader from './styled-header'
import StyledLogo from './styled-logo'
import Counter from '../counter'

export const App: React.FC = () => (
  <StyledApp className="App">
    <StyledHeader className="App-header">
      <StyledLogo
        src={logo}
        className="App-logo"
        alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/app/index.tsx</code>
        {' '}
        and save to reload.
      </p>
      <Counter />
    </StyledHeader>
  </StyledApp>
)

export default App
