/*
program to print out list of set number 
of songs based on user input;
*/
//inital variables;
var numberOfSongs,
    numberOfSongsLeft = 0,
    userPlaylist = [],
    printList;

//Start of function defintions;
//function to ask user number of songs desired in playlist;
function howManySongs() {
    while (isNaN(numberOfSongs)) {
        numberOfSongs = parseInt(prompt('How many songs do you want in the playlist. Enter a number no more than 20'));
        if (isNaN(numberOfSongs)) {
            alert('That is not a number please enter a valid number');
        } else if (numberOfSongs > 20 || numberOfSongs < 1) {
            alert('please enter number between 1 and 20');
            numberOfSongs = 'nan';
        }
    }
    return numberOfSongs;
}
//function to ask user songs based on ammount specifed numberOfSongs;
function gatherUserPlaylist() {
    numberOfSongsLeft += (numberOfSongs - 1);
    var i;
    for (i = 0; i < numberOfSongs; i += 1) {
        userPlaylist.push(prompt('Enter song; you have ' + numberOfSongsLeft + ' songs left to enter'));
        numberOfSongsLeft -= 1;
    }
}
//print to page;
function print(message) {
    document.write(message);
}
//funtion to combine array to <ol> list;
function compiledList(list) {
    printList = '<h3> Here is your list of songs</h3><ol>';
    var  i;
    for (i = 0; i < list.length; i += 1) {
        printList += '<li>' + list[i] + '</li>';
    }
    printList += '</ol>';
    return printList;
}
//End of functions


howManySongs();
gatherUserPlaylist();
print(compiledList(userPlaylist));
print('<h3> Thank you for entering the songs you want on your playlist</h3>');