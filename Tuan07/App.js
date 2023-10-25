import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image,TextBase,TextInput, ButtonGroup, Touchable, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.style1}>
     <Text style={styles.text1}>A premium online store for</Text>
     <Text style={styles.text1}>sporter and their stylish choice</Text>
     </View>
     <View style={styles.style2}>
     <Image source={require('./assets/bifour_-removebg-preview.png')} style={{width:'250px',height:'250px'}}></Image>
     </View>
     <View style={styles.style3}>
        <Text style={styles.text2}>POWER BIKE</Text>
        <Text style={styles.text2}>SHOP</Text>
     </View>
     <View style={styles.style4}>
            {/* <Button title={'Get Started'} ></Button>
            <TouchableOpacity> <Text>vfcycf</Text></TouchableOpacity> */}
            <Button
              title="Dark"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />

        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  style1:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  style2:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'rgba(233, 65, 65, 0.10)',
    borderRadius:'40px',
  },
  style3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  style4:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
  Button:{
    // color:'#FEFEFE',
    // textAlign:center,
    fontFamily: 'VT323',
    // fontSize:27,
    // // fontStyle:normal,
    // // fontWeight:400,


    // // color: #FEFEFE;
    // // text-align: center;
    // // font-family: VT323;
    // // font-size: 27px;
    // // font-style: normal;
    // // font-weight: 400;
    // // line-height: normal;
  },
  text1:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    fontFamily:"VT323"
  },
  text2:{
    fontWeight:'bold',
    fontSize:40,
    fontStyle:'Ubuntu'
  }
});
