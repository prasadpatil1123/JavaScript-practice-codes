const lang = ["JS","Java","CPP","Ruby","Python"]

const values = lang.forEach((item)=>{
    // console.log(item);
    return item
})

// console.log(values); // no Output

const myNum = [1,2,3,5,6,4,3,6,89,9,9,6]


const xyz = myNum.filter((n)=>{
    return n > 4
})

// console.log(xyz);

const newNum = []
const abc = myNum.forEach((n)=>{
   if(n > 4){
    newNum.push(n)
   }
})
// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBook = books.filter((bk) => bk.genre === "Science")

  userBook = books.filter((ck)=>{
    return ck.publish <= 1995 && ck.genre === "Fiction";
  })

  console.log(userBook);
  
