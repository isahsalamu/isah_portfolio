import React from 'react'

export default function UserComponent(props) {
    // console.log(props && props.user);
  return (
    <div className=' w-100 h-400 bg-success'>
        <div className="row ">
            <div className="col-md-6  justify-content-center align-self-center" >
                {
                    // props.user.data == undefined? " " : description(props.user.data.name)
                }
            </div>

            <div className="col-md-6">
                {portifolioImage()}
            </div>
            </div> 
    </div>
  )
}


const description = (name)=>{
    return(
        <div className=" text-center ">            
            <h1 className=' '>Web Developer</h1>
            <h2 className=''>{name}</h2>
             
            
            <br/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Vitae et quae illo dolorum, quaerat animi? Rerum aut eligendi mollitia vero.
            </p>
            <br />

            <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-info me-1 "  >Projects</button>
            <button type="button" class="btn btn-outline-info">Hire me!</button>
            </div>
        </div>
    )
};


const portifolioImage=()=>{
    return(
        <div className="overflow-auto">
            <img className='img-fluid' src="./images/sister.jpg"   alt="" />

             
        </div>
        
    )

}
