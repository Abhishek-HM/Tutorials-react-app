import React,{useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial=()=>{
    const initialTutorialState={
        id:null,
        title:"",
        description:"",
        published:""
    };

    const [tutorial,setTutorial]=useState(initialTutorialState);
    const [submitted,setSubmitted]=useState(false);

    const handleInputChange=event=>{
        const{name,value}=event.target
        setTutorial({...tutorial,[name]:value});
    };

    const saveTutorial=()=>{
        var data={
            title:tutorial.title,
            description:tutorial.description,
            published:tutorial.published
        };
        TutorialDataService.create(data)
        .then((response) =>{
            setTutorial({
                id:response.data.id,
                title:response.data.title,
                description:response.data.description,
                published:response.data.published
            });
            setSubmitted(true);
            console.log(response.data);
        }).catch((error)=>
        {
            console.log(error);
            alert(error);
        });
    };

    const newTutorial=()=>
    {
        setTutorial(initialTutorialState);
        setSubmitted(false);
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
                    <select type="text" className="form-control" placeholder="Enter the Title"
                    id="published" required value={tutorial.published}
                    onChange={handleInputChange}
                    name="published"
                    >
                        <option value={tutorial.published}>True</option>
                        <option value={tutorial.published}>False</option>
                    
                    </select>
                </div>
                <br/>
                <button onClick={saveTutorial} className="btn btn-success">
                    Submit
                </button>
                </div>
                
                )}
                
        </div>
        
    );
}
export default AddTutorial;