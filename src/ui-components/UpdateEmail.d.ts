/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../API.ts";
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
export declare type UpdateEmailInputValues = {
    email?: string;
};
export declare type UpdateEmailValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateEmailOverridesProps = {
    UpdateEmailGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateEmailProps = React.PropsWithChildren<{
    overrides?: UpdateEmailOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UpdateEmailInputValues) => UpdateEmailInputValues;
    onSuccess?: (fields: UpdateEmailInputValues) => void;
    onError?: (fields: UpdateEmailInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateEmailInputValues) => UpdateEmailInputValues;
    onValidate?: UpdateEmailValidationValues;
} & React.CSSProperties>;
export default function UpdateEmail(props: UpdateEmailProps): React.ReactElement;
