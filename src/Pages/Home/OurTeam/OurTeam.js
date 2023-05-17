import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const OurTeam = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-20'>
                <p className='text-2xl text-red-600 font-bold'>Team</p>
                <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex sm: flex-col md:flex-row gap-10 py-20'>
                {
                  persons.map(person => <TeamCard
                  key={person._id}
                  person={person}
                  ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default OurTeam;