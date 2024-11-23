import React from 'react';

function ListPosts({id, title, body, createdOn, user}) {
    return (
        <>
            <li key={id}>
                <div>
                    {title}
                </div>
                <div>
                    {body}
                </div>
                <div>
                    {user} - {createdOn.toString()}
                </div>
            </li>
        </>
    )
}

export default ListPosts;