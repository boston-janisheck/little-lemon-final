import React from 'react';
import menuItem from '../menuItem';
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder = (id) => {
      console.log(id);
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Are you sure you want to confirm your order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Place order',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Order placed!',
            'Your order has been confirmed.',
            'success'
          );
        }
      });
    };

    return (
      <div className="menu-container">
        <div className="menu-header">
          <h2>Familiar Favourites</h2>
          <button>Our Menu</button>
        </div>
        <div className="cards">
          {menuItem.map((menuItem) => (
            <div key={menuItem.id} className="menu-items">
              <img src={menuItem.image} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h3>{menuItem.title}</h3>
                  <p>${menuItem.price}</p>
                </div>
                <p>{menuItem.description}</p>
                <button className="orderbtn" onClick={() => handleOrder(menuItem.id)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Menu;