/* eslint-disable react/prop-types */
export default function Modal({ data }) {
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
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-4 fw-bold" id="staticBackdropLabel">
              {data.info}
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="modal__receiver fw-bolder fs-5">{data.receiver}</div>
            <div className="modal__tujuan fs-6">{data.tujuan}</div>
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
