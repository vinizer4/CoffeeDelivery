import styled from "styled-components";
import { ContainerMain } from "../../layouts/DefaultLayout/style";

export const CompleteOrderContainer = styled(ContainerMain)`
`;

export const CompleteOrderContent = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${( {theme} ) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;

    @media (max-width: 768px) {
        padding: 2.5rem 0.5rem;
    }
`;