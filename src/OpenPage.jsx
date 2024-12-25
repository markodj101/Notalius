import React, { useEffect } from 'react';
import "./OpenPage.css";
import { open } from '@tauri-apps/plugin-dialog';

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

async function openPdf() {
    console.log("Opening PDF dialog...");
    try {
        const selected = await open({
            multiple: false,
            directory: false,
          });
          console.log(selected);
        

        if (selected) {
            console.log('Selected file:', selected);
            // You can now process the selected file
        } else {
            console.log('No file selected.');
        }
    } catch (error) {
        console.error('Error opening file dialog:', error);
    }  
}
export default OpenPage;
