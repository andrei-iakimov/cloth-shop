import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import crownUrl from '../../assets/crown.svg';
import CardIcon from '../../assets/shopping-bag.svg';

import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const singOutHandler = async () => {
    const res = await signOutUser();
    if(res === undefined){
      console.log('Sign out successful');
    }
  }
  console.log(isCartOpen)
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={crownUrl} alt="Crown" />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (<span className='nav-link' onClick={singOutHandler}>SIGN OUT</span>) : (<Link className='nav-link' to='/sign-in'>SIGN IN</Link>)
          }
          <CartIcon className='cart-icon' />

        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;