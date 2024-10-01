import {NavLink} from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center">
            <h1 className="text-6xl mb-32 mt-10">OOppss Sorry This page is not found</h1>
            <NavLink to="/">Go To Home</NavLink>
        </div>
    );
};

export default Error;