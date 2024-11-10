import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const EmptyQuestionMessage = (props) => {
  return (
    <div>
      <div
        className="mt-5 alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>OOPS!</strong> NO questions found with the tag {props.tag}.
        Please select another option from the list.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default EmptyQuestionMessage;
