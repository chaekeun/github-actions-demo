function Modal(props) {
  return (
    <div>
      This is Modal<p>{props.title[props.titleNum]}</p>
    </div>
  );
}

export default Modal;
