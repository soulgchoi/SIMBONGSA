import React, { ReactElement } from "react";
import "assets/mycss/components.scss";
interface Props {
  placeholder?: string;
  // disabled : boolean
  action: () => void;
}
interface State { }

export default function ActionButton({
  placeholder,
  action
  // disabled,
}: Props): ReactElement {
  return (
    <div>
      {/* <button className="my--btn" onClick={action} disabled={disabled}> */}
      <button className="my--btn" onClick={action}>
        {placeholder}
      </button>
    </div>
  );
}
