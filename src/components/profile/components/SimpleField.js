import SectionTitle from './SectionTitle';

const styles = {
    content: {
        border: '1px solid #C1C9D7',
        borderRadius: '3px',
        padding: '8px 5px'
    }
}

const SimpleField = ({text, data, width = '180px'}) => {
    return (
        <div>
            <SectionTitle text={text} type={'field'}/>
            <div style={{...styles.content, width}}>{data}</div>
        </div>
    );
};

export default SimpleField;