// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object
//  containing these two pieces of information. Use the function to make three dictionaries representing
//   different albums. Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//     Make at least one new function call that includes the number of tracks on an album.

function make_album(artis_name:string,album_title1:string,numberTrack?:number){
  
       return    {
    artis_name:`${artis_name}`,
    album_title:`${album_title1}`,
    numberTrack:`${numberTrack}`
  }
}
let album1=make_album("Wakeel","singing song")
let album2=make_album("Atif Aslam","ve jan wal ya")
let album3=make_album("Wakeel","me phir bhi tum ko chaho ga")

console.log(album1);
console.log(album2,35);
console.log(album3,78);


