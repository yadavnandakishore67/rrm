import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';

export default function SearchFilter() {
    const [accountName, setAccountName] = useState('');
    const [skill, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {

    }, [accountName, skill, experience, status])
    return (
        <>
            <Card>
                <CardContent>
                    <form className='row'>

                        <div className=" col-md-3 col-sm-3 col-12 form-outline form-white">
                            <TextField
                                className="form-control"
                                required
                                id="outlined-required"
                                label="Account Name"
                                value={accountName}
                                onChange={(event) => setAccountName(event?.target.value)}
                            />
                        </div>
                        <div className=" col-md-3 col-sm-3 col-12 form-outline form-white">
                            <TextField
                                className="form-control"
                                required
                                id="outlined-required"
                                label="Experience"
                                value={experience}
                                onChange={(event) => setExperience(event?.target.value)}
                            />
                        </div>
                        <div className=" col-md-3 col-sm-3 col-12 form-outline form-white">
                            <TextField
                                className="form-control"
                                required
                                id="outlined-required"
                                label="Skills"
                                value={skill}
                                onChange={(event) => setSkills(event?.target.value)}
                            />
                        </div>
                        <div className=" col-md-3 col-sm-3 col-12 form-outline form-white">
                            <TextField
                                className="form-control"
                                required
                                id="outlined-required"
                                label="Status"
                                value={status}
                                onChange={(event) => setStatus(event?.target.value)}
                            />
                        </div>

                    </form>
                </CardContent>
            </Card>
        </>
    )
}