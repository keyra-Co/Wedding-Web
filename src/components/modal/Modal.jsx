/* eslint-disable react/prop-types */
export function Modal({ data }) {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="staticBackdropLabel">
              {data.info}
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="modal__receiver">{data.receiver}</div>
            <div className="modal__tujuan">{data.tujuan}</div>
            <div className="modal__desc">{data.desc}</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              {data.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
