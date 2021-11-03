/**
 * FilteredTextInput:
 * It will work like default IonInput if there isn't given regExp property
 * It will work like default IonInput if there is given onIonChange property
 * It will work with value, setValue, regExp when they are all given.
 * value is used as IonInput's value and setValue change the value,
 * It will have  same value if not return true from given regExp.
 * It will change the value if suffice given regExp.
 */
import React, {ReactElement} from "react";
import {IonInput} from '@ionic/react';
import {Color, InputChangeEventDetail, TextFieldTypes} from '@ionic/core';

// can not use "interface IProps extends JSX.IonInput {}" because there is more complex combination with HTML DOM.
// IonInput properties:
// accept, autocapitalize, autocorrect, autofocus, clearInput, clearOnEdit, color, debounce, disabled,
// enterkeyhint, inputmode, max, min, maxlength, minlength, mode, multiple, name, pattern, placeholder,
// readonly, required, size, spellcheck, step, value
// IonInput pattern property is already exist but it only works when submitting.
type IProps = {
  type?: TextFieldTypes;
  value: string | number | null;
  setValue: (value: string) => void;
  regExp?: RegExp;
  className?: string;
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  // The name of the control, which is submitted with the form data.
  name?: string;
  autofocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  color?: Color;
  // The maximum value, which must not be less than its minimum (min attribute) value.
  max?: string;
  min?: string;
  // If the value of the type attribute is text, email, search, password, tel, or url,
  // this attribute specifies the number of characters that the user can enter.
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  // The initial size of the control. This value is in pixels unless the value of the type attribute is
  // "text" or "password", in which case it is an integer number of characters. This attribute
  // applies only when the type attribute is set to "text", "search", "tel", "url", "email", or
  // "password", otherwise it is ignored.
  size?: number;
  // Emitted when the input loses focus.
  "onIonBlur"?: (event: CustomEvent<FocusEvent>) => void;
  // Emitted when the value has changed.
  "onIonChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
  // Emitted when the input has focus.
  "onIonFocus"?: (event: CustomEvent<FocusEvent>) => void;
  // Emitted when a keyboard input occurred.
  "onIonInput"?: (event: CustomEvent<KeyboardEvent>) => void;
};

function FilteredTextInput({...props}: IProps): ReactElement {
  // return <IonInput pattern="[a-zA-Z0-9\- '+.\$\#]{1,65}" />;
  const {regExp, onIonChange, value, setValue} = props;

  let onIonChangeFiltering;
  if (regExp && !onIonChange) {
    onIonChangeFiltering = (event: CustomEvent<InputChangeEventDetail>) => {
      const newValue = event.detail.value as string;
      const pastValue = value as string;
      if(regExp.test(newValue)) {
        setValue("");
        setValue(newValue);
      } else {
        if (!pastValue) {
          setValue("-");
          setValue("");
        } else {
          setValue("");
          setValue(value as string);
        }
      }
    }
  }
  return <IonInput {...props} debounce={50} value={value} onIonChange={onIonChangeFiltering ? onIonChangeFiltering : onIonChange} />;
}

export default React.memo(FilteredTextInput);
