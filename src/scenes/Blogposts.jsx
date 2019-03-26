import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

const Blogposts = () => (
  <div>
    <Text block ginormous>Blog</Text>
    <Link to="/blog/thewaterboys">thewaterboys</Link>
    <Link to="/blog/consensys1">consensys1</Link>
  </div>
)

export default Blogposts
