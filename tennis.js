Tennisplayer=[
 {player:'serena williams',rank:1,noOfMatches: 756,playerId : 'pl0745'},
 { player:'simona halep',rank:2,noOfMatches:799, playerId: 'pl556'},
 { player:'iga swiatek', rank:3,noOfMatches:700, playerId: 'pl003' },
 { player:'sania mersa',rank:4,noOfMatches:680, playerId: 'pl054'},
 {player:'jessica', rank:5,noOfMatches: 645,playerId: 'pl005' },
 {player:'martina',rank:6,noOfMatches:625,playerId: 'pl007'},
 {player:'maria',rank:7,noOfMatches:605,playerId: 'pl557'},
 {player:'Aryna',rank: 8,noOfMatches: 580, playerId: 'pl607'},                                                                                    
]


arr1=[]
middle=Tennisplayer.length/2
firstHalf=Tennisplayer.slice(0,middle)


secondHalf=Tennisplayer.slice(middle,Tennisplayer.length)
secondHalf.reverse()
for(i = 0 ;i <firstHalf.length;i++){
arr1.push(firstHalf[i])
arr1.push(secondHalf[i])
}

//-------------------
function toFindTheHighRank(person1,person2){
    winners = []
    if(person1.rank>person2.rank){
        winners.push(person2)
        winners.push(person1)
        return winners
    }else{
        winners.push(person1)
        winners.push(person2)
        return winners
    }
}

//-------------------
array = []
function winner(player1,player2){
   
    details = {}
    decide = Math.random()*100
    difference =  Math.abs(player1.rank - player2.rank)
    percentage = 100 / difference+1
    highttoLowRank = toFindTheHighRank(player1,player2)
    if(decide < percentage ){
        details['player1'] =highttoLowRank[0].player
        details['player2'] = highttoLowRank[1].player
        details['winner'] = highttoLowRank[1].player
        array.push(details)
        return highttoLowRank[1]
    }
    else{
        details['player1'] = highttoLowRank[0].player
        details['player2'] = highttoLowRank[1].player
        details['winner'] = highttoLowRank[0].player
        array.push(details)
        return highttoLowRank[0]
    }
}
//-----------------
function tomatchUp(array){
matches = []
oddPlayer=[]
evenPlayer=[]
for(i=0;i<array.length;i++){
    if(i%2==0){
        evenPlayer.push(array[i])
    }else{
        oddPlayer.push(array[i])
    }
 }
for(j = 0 ;j<oddPlayer.length;j++){
    matches.push(winner(oddPlayer[j],evenPlayer[j]))
}
return matches
}
while(arr1.length>1){
    arr1 = tomatchUp(arr1)
}



console.table(array)
