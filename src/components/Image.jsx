import React from 'react'
import styled from 'styled-components'

const StyledImage= styled.img`
  width: ${props => props.tall ? "" : "100%"};
  height: ${props => props.tall ? "100%" : ""};
  margin-top: 20px;

  @media only screen and (max-width: 767px) {
    width: ${props => props.tall ? "" : "100vw"};
    margin-left: ${props => props.tall ? "" : "-20px"};
  }
`

const Button = ({ src, alt, children, ...otherProps }) => (
  <div>
    <StyledImage {...otherProps} src={src} alt={alt}/> 
  </div>
)

export default Button
