window.addEventListener('load', function(){
  var input = document.querySelector('input');

  // var url = "http://api.musixmatch.com/ws/1.1/track.search" + "?apikey=" + MusixMatchKey + "&q_track=" + input.value;



  // var select = document.querySelector('select');
  // select.addEventListener('change', handleSelectChange);
  
  var button = document.querySelector('#trigger');

  button.addEventListener('click', function () {
      var url = "http://api.musixmatch.com/ws/1.1/track.search" + "?apikey=" + "166835c6c33d5b5d19aeb5693237e0fa" + "&q_track=" + input.value;
      makeRequest(url, requestComplete);
    })
  
  // button.addEventListener("click", function(){
  //   makeRequest(url, requestComplete);
  // })

//   button.addEventListener("click", function(){
//     makeRequest(url, function(){
//       console.log(this)
//       responseData = JSON.parse(this.responseText)
//       // console.log(responseData.message.body.track_list[0].track.artist_name);
//     });
//   })
// })

var makeRequest = function(url, requestComplete){
  console.log("making request") 
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener("click", requestComplete);
  request.send()
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  console.log(jsonString)
  var music = JSON.parse(jsonString);
  console.log(music)
  var pTag = document.querySelector('#text-result');
  pTag.innerText = music.message.body.track_list[0].track.artist_name
  console.log(music);
}
})

// var handleSelectChange = function(){
//   var pTag = document.querySelector('#select-result');
//   pTag.innerText = responseData.message.body.track_list[0].track.artist_name;
// }



