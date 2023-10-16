import React, { useEffect, useState } from "react";
import s from "./style.module.css"

export function CreatAticle(){

    const [title,setTitle]=useState(""); //var title
    const [contenu,setContenu]=useState(""); // var contenu text
    const [date ,setDate]=useState(""); // var date
    const [dataArray,setDataArray]=useState([]);// array des data.title,contenu,date
    const [isShow,setIsShow]=useState(false)

 
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleContenu=(e)=>{
        setContenu(e.target.value)
    }
    const handleDate=(e)=>{
        setDate(e.target.value)
    }

    const handleDataArray=()=>{
        if(title !== ""){
            const newArray={
                title:title,
                date:date,
                contenu:contenu
            };
            setDataArray([...dataArray,newArray])
                setTitle("");
                setContenu("");
                setDate('');
        }
    }
    const handleDelete=(index)=>{
        const deleteArticle = dataArray.filter((_,i)=>i !==index)
        setDataArray(deleteArticle)

    }

    const handleShow=()=>{
        setIsShow(!isShow)
    }

    return(
        <div>
            <h1 onClick={handleShow} >Creer un article</h1>
            {isShow && 
            <div className={s.from}>
            <label>Creer un Titre</label>
            <input type="text" value={title} onChange={handleTitle} maxLength={30} />

            <label>Date</label>
            <input type="date" value={date} onChange={handleDate} />

            <label>Creer Artcle</label>
            <textarea rows="4" cols="50" maxLength={500} value={contenu} onChange={handleContenu}></textarea>

                <button className={s.btnAdd} onClick={handleDataArray}>Creer</button>
            </div>}


                {dataArray.map((data,index)=>
                   <div className={index%2 ===0 ? s.article:s.articles} key={index}>
                   <div className={s.title}>  titre : {data.title}</div>
                   <div>  fait le : {data.date}</div>
                   <p className={s.divContenu}> {data.contenu}</p>
                   <button className={s.btnDel} onClick={()=>handleDelete(index)}>supprimer</button>
                    </div> )}
            
        </div>
    )
}