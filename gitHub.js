class Github {
  constructor() {
    this.id = "4e2a1e83a07249a90ff3";
    this.key = "cd190d38daac841143464c0570542dce6031dcf9";
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async Getuser(users) {
    let data;
    console.log("i am here");
    const response = await fetch(
      `https://api.github.com/users/${users}?client_id=${this.id}&client_secret=${this.key}`
    );
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort} &client_id=${this.id}&client_secret=${this.key}`;

    // console.log(data.status);
    data = await response.json();
    repos = await repoResponse.json();
    console.log(data);
    return {
      data,
    };
  }
}
