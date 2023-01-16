import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;

  return (
    <ul className={classes.comments}>
      {items?.map((item) => (
        <li key={item._id}>
          <p>{item.email}</p>
          <p>{item.walletAddress}</p>
          <p>{item.phone}</p>
          <p>{item.name}</p>
          <p>{item.source}</p>
          <p>{item.token}</p>
          {/* <div>
            By <address>{item.name}</address>
          </div> */}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
