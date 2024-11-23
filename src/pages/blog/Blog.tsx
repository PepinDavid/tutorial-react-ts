import React from 'react';

import Posts from '../../containers/posts/Posts';

function Blog()  {
    return (
        <>
        <div>
            <h3>Welcome to posts blog</h3>
        </div>
        <div className="album py-5 bg-body-tertiary">
            <Posts />
        </div>
        </>
    )
}

export default Blog;