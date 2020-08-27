import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name,instructor,email,price,img} = props.course;
    return (
        <div className='course_part'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 course_image">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col-md-9 course_description align-items-center">
                        <h4>Course Name: {name}</h4>
                        <h6>Instructor Name: {instructor}</h6>
                        
                        <h5>Price: {price}$</h5>
                        <button type="button" className="btn btn-success" onClick= { () => props.handleAddButton(props.course)}>Enroll Now</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;