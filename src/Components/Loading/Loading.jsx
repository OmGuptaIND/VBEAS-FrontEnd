import "./Loading.css";

export default function Loading() {
    return (
        <center
            style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div class='sk-folding-cube'>
                <div class='sk-cube1 sk-cube'></div>
                <div class='sk-cube2 sk-cube'></div>
                <div class='sk-cube4 sk-cube'></div>
                <div class='sk-cube3 sk-cube'></div>
            </div>
        </center>
    );
}
