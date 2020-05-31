class UI {
  constructor() {
    this.profile = document.querySelector(".profile");
  }
  renderUser(profile) {
    console.log(profile);
    let d1 = new Date(profile.created_at);
    let str1 = d1.getDay() + "/" + d1.getMonth() + "/" + d1.getFullYear();

    let markup = `<div class="container">
    <div class="row  mx-lg-n5">
      <div class="col py-3 px-lg-5 border bg-light"><div class="card" style="width: 18rem;">
      <img src=${profile.avatar_url} class="card-img-top" alt="profile picture">
      <div class="card-body">
        <p class="card-text text-center">Name:${profile.name}</p>
        <div class="text-center"><a href="${profile.html_url}" class="btn btn-primary  btn-lg active" role="button" aria-pressed="true">View Profile</a> </div>     
      </div>
    </div></div>
      <div class="col py-3 px-lg-5 border bg-light"><ul class="list-group" style="margin-top:10%">
      <li class="list-group-item">BIO:${profile.bio}</li>
      <li class="list-group-item">Email:${profile.email}</li>
      <li class="list-group-item">Location:${profile.location}</li>
      <li class="list-group-item">Followers:${profile.followers}</li>
      <li class="list-group-item">Following:${profile.following}</li>
      <li class="list-group-item">Public Repos:${profile.public_repos}</li>
      <li class="list-group-item">Created At:${str1}</li>
    </ul></div>
    </div>`;
    // console.log(this.profile.value);
    this.profile.innerHTML = markup;
  }
  clearAlert() {
    let alert = document.querySelector(".alert");

    if (alert) {
      alert.remove();
    }
  }
  showAlert = (message, className1) => {
    let div1;
    //clear previous alert
    this.clearAlert();
    //create Element
    div1 = document.createElement("div");
    //create element
    div1.className = className1;
    //add message
    div1.appendChild(document.createTextNode(message));
    //adding to html page
    let profileContainer = document.querySelector(".profileContainer");
    profileContainer.insertBefore(div1, this.profile);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  };
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
