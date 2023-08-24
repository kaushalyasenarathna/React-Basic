import React from 'react';

const Layouts = ({ children }) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-8 col-lg-10 mt-5 mb-5">
        <div className="card mt-  ">
          <div className="card-body mt-4 mb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layouts;
