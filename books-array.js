let books =[
    {title:"ruksītis", author:"alberts", isAvailable:"ir pieejama"},
    {title:"zaķis", author:"Jēkabs", isAvailable:"nav pieejama"}
]

for(i=0;i<books.length;i++){
   booksInfo=books[i]
   console.log("Nosaukums:",booksInfo.title,booksInfo.isAvailable)
}