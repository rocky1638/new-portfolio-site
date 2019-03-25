import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

const Blogposts = () => (
  <div>
    <Text block ginormous>Blog</Text>
    <Link to="/blog/thewaterboys">thewaterboys</Link>
  </div>
)

export default Blogposts
