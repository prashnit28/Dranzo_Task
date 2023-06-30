import React from 'react';

const DraggableButton = () => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    };

    const buttonStyle = {
        width: '150px',
        height: '40px',
        // backgroundColor: 'darkblue',
        border: '2px solid darkblue',
        borderRadius: '10px',
        position: 'relative',
        top: '10%',
        left: '10%',
        zIndex: 12

    };

    return (
        <button style={buttonStyle}
            id="draggableButton"
            draggable="true"
            onDragStart={handleDragStart}
        >
            Drag Me
        </button>
    );
};

const DropZone = () => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const outerDivStyle = {
        border: '40px solid lightblue',
        width: '60vw',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '50px auto', // Center the div horizontally
        // Add padding to create a card-like appearance
        borderRadius: '8px', // Add border radius for a rounded corner
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',// Add box shadow for depth
        height: '500px'
    };

    const grayDivStyle = {
        borderRight: '20px solid lightblue',
        width: '200px',
        background: 'grey',
        position: 'relative'
    };


    const handleDrop = (event) => {
        event.preventDefault();
        const buttonId = event.dataTransfer.getData('text/plain');
        const draggableButton = document.getElementById(buttonId);
        event.target.appendChild(draggableButton);
    };

    const dragZone = {
        paddingRight: '50px',
        width: '40vw',
        height: '500px'
    }

    return (
        <>
            <div style={outerDivStyle}>
                <div style={grayDivStyle}>
                <DraggableButton />
                </div>
                <div className="dropZone" onDragOver={handleDragOver} onDrop={handleDrop} style={dragZone}>
                </div>
            </div>
        </>
    );
};

const DragDiv = () => {
    return (
        <div>
            
            <DropZone />
        </div>
    );
};

export default DragDiv;
