import decorate from 'utils/decorate'


function Legend(props) {
  return (
    <>
      <p className="card-text">
        <small className="text-muted">{decorate(new Date() - new Date(props.createdAt))}</small>
      </p>
    </>
  );
}


export default Legend;