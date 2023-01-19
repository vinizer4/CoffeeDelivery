import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer, CompleteOrderContent } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import * as zod from 'zod';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit= 'credit',
    debit= 'debit',
    money= 'money',
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP'),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número'),
    district: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe seu UF'),

    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: 'Informe o método de pagamento' };
        }
    })
})
    export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
    type ConfirmOrderFormData = OrderData;

export function CompleteOrder () {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    });
    const { handleSubmit } = confirmOrderForm;
    const navigate = useNavigate();
    const { cleanCart } = useCart();

    function handleConfirmOrder (data: ConfirmOrderFormData) {
        navigate('/orderconfirmed', {
            state: data,
        });
        cleanCart();
        
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer>
                <CompleteOrderContent onSubmit={ handleSubmit(handleConfirmOrder) }>
                    <CompleteOrderForm />
                    <SelectedCoffees />
                </CompleteOrderContent>
            </CompleteOrderContainer>
        </FormProvider>
    )
}