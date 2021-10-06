import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

const Header = () => {
   const [{basket,user},dispatch] = useStateValue();

   const handleAuthentication = () => {
    if(user) {
        auth.signOut();
    }
   }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                className='header__logo'
                src="https://www.nicepng.com/png/full/16-167642_amazon-logo-png.png"/>
            </Link>
            
            <Link to='/'>
                    <span><LocationOnIcon/></span>
                    <div className='header__option'>
                    <span 
                        className="header__optionLineOne"
                        >Deliver to</span>
                        <span
                        className='header__optionLineTwo'
                        >Bangladesh</span>
                    </div>
            </Link>

            <div className='header__search'>
                <input 
                className='header__searchInput'
                type='text'
                />
                <SearchIcon 
                className='header__searchIcon'
                />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                    
                        <span 
                        className="header__optionLineOne"
                        >Hello {user?user.email: 'Guest'}</span>
                        
                        <span
                        className='header__optionLineTwo'
                        >{user?'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='header__option'>
                    <span 
                        className="header__optionLineOne"
                        >Returns</span>
                        <span
                        className='header__optionLineTwo'
                        >Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span 
                    className="header__optionLineOne"
                    >Your</span>
                    <span
                    className='header__optionLineTwo'
                    >Prime</span>
                </div>
            </div>
            <Link to='/checkout'>
                <div 
                className='header__optionBasket'
                >
                    <ShoppingBasketIcon/>
                    <span
                    className='header__optionLineTwo header__basketCount'
                    >{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;
