import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LogTitle } from "../log/LogTitle";

export const AppUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isActive" source="isActive" />
        <ReferenceArrayInput
          source="logs"
          reference="Log"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LogTitle} />
        </ReferenceArrayInput>
        <TextInput label="password" source="password" />
        <TextInput label="token" multiline source="token" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
