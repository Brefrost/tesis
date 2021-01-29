import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fontColor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 3px;
`

Button.defaultProps = {
  theme: {
    bg: 'white',
    fontColor: 'black'
  }
}

export default Button