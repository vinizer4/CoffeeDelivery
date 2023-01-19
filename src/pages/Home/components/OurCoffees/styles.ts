import styled from "styled-components";
import { ContainerMain } from "../../../../layouts/DefaultLayout/style";

export const OurCoffeesContainer = styled(ContainerMain)`
    @media (max-width: 768px) {
      margin-top: 9rem;
      padding: 1rem;
    }
`;

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;