import {Document, Page, StyleSheet, Text, View, Image} from '@react-pdf/renderer';
import React from "react";

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 10,
        paddingHorizontal: 35,
        fontFamily: "Times-Roman",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize:14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 5,
        marginHorizontal: 20,
        border: 1,
        borderStyle:"solid",
        height: '450px',
        width: '750px'
    },
    imageDescription: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: "center",
        color: "grey",
    },
    table: {
        display: "table",
        borderStyle: "solid",
    },
    tableRow: {
        marginHorizontal: "auto",
        marginVertical:0,
        flexDirection: "row"
    },
    tableCol: {
        width: "15%",
        borderStyle: "solid",
        borderWidth: 1,
        wordWrap: true,
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    }
});

const ComparisonPdf = ({data}) => {
    return (
        <Document>
            <Page style={styles.body}>
            </Page>
        </Document>
    );
};

export {ComparisonPdf};