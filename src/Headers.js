import React from 'react';
import { Link } from 'react-router-dom';
function NavigationBar() {
    return (
        <div>
        <Link to ="/Generating" className="btn btn-primary">Generate</Link>;
        </div>
    );
};
export default NavigationBar;