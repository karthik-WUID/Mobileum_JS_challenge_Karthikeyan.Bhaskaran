import React, { useContext, useState } from "react";
import {
  CreateSmartPhoneFormContainer,
  Heading,
  FormContainer,
  FormRow,
  ErrorContainer,
  SubmitButton,
  SuccessContainer,
} from "./styles";
import { API } from "../../Providers/api";
import {
  GlobalContext,
  GlobalContextType,
} from "../../Providers/global-provider";

const CreateSmartPhoneForm: React.FC = () => {
  const { setSmartPhoneData } = useContext(GlobalContext) as GlobalContextType;
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<any>({
    name: "",
    brand: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    brand: "",
    image: "",
    description: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors: any = {};
    let isValid = true;

    for (let key in formData) {
      if (!formData[key]) {
        isValid = false;
        formErrors[key] = `${key} field is required`;
      }
    }
    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      API.add(
        formData.name,
        formData.brand,
        formData.image,
        formData.description
      )
        .then((response: any) => {
          setSmartPhoneData(response);
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log("error - - - - - ", error);
        });
    }
  };

  return (
    <CreateSmartPhoneFormContainer>
      <Heading>Create Smartphone</Heading>
      {!isSuccess && (
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormRow>
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />

              <ErrorContainer>
                {errors.image && <span>{errors.image}</span>}
              </ErrorContainer>
            </FormRow>
            <FormRow>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <ErrorContainer>
                {errors.name && <span>{errors.name}</span>}
              </ErrorContainer>
            </FormRow>
            <FormRow>
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
              <ErrorContainer>
                {errors.brand && <span>{errors.brand}</span>}
              </ErrorContainer>
            </FormRow>
            <FormRow>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <ErrorContainer>
                {errors.description && <span>{errors.description}</span>}
              </ErrorContainer>
            </FormRow>
            <SubmitButton>
              <button type="submit">Submit</button>
            </SubmitButton>
          </form>
        </FormContainer>
      )}
      {isSuccess && (
        <SuccessContainer>SmartPhone added successfully</SuccessContainer>
      )}
    </CreateSmartPhoneFormContainer>
  );
};

export default CreateSmartPhoneForm;
