import React from "react";

function Room(props) {
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={props.img_icon} style={styles.image} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>[1F] Cube {props.name}</span>
                <span
                    style={{
                        ...styles.statusText,
                        color: props.status === "사용가능" ? "green" : "red",
                    }}
                >
                    {props.status}
                </span>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "120px",
    },
    imageContainer: {
        marginBottom: "8px",
    },
    image: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    nameText: {
        fontWeight: "bold",
        marginBottom: "4px",
    },
    statusText: {
        fontSize: "14px",
    },
};

export default Room;