//6.uzdevums: problēmas risinājums
//Klubs uztur biedru sarakstu. Katrs biedrs tiek attēlots kā objekts ar četrām īpašībām: vārds, uzvārds, loma un stundas. Lomas var būt "leader" (vadītājs) vai "member" (biedrs). Stundas nosaka brīvprātīgo stundu skaitu mēnesī katram biedram.

//Izveidojiet testa datus, lai jūsu izveidotā programma spētu veikt uzdevumu.
//Ir jāizveido saraksts, kurā ir 2 vadītāji un 5 biedri.

//Programmai jāsniedz atbildes uz trim jautājumiem:
//1. Kas ir vadītāji?
//Izdrukājiett konsolē visus biedrus, kuriem ir loma "leader".

//2. Cik liels ir kopējais brīvprātīgo stundu skaits?


let biedri=[
    {
        vārds:"Alberts",
        uzvārds:"Alus",
        loma:"leader",
        stundas:26
    },
     {
        vārds:"Roze",
        uzvārds:"venpils",
        loma:"leader",
        stundas:24
    },
     {
        vārds:"Jēkabs",
        uzvārds:"bērzs",
        loma:"Member",
        stundas:14
    },
     {
        vārds:"Aleksandrs",
        uzvārds:"Kazelvi",
        loma:"Member",
        stundas:9
    },
     {
        vārds:"Maija",
        uzvārds:"helikopters",
        loma:"Member",
        stundas:7
    },
     {
        vārds:"gabits",
        uzvārds:"zieds",
        loma:"Member",
        stundas:18
    },
     {
        vārds:"romas",
        uzvārds:"lomas",
        loma:"Member",
        stundas:24
    },



]
let sum=0
for(i=0;i<biedri.length;i++){
    members=biedri[i]
        if(members.loma=="leader"){
            console.log("vadītājs/e ir",members.vārds,members.uzvārds)
        }
 sum=sum+members.stundas
}

console.log("kopēja stundu laiks ir",sum)