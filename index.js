const Button = (props) => {
  const { className, text } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  <div className="bgContainer">
    <div className="cardContainer">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonsContainer">
        <Button className="likeButton" text="Like" />
        <Button className="commentButton" text="Comment" />
        <Button className="shareButton" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
