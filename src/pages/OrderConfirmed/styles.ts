import styled from "styled-components";
import { ContainerMain } from "../../layouts/DefaultLayout/style";

export const OrderConfirmedContainer = styled(ContainerMain)`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    @media (max-width: 768px) {
        padding: 1rem;
        > section {
            flex-direction: column;
            img {
                width: 100%;
            }
        }

    }
    `;

export const OrderDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({ theme }) => theme.colors["base-background"]};
    min-width: 32rem;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
        content: '';
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    }

    @media (max-width: 768px) {
        min-width: auto;
        }
`;