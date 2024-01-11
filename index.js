function savetolocalstorage(event){
    event.preventDefault(); // to prevent page refresh
    const name = event.target.username;
    const email = event.target.emailId;
    const phonenumber = event.target.phonenumber;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phonenumber);

}