/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Sponsor } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorUpdateFormInputValues = {
    name?: string;
};
export declare type SponsorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorUpdateFormOverridesProps = {
    SponsorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SponsorUpdateFormProps = React.PropsWithChildren<{
    overrides?: SponsorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sponsor?: Sponsor;
    onSubmit?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onSuccess?: (fields: SponsorUpdateFormInputValues) => void;
    onError?: (fields: SponsorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onValidate?: SponsorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorUpdateForm(props: SponsorUpdateFormProps): React.ReactElement;
