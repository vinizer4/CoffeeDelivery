import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";

    interface ErrorsType {
        errors: {
            [key: string]: {
                message: string;
            }
        }
    }

export function AdressForm () {
    const { register, formState } = useFormContext();
    const { errors } = formState as unknown as ErrorsType;

    return (
        <AdressFormContainer>
            <Input placeholder="CEP" className="cep" type='number' {...register('cep')} error={ errors.cep?.message } />
            <Input placeholder="Rua" className="street" {...register('street')} error={ errors.street?.message } />
            <Input placeholder="Número" className="number" type='number' {...register('number')} error={ errors.number?.message } />
            <Input placeholder="Complemento" className="complement" {...register('complement')} rightText='Opcional' />
            <Input placeholder="Bairro" className="district" {...register('district')} error={ errors.district?.message } />
            <Input placeholder="Cidade" className="city" {...register('city')} error={ errors.city?.message } />
            <Input placeholder="UF" className="uf" {...register('uf')} error={ errors.uf?.message } />
        </AdressFormContainer>
    )
}