import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// app.post("/failure", function(req, res){
//   res.redirect("/");
// });

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
