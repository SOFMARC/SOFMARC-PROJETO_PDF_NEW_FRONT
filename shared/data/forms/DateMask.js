import React, { Fragment } from "react";
import MaskInput from "react-maskinput";
export function DateMask() {
    const [mask, setMask] = React.useState("00.00.0000");
    const [maskString, setMaskString] = React.useState("DD.MM.YYYY");
    const onChange = (e) => {
      if (parseInt(e.target.value[6], 10) > 2) {
        setMaskString("DD.MM.YY");
        setMask("00.00.00");
      } else {
        setMaskString("DD.MM.YYYY");
        setMask("00.00.0000");
      }
    };
    return (
      <Fragment>
        <MaskInput
          className="form-control"
          alwaysShowMask
          onChange={onChange}
          maskString={maskString}
          mask={mask}
          size={40}
        />
      </Fragment>
    );
    // DateMask-end
  }