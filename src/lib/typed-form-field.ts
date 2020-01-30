import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

export interface TypedFormField<TModel> extends FormlyFieldConfig {
  key?: Extract<keyof TModel, string>;
  hideExpression?: boolean | string | ((model: TModel, formState: any, field?: FormlyFieldConfig) => boolean);
  expressionProperties?: {
    [property: string]: string | ((model: TModel, formState: any, field?: FormlyFieldConfig) => any) | Observable<any>;
  };
}
