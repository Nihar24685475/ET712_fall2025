{
  "type": "module"
}

const helper = function (data) {
    return `${data} is logged in!`;
}
const id = (userid)=>{
    return `$(userid)`
}
const email = (useremail)=>{
    return useremail
}

module.exports = { helper, id, email };



