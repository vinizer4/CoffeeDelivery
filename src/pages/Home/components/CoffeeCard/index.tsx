import { ShoppingCart } from "phosphor-react";
import React from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

    export interface Coffee {
        id: number;
        tags: string[];
        name: string;
        description: string;
        photo: string;
        price: number;
    }

    interface CoffeeProps {
        coffee: Coffee;
    }

export function CoffeeCard ( {coffee}:CoffeeProps ) {
    const [quantity,setQuantity] = React.useState(1);
    const { AddCoffeeToCart } = useCart();

    function handleIncrease () {
        setQuantity(state => state + 1);
    }
    function handleDecrease () {
        setQuantity(state => state - 1);
    }
    function handleAddToCart () {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        AddCoffeeToCart(coffeeToAdd);
    }

    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map(tag => {
                    return (
                        <span key={`${coffee.id}${tag}`}>{tag}</span>
                    )
                })}
            </Tags>

            <Name>
                {coffee.name}
            </Name>
            <Description>
                {coffee.description}
            </Description>
            <CardFooter>
                <div>
                    <RegularText size='s'>R$</RegularText>
                    <TitleText size='m' color='text' as='strong'>{formattedPrice}</TitleText>
                </div>
                <AddCardWrapper>
                    <QuantityInput 
                        onIncrease={ handleIncrease }
                        onDecrease={ handleDecrease }
                        quantity={ quantity }
                    />
                    <button onClick={ handleAddToCart }>
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </AddCardWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}