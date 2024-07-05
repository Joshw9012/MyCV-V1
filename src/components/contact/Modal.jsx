const Modal = ({ setShowModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "0.75rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Message sent 👌</h1>
        <button
          className="button"
          onClick={() => setShowModal(false)}
          style={{
            marginTop: "20px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
