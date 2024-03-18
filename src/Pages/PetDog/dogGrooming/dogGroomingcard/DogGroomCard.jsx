import React from 'react'
import './doggroomcard.css'

function DogGroomCard({ grooming }) {
    return (
        <div className='groom'>
            <div className="card ">
                <div className="card-header">
                    {grooming.petgroomingpackage}
                </div>
                <div className="card-body">
                    <h5>GroomingSesssion</h5>
                    <div>{grooming.GroomingSesssion.map((session, index) => (
                        <li key={index}>{session}</li>
                    ))}</div>

                    <div>{grooming.Duration}</div>
                    <div>{grooming.ServiceCharge}. rs</div>


                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

export default DogGroomCard
