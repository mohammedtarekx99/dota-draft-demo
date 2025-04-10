const downloadAnimations = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/download/animations', {
            method: 'POST',
        });
        if (response.ok) {
            alert('Animations downloaded successfully');
        } else {
            alert('Failed to download animations');
        }
    } catch (error) {
        console.error('Error downloading animations:', error);
        alert('Error downloading animations');
    }
};

const downloadImages = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/download/images', {
            method: 'POST',
        });
        if (response.ok) {
            alert('Images downloaded successfully');
        } else {
            alert('Failed to download images');
        }
    } catch (error) {
        console.error('Error downloading images:', error);
        alert('Error downloading images');
    }
};

const downloadAll = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/download/all', {
            method: 'POST',
        });
        if (response.ok) {
            alert('All assets downloaded successfully');
        } else {
            alert('Failed to download all assets');
        }
    } catch (error) {
        console.error('Error downloading all assets:', error);
        alert('Error downloading all assets');
    }
};

export { downloadAnimations, downloadImages, downloadAll };