
export type AuthFormProps = {
    label?: string
    id: string,
    inputType: "select" | "input",
    placeholder: string,
    
    name: string,
    type: string
}

export const SIGN_IN_FORM: AuthFormProps[] = [
    {
      id: "1",
      inputType: "input",
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      id: "2",
      inputType: "input",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ]