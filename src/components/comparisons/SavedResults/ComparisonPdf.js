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

const ComparisonPdf = ({data, chartData}) => {
    console.log(data)
    console.log(chartData)
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Comparison of surveys</Text>
                    {
                        // data[0] &&
                        <View>
                            <Text>Patient: {data[0]?.patient.firstName + ' ' + data[0]?.patient.lastName}</Text> 
                            <Text>Age: {new Date(data[0]?.patient.birthDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}</Text> 
                            <Text>Gender: {data[0]?.patient.gender}</Text> 
                            <Text>Questionnaire: {data[0]?.questionnaire.questionnaireName}</Text> 
                            

                            {data?.map((result, resultIndex) => (
                                <View key={resultIndex}>
                                    <Text>Date: {new Date(result?.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}</Text>
                                    <Text></Text>
                                    {result.resultsPatientAnswers.map((answer, index) => (
                                    <View key={index}>
                                        <Text>
                                        {index + 1}. {answer.patientAnswer.questionText}
                                        </Text>
                                        <Text>
                                        {answer.patientAnswer.answerText}
                                        </Text>
                                    </View>
                                    ))}
                                </View>
                                ))}

                        </View>
                    }
            </Page>
            <Page>
                    <Image style={styles.image} src={chartData}/>
                    <Text style={styles.imageDescription}>Comparison of chosen parameters</Text> 
            </Page>
        </Document>
    );
};

export {ComparisonPdf};