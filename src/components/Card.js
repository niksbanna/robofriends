import React from 'react';

export default function Card({ id, name, email, username }) {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img width={200} height={200} src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h4>Name: {name}</h4>
                <p>username: {username}</p>
                <p>email: {email}</p>
            </div>
        </div>
    )
}
