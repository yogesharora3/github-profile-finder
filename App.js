//init github
const git = new Github();
//init ui;
const ui = new UI();
//select search field
const searchField = document.querySelector("#searchFiled");
//add event listener
searchField.addEventListener("keyup", (e) => {
  const user = e.target.value;
  let res;
  // console.log(e.target.value);
  if (user !== "") {
    git.Getuser(user).then((res) => {
      console.log(res.data.message == "Not Found");
      if (res.data.message === "Not Found") {
        console.log("not found");
        //showAlert when user not found
        ui.showAlert("User Not Found", "alert alert-primary");
      } else {
        console.log(res.data);
        ui.renderUser(res.data);
        ui.renderRepos(res.repos);
      }
    });
  } else {
    //removeProfile
    ui.clearProfile();
  }
});
