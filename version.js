interface version{
 version:string,
 releaseDate:string,
 bugID:string,
 feature:string,
 app:string,
 author:string,
 type:string
 }
 const latestUpdates=[
 {
 version:'4.2.1',
 releaseDate:'2021',
 bugID:"#2345",
 feature:"listen the songs in offline",
 app:"spoyify",
 author:["simran","joethika"],
 type:"major"

 },
 {
 version:'3.9',
 releaseDate:'2022',
 bugID:"#1234",
 feature:"3d avathar",
 app:"snapchat",
 author:"joethika",
 type:"major"

 },
 {
 version:'4.1',
 releaseDate:'2022',
 bugID:"#9790",
 feature:"double thumbs up",
 app:"netflix",
 author:"nithya",
 type:"major" 
 },
 {
 version:'3.3',
 releaseDate:'2021',
 bugID:'#9025',
 feature:"videocall with 8 person",
 app:"Google Doc",
 author:"raji",
 type:"major"
 },
 {
 version:'4.5',
 releaseDate:'2022',
 bugID:'#4990',
 feature:"gifstickers",
 app:"whatsapp",
 author:"madhumitha",
 type:"match enhancement"
 },
 { version:'4.7',
 releaseDate:'2022',
 bugID:'#9060',
 feature:"create your own awathar",
 app:"instagram",
 author:"sindhuja",
 type:"match enhancement"
 }]
 console.table(latestUpdates)

 function findYear(year:any){
 var counting=latestUpdates.filter(n=>n.releaseDate.includes(year))
 console.log(`"how many release made in this year?"
  ${counting.length} "versions came in the year of ${year}`)
 console.log(counting)
 }
 console.table(findYear(2022))
 console.log('***************************************************************************************************************************')
 function findAuthor(name:any){
 var countAuthor=latestUpdates.filter(n=>n.author.includes(name))
 console.log(`"which author has worked in many release?"
 ${name} is the only author who worked ${countAuthor.length} times in software updates `)
 console.log(countAuthor)
 }
 console.table(findAuthor('joethika'))

 console.log("***********************************************************************************************************************")

  function findBugID(bugID:any){
 var bugs=latestUpdates.filter(n=>n.bugID.includes(bugID))
 console.log(`"In which release specific bugID is present?
         bugID ${bugID} released in 2022`)
 console.log(bugs)
  }

 console.table(findBugID('#9060'))
 console.log('__________________________________________________________________________________________________________________________')
 console.table('match enhancement')

 function findFeatures(version:any){
 var softwareUpdatedVersion=latestUpdates.filter(n=>n.feature.includes(version))
 console.log(`${softwareUpdatedVersion.length} "software which having ${version} feature `)
 console.log(softwareUpdatedVersion)
 }
 console.table(findFeatures('gifsticker'))

 console.log("*************************************************************************************************************************")
 
 
  function findType(type:any){
 var softwareType=latestUpdates.filter(n=>n.type.includes(type))
 console.log(`"  the software which having ${type} type `)
 console.log(softwareType)
 }
 console.log('__________________________________________________________________________________________________________________________')
findType('major')

