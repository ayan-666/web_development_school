import React,{useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData/fakeData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first_15_course = fakeData.slice(0,15);
    const [courses,setCourses] = useState(first_15_course);
    const [cart,setCart] = useState([]);
    const handleAddButton = (course) =>{
        console.log('Course Enrolled',course);
        const newCart = [...cart,course]
        setCart(newCart);
    }
    return (
        <div className='shop_part'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                    <div className="col-md-9 shop-container">
                        {courses.map( course => <Course course={course} handleAddButton={handleAddButton}></Course>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;