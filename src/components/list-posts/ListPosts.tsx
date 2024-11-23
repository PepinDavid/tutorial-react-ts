import React from 'react';
import { Link } from 'react-router-dom';

function ListPosts({id, title, body, createdOn, user}) {
    function formatDate(date: Date): string {
        if (date)
            return date.toLocaleDateString();

        return '';
    }

    return (
        <>
            <div className="col">
                <div className="card" key={id}>
                    <div className="card-title text-center">
                        <h3>{title}</h3>
                    </div>

                    <div className="card-body">
                        <p className="card-text">
                            {body}
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link className="btn btn-sm btn-outline-secondary" to={`/create-article/${id}`}>Edit</Link>
                            </div>
                            <small className="text-body-secondary">
                                {user} - {formatDate(createdOn)}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListPosts;