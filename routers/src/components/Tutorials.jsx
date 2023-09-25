const Tutorials = (props) => {
    
    setTimeout(() => {
        props.history.push('/');
    }, 5000);

    return (
        <div className="container mt-3">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Oops</strong> This page is under construction.
                You will be redirected to the Docs page in five seconds
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <h1 className="main-title">Tutorial: Intro</h1>
        </div>
    )
}

export default Tutorials;