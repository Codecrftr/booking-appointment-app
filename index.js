function savetolocalstorage(event){
    event.preventDefault(); // to prevent page refresh
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name: name,
        email: email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfitems')
    //method 1
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + '-' + obj.email + ' - ' + obj.phonenumber
    parentElem.appendChild(childElem)  
    //can do this instead of method 1 but it replaces instead of saving previous data so use method 1
    //parentElem.innerHTML =`<li> ${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`
    const deleteBtn = document.createElement('input')
    deleteBtn.type = "button"
    deleteBtn.value = "Delete"
    deleteBtn.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
     //create edit button 
     const editbtn = document.createElement('input')
     editbtn.type = "button"
     editbtn.value = "edit"
     editbtn.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
        document.getElementById('username').value = obj.name
        document.getElementById('emailId').value = obj.email
        document.getElementById('phonenumber').value = obj.phonenumber
        
     }
    childElem.appendChild(deleteBtn)
    childElem.appendChild(editbtn)
    parentElem.appendChild(childElem)
}