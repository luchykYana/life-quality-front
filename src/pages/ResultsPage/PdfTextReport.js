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

const PdfTextReport = ({data}) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Results of a survey</Text>
                
                <Text>Patient: {data?.patient.firstName + ' ' + data?.patient.lastName}</Text> 
                <Text>Age: {new Date(data?.patient.birthDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}</Text> 
                <Text>Gender: {data.patient.gender}</Text> 
                <Text>Questionnaire: {data.questionnaire.questionnaireName}</Text> 
                <Text>Date: {new Date(data?.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}</Text> 

                {(data.resultsPatientAnswers.map((e, index) => 
                <View key={index}>
                    <Text>
                    {index + 1}. {e.patientAnswer.questionText}</Text>
                     
                     <Text>     
                     {e.patientAnswer.answerText}
                </Text>
                </View>
                ))}


            </Page>            
        </Document>
    );
};

export {PdfTextReport};