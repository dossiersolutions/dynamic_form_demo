import React from 'react';

function FieldEditPopup(props) {

  const changeAction = (event) => {
    props.changeFieldAction(props.fieldIndex, event.target.name, event.target.value);
  };

  const {
    field,
    fieldIndex
  } = {...props};

  const title = field && field.title ? field.title : '';
  const type = field && field.type ? field.type : '';
  const placeholder = field && field.placeholder ? field.placeholder : '';
  const defaultValue = field && field.defaultValue ? field.defaultValue : '';

  return <div>
    <form onSubmit={(event) => props.onSubmitEditField(event)}>

      <input
          type="hidden"
          className="form-control"
          id="fieldIndex"
          name="fieldIndex"
          defaultValue={fieldIndex !== undefined ? parseInt(fieldIndex) : -1}
      />

      <div className="form-group required">
        <label className="control-label" htmlFor="title"><strong>Field title</strong></label>
        <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            defaultValue={title}
            placeholder="Enter field title..."
            required
            onChange={changeAction}
        />
      </div>

      <div className="form-group required">
        <label className="control-label" htmlFor="fieldType">
          <strong>Field title</strong>
        </label>
        <select
            className="form-control"
            id="type"
            name="type"
            defaultValue={type}
            disabled={fieldIndex !== -1}
            onChange={changeAction}
        >
          <option value=''>--</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="radio">Radio</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>

      <div className={['text', 'email', 'textarea'].indexOf(type) !== -1 ? 'form-group' : 'form-group d-none'}>
        <label className="control-label" htmlFor="placeholder"><strong>Placeholder</strong></label>
        <input
            type="text"
            className="form-control"
            id="placeholder"
            name="placeholder"
            defaultValue={placeholder}
            placeholder="Enter field placeholder..."
            onChange={changeAction}
        />
      </div>

      <div className={['text', 'email', 'textarea'].indexOf(type) !== -1 ? 'form-group' : 'form-group d-none'}>
        <label className="control-label" htmlFor="defaultValue"><strong>Default value</strong></label>
        <input
            type="text"
            className="form-control"
            id="defaultValue"
            name="defaultValue"
            defaultValue={defaultValue}
            placeholder="Enter field default value..."
            onChange={changeAction}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-success">Save</button>
      </div>

    </form>
  </div>;
}

export default FieldEditPopup;