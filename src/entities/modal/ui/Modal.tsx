import '../model/style.scss';

function Modal() {
  return (
    <article className="
    modal rounded p-10
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-6xl text-success">Success</h1>
    </article>

  );
}

export default Modal;
