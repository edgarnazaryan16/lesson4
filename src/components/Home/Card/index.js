const Card = ({id, title, price}) => {
const consoleTheTitle = () => {
    console.log(title);
}
    return <>
        <h2>{title}</h2>
        <p>{price}</p>
        <button onClick={consoleTheTitle}>Print</button>
    </>
}
export default Card;