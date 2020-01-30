import { TypedFormField } from './typed-form-field';

export const typedFormlyFields = <TModel>(fields: TypedFormField<TModel>[]): TypedFormField<TModel>[] => fields;
export const typedFormlyField = <TModel>(field: TypedFormField<TModel>): TypedFormField<TModel> => field;
