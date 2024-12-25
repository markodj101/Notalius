import React, { useEffect } from 'react';
import "./OpenPage.css";

function OpenPage() {
    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault(); // Prevents the default right-click menu from appearing
        };

        // Attach the event listener when the component mounts
        document.addEventListener('contextmenu', handleContextMenu);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <>
            <button onClick={openPdf}>
                <span aria-hidden="true">Open PDF</span>
                <span></span>
                <span>Open PDF</span>
            </button>
        </>
    );
}

function openPdf(){
    console.log("hello");
}

export default OpenPage;
