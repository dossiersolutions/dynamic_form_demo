import React from 'react';

const TextField = (props) => {

  const {
    fieldId,
    fieldName,
    fieldTitle,
    fieldReadOnly,
    fieldDisabled,
    fieldPlaceholder
  } = {...props};

  return <React.Fragment>
    <label className="control-label" htmlFor={fieldId}><strong>{fieldTitle}</strong></label>
    <input
        type="text"
        className="form-control"
        placeholder={fieldPlaceholder}
        id={fieldId}
        name={fieldName}
        readOnly={fieldReadOnly}
        disabled={fieldDisabled}
    />
  </React.Fragment>;

};

export default TextField;