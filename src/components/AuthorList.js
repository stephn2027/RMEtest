import React from 'react'
import Author from './Authors'
export default function AuthorList({authors}) {
    const authorName = authors.map(author=>{
        return <Author key={author.id} {...author}/>
    });
    return (
        <div className="author-list">
        {authorName}
        </div>
    )
}
