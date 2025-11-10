//5.uzdevums
//a) Izveidojiet failu `books-array-function.js`.
//b) Šajā failā ir jāiekopē 4.uzdevuma risinājums un tas jāpārveido ar funkcijas palīdzību.
//Izveidojiet funkciju `printBookInfo` ar vienu parametru `attribute`.
//Funkcija satur 4.uzd. loģiku, bet tā izprintē nevis grāmatas nosaukumu un pieejamību, bet to atribūtu, ko lietotājs padevis kā argumentu funkcijai
//Piem., izsaucot funkciju ar argumentu "title" tiek izprintēti abu grāmatu nosaukumi, bet  izsaucot funkciju ar argumentu "author" tiek izprintēti abi grāmatu autori.
//Izmantojiet `bracket notation` jeb [attribute], lai dinamiski padotu atribūta nosaukumu.
//Izsauciet funkciju divas reizes ar sekojošiem argumentiem - "title" un "author".
//
function printBookInfo(title, author, isAvailable){

   console.log(title,"/",author,"/",isAvailable)

}
printBookInfo("ruksītis", "alberts", "ir pieejama")
printBookInfo("zaķis", "Jēkabs","nav pieejama")