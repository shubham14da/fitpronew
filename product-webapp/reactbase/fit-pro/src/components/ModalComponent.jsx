//  import { Modal } from "react-bootstrap";
//  import React from "react";

//  const ModalComponent = (props) => {
//    const { title, show, setShow, children } = props;
//    const customStyles = {
//      overlay: {
     
//       backgroundColor: "#0d6efd",
//     },
//     content: {
//       top: "50%",
//        left: "50%",
//        right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//        transform: "translate(-50%, -50%)",
//      },
//    };
//    return (
//     <Modal
//       style={customStyles}
//        size="lg"
//        show={show}
//        centered
//        onBackdropClick={() => setShow(!show)}
//      >
//        <Modal.Body>
//          <h4 className="text-center">{title}</h4>
//          <div style={{ maxHeight: "60vh", overflowY: "auto" }}>{children}</div>
//        </Modal.Body>

//       <div style={{ position: "absolute", top: 10, right: 10 }}>
//          <button
//            type="button"
//            class="btn-close"
//            aria-label="Close"  
//                     // onClick={() => setShow(!show)}
//           onClick={() => props.navigate("/")}
//         ></button>
//        </div>
//     </Modal>
//    );
//  };

//  export default ModalComponent;

import { Modal } from "react-bootstrap";
import React from "react";

const ModalComponent = (props) => {
  const { title, show, setShow, children } = props;
  const customStyles = {
    overlay: {
      backgroundColor: "#fff",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      style={customStyles}
      size="lg"
      show={show}
      centered
      onBackdropClick={() => setShow(!show)}
    >
      <Modal.Body>
        <h4 className="text-center">{title}</h4>
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>{children}</div>
      </Modal.Body>

      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => props.navigate("/")}
        ></button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
