import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-family: ${props => props.book ? 'Circular Std Book' : 'Circular Std'};
  font-size: ${props => props.ginormous 
    ? '80px' : props.huge 
      ? '60px': props.header
        ? '20px' : props.big
          ? '32px' : props.small
            ? '16px' : '20px'};
  font-weight: ${props => props.fontWeight 
    ? props.fontWeight : props.bold
      ? 'bold' : 400};
  display: ${props => props.block ? 'block' : ''};
  color: ${props => props.gray4 
    ? props.theme.gray4 : props.gray5
      ? props.theme.gray5 : props.gray8
        ? props.theme.gray8 : props.theme.black};

  @media only screen and  (max-width: 767px) {
    font-size: ${props => props.ginormous 
      ? '40px' : props.huge 
        ? '30px' : props.header
          ? '18px' : props.big
            ? '18px' : props.small
              ? '14px' : '16px'};
  };
`

const Text = ({ children, ...otherProps }) => (
  <StyledText {...otherProps}>{children}</StyledText>
)

export default Text
