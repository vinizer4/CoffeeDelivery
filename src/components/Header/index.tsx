import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderButton, HeaderButtonContainer, HeaderContainer, NavContainer } from './styles';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export function Header () {
    const { cartQuantity } = useCart();

    return (
        <HeaderContainer>
            <NavContainer>
                <NavLink to={'/'}>
                    <img src={ coffeeLogoImg } />
                </NavLink>

                <HeaderButtonContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} weight='fill' />
                        Fortaleza, CE
                    </HeaderButton>
                    <NavLink to={'/completeorder'}>
                        <HeaderButton variant='yellow'>
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight='fill' />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </NavContainer>
        </HeaderContainer>
    )
}