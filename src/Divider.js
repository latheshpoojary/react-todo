



const Divider = () => {
    
  
  return (
    <section>
        <article>
            <div className="Todo">
                <header>
                    <h3>To-Do</h3>
                    <p className="Count-Card">2</p>
                </header>
                <input type="search" placeholder="Enter the Card Title to Search"/>
                


 
      
    
  




            </div>
            <div className="Progress">
                <header>
                    <h3>In Progress</h3>
                    <p className="Count-Card">2</p>
                </header>
                <input type="search" placeholder="Enter the Card Title to Search"/>
               
            </div>
            <div className="Done">
                <header>
                    <h3>Completed</h3>
                    <p className="Count-Card">2</p>
                </header>
                <input type="search" placeholder="Enter the Card Title to Search"/>
                
            </div>
        </article>
    </section>
  )
}

export default Divider