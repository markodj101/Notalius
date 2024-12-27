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
        <div>
            <button onClick={openPdf}>
                <span aria-hidden="true">Open PDF</span>
                <span></span>
                <span>Open PDF</span>
            </button>
        </div>
    );
}

async function openPdf() { // Opens the default file explorer for choosing a PDF file
    console.log("Opening PDF dialog...");
    try {
        const selected = await open({
            multiple: false,
            directory: false,
            filters: [{
                name: 'PDF Files',
                extensions: ['pdf']
            }]
        });

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
