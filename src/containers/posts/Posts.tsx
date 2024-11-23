import React, { useState, useEffect } from 'react';
import { usePostsService } from '../../services/hooks';

import ListPosts from '../../components/list-posts/ListPosts';
import { IPost } from '../../services/postsApiService';

function Posts() {
    const postsService = usePostsService();
    const [posts, setPosts] = useState<IPost[]>([]);
    
    useEffect(()=> {
        postsService.getAll().then((data: IPost[]) => {
            data = data.map(d => ({...d, createdOn: d.created_on}));

            setPosts(data);
        });
    }, [postsService])

    return(
        <>
            <ul>
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
            </ul>
        </>
    )
}

export default Posts;
