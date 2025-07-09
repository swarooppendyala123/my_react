export default function ErrorModel({title, meaasge}){
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{meaasge}</p>
        </div>
    );
}
