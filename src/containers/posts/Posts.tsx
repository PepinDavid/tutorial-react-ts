import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { usePostsService } from '../../services/hooks';

import ListPosts from '../../components/list-posts/ListPosts';
import { IPost } from '../../services/postsApiService';

function Posts() {
    const postsService = usePostsService();
    const [posts, setPosts] = useState<IPost[]>([]);
    
    useEffect(() => {
        postsService.getAll().then((data: IPost[]) => {
            data = data.map(d => ({...d, createdOn: d.created_on ? new Date(d.created_on) : undefined}));

            setPosts(data);
        });
    }, [postsService]);

    return(
        <>

        <div className="py-2">
            <div className="row">
                <Link className="btn btn-primary" to="/create-article">Create article</Link>
            </div>
        </div>

        <div className="py-2">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">   
                {
                    posts.map((post) =>
                        <ListPosts
                            key={post.id}
                            id={post.id}
                            body={post.body}
                            createdOn={post.createdOn}
                            title={post.title}
                            user={post.user}
                        />
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Posts;
