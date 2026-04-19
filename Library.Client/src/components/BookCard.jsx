function BookCard({ book }) {
    return (<>
        
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>Ce livre a été écrit par {book.author} et a étépublié le {book.releaseDate}.</p>  
            </div>
        </div>
        </>
    );
}
export default BookCard;