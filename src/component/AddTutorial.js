import React,{useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial=()=>{
    const initialTutorialState={
        id:null,
        title:"",
        description:"",
        published:""
    };
    // const initialTutorialDetailState={//createdOn
    //     created_on:""
    // }

    const [tutorial,setTutorial]=useState(initialTutorialState);
    //const [tutorialDetails,setTutorialDetails]=useState(initialTutorialDetailState)//createdOn
    const [submitted,setSubmitted]=useState(false);
    const [selectedItem,setSelectedItem]=useState('');

    const handleInputChange=event=>{
        const{name,value}=event.target
        setTutorial({...tutorial,[name]:value});
        setSelectedItem(event.target.value);
    };


    // const handleInputChangeByDetails=event =>{//createdOn
    //     const{name,value}=event.target
    //     setTutorialDetails({...tutorialDetails,[name]:value});
    //     setSelectedItem(event.target.value);
    // }

    // const saveTutorialDetails=()=>{//createdOn
    //     var data={
    //         created_on:new Date().toLocaleDateString()   
    //     };
    //     console.log(data);
    //     TutorialDataService.create(data)
    //     .then((response) => {
    //         setTutorialDetails({
    //             created_on:response.data.created_on   
    //         });
    //         console.log(data);
    //         setSubmitted(true);
    //         console.log(response.data);
    //     }).catch((error)=>
    //     {
    //         console.log(error);
    //         alert(error);
    //     });
       
    // }



    const saveTutorial=()=>{
        var data={
            title:tutorial.title,
            description:tutorial.description,
            published:tutorial.published
        };
        console.log(data);
        TutorialDataService.create(data)
        .then((response) =>{
            setTutorial({
                id:response.data.id,
                title:response.data.title,
                description:response.data.description,
                published:response.data.published
            });
            console.log(data);
            setSubmitted(true);
            console.log(response.data);
        }).catch((error)=>
        {
            console.log(error);
            alert(error);
        });
    };

    // const newTutorialDetails =()=> //createdOn
    // {
    //     setTutorialDetails(initialTutorialDetailState);
    //     setSubmitted(false);
    // }


    const newTutorial=()=>
    {
        
        setTutorial(initialTutorialState);
        setSubmitted(false);
        // newTutorialDetails();
    }


    return(
        <div className="submit-form">
            {submitted ?(
                <div> 
                    <h4>You Submitted Tutorial Successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                    </div>
            ):(
            <div>
                <div className="form-group">
                    <label htmlFor="title" >Title:</label>
                    <input type="text" className="form-control" placeholder="Enter the Title"
                    id="title" required value={tutorial.title}
                    onChange={handleInputChange}
                    name="title"
                    />
                </div><br/>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="form-control" placeholder="Enter the Description"
                    id="description" required value={tutorial.description}
                    onChange={handleInputChange}
                    name="description"
                    />
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="published">Published:</label>
                    <select type={selectedItem} className="form-control" placeholder="Enter the Title"
                    id="published" value={selectedItem} 
                    onChange={handleInputChange}
                    name="published"
                    >
                        <option value=""> Published or Not</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                
                    </select>
                </div>

                {/* <button onClick={saveTutorialDetails} class="btn btn-success">Tutorial Details  </button> */}
                
                <br/>
                <div className="text-center">
                <button onClick={saveTutorial} className="btn btn-success text-center">
                    Submit
                </button>
                </div>
                </div>
                
                )}
                
        </div>
        
        
    );
}
export default AddTutorial;