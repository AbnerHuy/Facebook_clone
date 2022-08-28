import PropagateLoader from "react-spinners/PropagateLoader";

export default function ActivateForm({ type, loading, header, text }) {
  return (
    <div className="blur">
      <div className="popup">
        import PropagateLoader from "react-spinners/PropagateLoader";
        <div
          className={`popup_header ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <PropagateLoader color="#1876f2" size={30} loading={loading} />
      </div>
    </div>
  );
}
