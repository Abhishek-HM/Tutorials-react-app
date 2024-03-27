import React,{useState,useEffect} from "react"
import {useParams,useNavigate} from "react-router-dom"
import TutorialDataService from "../services/TutorialService";
const Tutorial=props=>
{
    const {id} = useParams();
    let navigate=useNavigate();

    const initialTutorialState={
        id:null,
        title:"",
        description:"",
        published:""
    };
    const [currentTutorial,setCurrentTutorial]=useState(initialTutorialState);
    const [message,setMessage]=useState("");

    const getTutorial=id=>{
        TutorialDataService.get(id)
            .then((response) =>{
                console.log("Tutorial for Is: "+id+" is "+JSON.stringify(response.data));
                setCurrentTutorial(response.data);
            }).catch((error)=>{
                console.log(error);
            });
    };

    useEffect(()=>{
        if(id){
            getTutorial(id);
        }
    },[id]);

    const handleInputChange=event =>{
        const {name,value}=event.target;
        setCurrentTutorial({...currentTutorial,[name]:value});
    };

    const updatePublished=status=>{
        var data={
            id:currentTutorial.id,
            title:currentTutorial.title,
            description:currentTutorial.description,
            published:status
        };

        TutorialDataService.update(currentTutorial.id,data)
        .then(response => {
            console.log(response.data);
            setMessage("The Tutorial is updated successfully!");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const deleteTutorial =()=>{
        TutorialDataService.remove(currentTutorial.id)
        .then((response) =>{
            console.log(response.data);
            navigate("/tutorials")
        }).catch((error) => {
            console.log(error);
        })
    };

    const updateTutorial=()=>{
        TutorialDataService.update(currentTutorial.id,currentTutorial)
        .then((response) =>{
            console.log(response.data);
            setMessage("The Tutorial is updated Successfuly");
        }).catch((error) => {
            console.log(error);
        })
   
        };
        return (
            <div>
                {
                    currentTutorial ? 
                    (
                        <div className="edit-form">
                            <h4>Tutorial:</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" className="form-control"
                                    id="title" name="title"
                                    value={currentTutorial.title}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <br/>

                                <div className="form-group">
                                    <label htmlFor="description">Description:</label>
                                    <input type="text" className="form-control"
                                    id="description" name="description"
                                    value={currentTutorial.description}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <br/>

                                <div className="form-group">
                                    <label htmlFor="published">Published:</label>
                                    <input type="text" className="form-control"
                                    id="published" name="published"
                                    value={currentTutorial.published}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <br/>
                            </form>

                            <br/>

                            <div className="button-container">
                                {
                                    currentTutorial.published ?
                                    (
                                        <button className="button" onClick={()=>updatePublished(false)}>
                                            UnPublish
                                        </button>
                                
                                        ) : (
                                            <button className="button" onClick={()=>updatePublished(true)}>
                                                Publish
                                            </button>
                                        )
                                }
                            
                                <button className="button" onClick={deleteTutorial}>
                                    Delete
                                </button>

                                <button type="submit" className="button" onClick={updateTutorial}>
                                    Update
                                </button>
                            
                                
                            </div>
                            <br/>
                            <p>{message}</p>
                                </div>
                            ): 
                                (
                                    <div>
                                        <br />
                                        <p>Please Click on Tutorial to start with....</p>
                                        </div>
                                )}
                            </div>
                        )
}



export default Tutorial;