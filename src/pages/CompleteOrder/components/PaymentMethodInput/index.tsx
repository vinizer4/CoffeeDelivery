import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";

    type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
        icon: ReactNode;
        label: string;
    }

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }: PaymentMethodInputProps,ref) => {
    return (
        <PaymentMethodInputContainer>
            <input id={id} type='radio' {...props} name='paymentMethod' ref={ref} />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodInputContainer>
    )
})