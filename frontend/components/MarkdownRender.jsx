import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownRender = ({content}) => {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  )
}

export default MarkdownRender