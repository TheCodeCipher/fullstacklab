const {MongoClient} = require('mongodb');
const URL= 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

function show(label,docs){
  console.log('');
  console.log(label);
  if(docs.lenght===0){
    console.log('(nothing matched)');
    return ;
    
  }
  docs.forEach(fucntion (d) {
    cosnt name= (d.name || '?').padEnd(15);
    const course=(d.course || '-').padEnd(8);
    console.log('',name course, d.marks);

  });
}

async function main(){
  await client.connect();
  const students=client.db('school').collection('students'){}
  