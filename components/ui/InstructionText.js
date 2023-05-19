import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {

  return <Text style={styles.instrutionText}>{children}</Text>;

}
export default InstructionText;

const styles = StyleSheet.create({
  instrutionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  }
}); 