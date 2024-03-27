import React,{useEffect, useState} from "react";
import TutorialDataService from "../services/TutorialService";
import { Link } from "react-router-dom";
//import axios from "axios";

const TutorialsList=()=>
{
    const [tutorials,setTutorials]=useState([]);
    const [currentTutorial,setCurrentTutorial]=useState(null);
    const [currentIndex,setCurrentIndex]=useState(-1);
    const [searchTitle,setSearchTitle]=useState("");

    useEffect(() => {
        retriveTutorials();
    },[]);

    const retriveTutorials=()=>
    {
        TutorialDataService.getAll()
        .then(response => {
            setTutorials(response.data);
            console.log(response.data);
        }).catch(e =>{
            alert(e.message);
            console.log(e);
        });
    };

    const refreshList=() =>{
        retriveTutorials();
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    };

    const setActiveTutorial=(tutorial,index) =>{
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    };

    const onChangeSearchTitle=e =>{
        const searchTitle=e.target.value;
        setSearchTitle(searchTitle);
    };

    const findByTitle=()=>{
        TutorialDataService.findByTitle(searchTitle)
        .then((response) => {
            setTutorials(response.data);
            console.log(response.data);
        }).catch((e)=>{
            console.log(e)
        });
    };

    const removeAllTutorials=()=>{
        TutorialDataService.removeAll()
        .then((response) => {
            console.log(response.data);
            refreshList();
        }).catch((e)=>{
            console.log(e)
        });
    };

    return(
        <div>
            <div>
                <div className="input-group mb-3 justify-content-center">
                    <input
                        type="text" className="from-control row"
                        placeholder="Search by Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                        <div className="input-group-append  justify-content-center bg-primary">
                            <button
                                className="btn btn-online-secondary"
                                type="button"
                                onClick={findByTitle}
                            >
                                Search
                            </button>
                        </div>
                </div>
            </div>
            <div className="list row">
            <div className="col-md-6 text-center">
                <h4 className="text-center"> Tutorials List</h4>
                <ul className="list-group">
                    {tutorials && tutorials.map((tutorial,index) => (
                        <li className={
                            "list-group-item "+(index===currentIndex ? "active":"")
                        }
                        onClick={()=>setActiveTutorial(tutorial,index)}
                        key={index}
                        >
                            {tutorial.title}
                        </li>
                    ))}
                </ul>

                <button className="m-3 btn btn-sm btn-danger"
                onClick={removeAllTutorials}
                >RemoveALL</button>
            </div>

            <div className="col-md-6">
                {currentTutorial ? (
                    <div className="text-center" >
                        <h4 className="text-center">Tutorial</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentTutorial.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentTutorial.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {currentTutorial.published ? "Published" :"Pending"}
                        </div>
                        <div>
                            <img src={currentTutorial.imagePath} alt={currentTutorial.title+ " Image"}/>
                        </div>
                        <Link to={"/tutorials/" +currentTutorial.id}
                        className="btn btn-success"
                        >Edit</Link>
                        <Link to={"/tutorials/" +currentTutorial.id}
                        className="btn btn-primary " onClick={()=>
                        {
                            
                        }}
                        >Add To Cart </Link>
                        
                        </div>
                        
                ):(
                       
                            <p className="text-center">Please click on a tutorial..</p>
                    
                
                )}
            </div>
        </div>  
        </div>
    );
};
export default TutorialsList;