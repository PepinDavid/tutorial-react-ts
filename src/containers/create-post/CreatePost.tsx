import React, { useState, useEffect } from 'react';

import { usePostsService } from '../../services/hooks';
import { IPost } from '../../services/postsApiService';

function CreatePost() {
    const [inputs, setInputs] = useState<IPost>({});
    const postsService = usePostsService();

    function onChange(event) {
        const {name, value} = event.target;

        if (name && value)
            setInputs((previousValue) => ({...previousValue, [name]: value}))
    }

    function onSubmit(event) {
        event.preventDefault();

        console.log(inputs);
        
        postsService.create(inputs)
        .then(data => {
            console.log(data)
        });
    }

    return (
        <>
            <form className="row" onSubmit={onSubmit}>
                <div className="col-12">
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input id="title" name="title" className='form-control' type="text" value={inputs.title} onChange={(e) => onChange(e)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="body" className='form-label'>Body</label>
                    <textarea id="body" name="body" className='form-control-lg' value={inputs.body} onChange={(e) => onChange(e)}></textarea>
                </div>
                <div>
                    <input className='btn btn-primary' type='submit' value="Send"/>
                </div>
            </form>
        </>
    )
}

export default CreatePost;