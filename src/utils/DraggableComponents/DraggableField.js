import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { makeStyles } from "@material-ui/core/styles";
import BeenhereIcon from '@mui/icons-material/Beenhere';
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    border: "dashed 0.15vw grey",
    padding: "1vh",
    margin: "1vh",
    borderRadius: "0.5vh",
    width:"22vw",
    maxWidth:"22vw"
  },
}));

function DraggableField({fieldName,fieldType,displayText,handleOnDelete,handleOnClick,handleDragEnd,dragItem,dragOverItem,isDroppedFieldActive}) {
  const classes = useStyles();
  const handleOnDragStart =(event,fieldName,fieldType,displayText)=>{
    dragItem.current = fieldName
    let data = {fieldName:fieldName,fieldType:fieldType,displayText:displayText}
    event.dataTransfer.setData("text/plain", JSON.stringify(data))
  }
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <div className={classes.container} draggable={true}   onDragStart={(e)=>handleOnDragStart(e,fieldName,fieldType,displayText)} onDragEnter={()=>dragOverItem.current = fieldName} onDragEnd={(e)=>handleDragEnd(e)} onDragOver={(e)=>e.preventDefault()}>
      {" "}
      {isDroppedFieldActive? <BeenhereIcon fontSize="small" />:""}
     
      <DragIndicatorIcon fontSize="small" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOnClick}
      >
       {fieldName||"fieldName"} - {fieldType||"fieldType"} - {displayText||"displayText"}
      
      </div>
    </div>
    <DeleteForeverIcon fontSize="medium" onClick={handleOnDelete} /></div>
  );
}

export default DraggableField;
