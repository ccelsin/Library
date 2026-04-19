export async function addBook(book) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)  
    });
    if (!response.ok) throw new Error(`Erreur ${response.status}`);
    return response.json();
}

export async function getAllBooks() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book`);
    if (!response.ok) throw new Error(`Erreur ${response.status}`);
    return response.json();
}

export async function updateBook(id, book) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)  
    });
    if (!response.ok) throw new Error(`Erreur ${response.status}`);
    return response.json();
}

export async function deleteBook(id) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error(`Erreur ${response.status}`);
    return response;
}

export async function getBookById(id) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/${id}`);
    if (!response.ok) throw new Error(`Erreur ${response.status}`);
    return response.json();
}