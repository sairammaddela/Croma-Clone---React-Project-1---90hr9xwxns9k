import "./style.css";
const Input=(props)=>{
    const {styles}=props;
    return <input type="text" placeholder={styles.placeholder} style={{...styles}}/>
}
export default Input;