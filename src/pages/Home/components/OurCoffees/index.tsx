import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees () {
    return (
        <OurCoffeesContainer>
            <TitleText size='l' color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeeList>
                {coffees.map(coffee => {
                    return (
                        <CoffeeCard
                            key={ coffee.id }
                            coffee={ coffee }
                        />
                    )
                })}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}