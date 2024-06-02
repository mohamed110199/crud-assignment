let siteNameinput = document.getElementById('siteName')
let siteUrlinput = document.getElementById('siteUrl')
let allSites =[]
if (localStorage.getItem('site') != null) {
  allSites = JSON.parse(localStorage.getItem('site'))
  displaySites()
    
}
function addProuduct() {

  let site= {
siteName : siteNameinput.value,
url : siteUrlinput.value
  }

    allSites.push(site)
    displaySites()
    window.localStorage.setItem('site' , JSON.stringify(allSites))  
    }
function displaySites() {
  let x =""
    for (let i = 1; i < allSites.length; i++) {
      x += `
      <div class="col-md-3">
        <p>${i}</p>
      </div>
      <div class="col-md-3">
        <p>${allSites[i].siteName}</p>
      </div>
      <div class="col-md-3">
      <a href="${allSites[i].url}" class="btn btn-success"><i class="fa-solid fa-eye"></i>visit</a>
      </div>
      <div class="col-md-3">
      <a href="" onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>Delete</a>
      </div>
      `
}
document.getElementById('add').innerHTML = x  
}
function clearInputs() {
  siteNameinput.value = ""
    siteUrlinput.value  = ""
}     
function deleteSite(index) {
  allSites.splice(index, 1)
  window.localStorage.setItem('site' , JSON.stringify(allSites))
  displaySites()  
}
