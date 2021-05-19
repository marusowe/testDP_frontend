import React, {useEffect, useState} from 'react';


export const ListUrls = ({urls, deleteUrl}) => {

    const Card = ({fullUrl, shortUrl, hash}) => (
        <div className="card mb-2" style={{minHeight: '5rem'}}>
            <div className="card-body">
                <div className='row'>
                    <div className="col text-truncate">
                        <h5 className="card-title"><a href={shortUrl}>{shortUrl}</a></h5>
                        <p>{fullUrl}</p>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                        <i
                            className="fas fa-trash-alt"
                            style={{fontSize: '1.5rem', color: "red", cursor: 'pointer'}}
                            onClick={() => deleteUrl(hash)}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='mt-3'>
            {
                urls.map((url, idx) => (
                    <div className="col" key={idx}>
                        <Card
                            fullUrl={url.full_url}
                            shortUrl={url.short_url}
                            hash={url.hash}
                            key={idx}
                        />
                    </div>
                ))
            }
        </div>

    )
}