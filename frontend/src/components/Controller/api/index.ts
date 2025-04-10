
const downloadAll = async () => {
    try {
        await fetch('http://localhost:3000/api/download/assets', {
            method: 'POST',
        });
        return { success: true };
    } catch (error) {
        throw error;
    }
};

export { downloadAll };