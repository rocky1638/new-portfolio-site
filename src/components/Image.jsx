import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'

const StyledImage= styled(LazyLoadImage)`
  width: ${props => props.tall ? "" : "100%"};
  height: ${props => props.tall ? "100%" : ""};
  margin-top: ${props => props.noMargin ? "0px" : "20px"};

  @media only screen and (max-width: 768px) {
    width: ${props => props.tall ? "" : "100vw"};
    margin-left: ${props => props.noMargin ? "0" : props.odd ? "" : "-20px"};
    margin-right: ${props => props.noMargin ? "0" : props.odd ? "-20px" : ""};
  }
`

const Image = ({ src, alt, children, ...otherProps }) => (
  <div style={{ height: "100%" }}>
    <StyledImage {...otherProps} src={src} alt={alt}/> 
  </div>
)

export default Image
