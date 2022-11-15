const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulation</h1>
    <div className="congrats-card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="profile-icon"
        />
      </div>

      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-details">
        Vishnu Institute Of Computer Education And Technology, Bhimavaram
      </p>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
