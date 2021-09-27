import "./Loading.css";

export default function Loading() {
    return (
        <center
            style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div className='sk-folding-cube'>
                <div className='sk-cube1 sk-cube'></div>
                <div className='sk-cube2 sk-cube'></div>
                <div className='sk-cube4 sk-cube'></div>
                <div className='sk-cube3 sk-cube'></div>
            </div>
        </center>
    );
}
