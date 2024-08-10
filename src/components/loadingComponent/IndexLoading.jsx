import IndexLogo from "../logoComponent/IndexLogo"

const LoadingComponent = () => {
    return (
        <div className="loading">
            <div className="loadingUp">
                <IndexLogo/>
            </div>
            <div className="loadingBottom">
                <h1>Mc<span>cartheney<br/>Mendes</span></h1>
            </div>
        </div>
    )
}

export default LoadingComponent