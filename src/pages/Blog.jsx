const cardData = [
  {
    heading: "card 1",
    body: "this is card body 1"
    
  },
  {
    heading: "card 2",
    body: "this is card body 2"
    
  },
  {
    heading: "card 3",
    body: "this is card body 3"
    
  },
  {
    heading: "card 4",
    body: "this is card body 4"
    
  },
  {
    heading: "card 5",
    body: "this is card body 5"
    
  },
  {
    heading: "card 6",
    body: "this is card body 5"
    
  }
]

const postContainer = document.querySelector(".card-container")

const postMethods = ()=> {
  cardData.map((postData)=> {
    const postElement = document.createElement("div")
    postElement.classList.add("card")
    postElement.innerHTML = `
      <h3 className="card-title">${postData.heading}</h3>
      <p className="card-text">${postData.body}</p>
    `
    postContainer.appendChild(postElement)
  })
}
postMethods()


export default function Blog() {
  return (
    <div className="card-container">
      {/* <div className="card">
       <h3 className="card-title">Blog</h3>
       <p className="card-text">Welcome to my blog! I will be posting updates about my projects, as well as other interesting topics that I find relevant to my work.</p>
     </div>  */}
    </div>
  )
}
