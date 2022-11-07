// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");
var check = document.getElementsByClassName("fa-face-smile");


// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const distance = this.parentNode.parentNode.childNodes[3].innerText
        const time = this.parentNode.parentNode.childNodes[5].innerText
        const difficulty = this.parentNode.parentNode.childNodes[7].innerText
        fetch('runner', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'distance': distance,
            'time': time,
            'difficulty': difficulty
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(check).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const distance = this.parentNode.parentNode.childNodes[3].innerText
    const time = this.parentNode.parentNode.childNodes[5].innerText
    const difficulty = this.parentNode.parentNode.childNodes[7].innerText
    const checkIcon = this.dataset.checkbox === 'true'
    fetch('check', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'distance': distance,
        'time': time,
        'difficulty': difficulty,
        'check' : checkIcon

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
