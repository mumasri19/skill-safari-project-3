const reviews = [
  {
     id:1,
     name:'umasri',
     job: 'student',
     img: 'me.jpeg',
     text: "hkjgfcdxcghjkhgfdxghjnbnvcbnjbv"

  },
  {
     id:2,
     name: 'umasri'
     job: 'student',
     img: 'umasri.png'
     text: "hjgfhjkjhgfdhjkhgvbcfvgbhjhbg"
  },
  {   id:3,
     name:'umasri',
     job: 'student',
     img: 'me.jpeg',
     text: "hkjgfcdxcghjkhgfdxghjnbnvcbnjbv"
  },
  {
    id:4,
    name: 'umasri',
    job: 'student',
    img: 'umasri.png',
    text: "hjgfhjkjhgfdhjkhgvbcfvgbhjhbg"
 },
  
]
//select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector(' .prev-btn');
const nextBtn=document.querySelector(' .next-btn');
const randomBtn=document.querySelector(' .random-btn');


//set starting item

let currentItem = 0;
//load initial item
window.addEventListener('DOMcontentLoaded',function()
{ 
    const item=reviews[0];
    img.scr=item.img;
    author.textcontent=item.name;
    job.textcontent=item.job;
    info.textcontent=item.text;
})
//show person based on item

function showperson(person)
{
    const item=reviews[person];
    img.scr=item.img;
    author.textcontent=item.job;
    info.textcontent=item.text;
}

//show next person
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(curretItem>reviews.length-1)
    {
      currentItem=0;
    }
    showperson(currentItem);
})
//show previous person
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0)
    {
currentItem=reviews.length-1;
    }
    showperson(currentItem);
})
//random person
randomBtn.addEventListener('click',function(){
    currentItem=math.floor(math.random()*reviews.length);
    showperson(currentItem);
})


