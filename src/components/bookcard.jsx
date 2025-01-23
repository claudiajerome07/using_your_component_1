// write the book component code here
function BookCard({id ,image,name,genre,author}){

    return (
        <div style={{
            
            border: "3px solid #ddd",
            borderColor:"grey",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "250px",
            margin: "16px",
            padding: "16px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
        }}>
            <h2>{name}</h2>
            <img src={image} alt={name} style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                marginBottom: "12px",
            }} />
            <p>Genre: {genre}</p>
            <p>Author: {author}</p>
        </div>
    )

}
export default BookCard;