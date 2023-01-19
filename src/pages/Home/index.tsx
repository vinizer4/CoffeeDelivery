import { useCart } from "../../hooks/useCart";
import { Intro } from "./components/Intro/Intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage () {

    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}