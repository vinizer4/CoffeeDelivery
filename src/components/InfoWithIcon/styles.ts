import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface IconContainerProps {
    iconBg: string;
}

export const IconContainer = styled.div<IconContainerProps>`
    padding: 0.5rem;
    border-radius: 50%;

    background: ${ ({iconBg} ) => iconBg};
    color: ${ ({theme} ) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 0.4rem;
    }
`;