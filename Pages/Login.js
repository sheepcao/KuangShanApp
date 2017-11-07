/**
 * 登录页面,登录验证
 * 引用组件地址：
 * https://github.com/oblador/react-native-vector-icons
 * https://github.com/mathiasbynens/base64

 */
'use strict';
import React from 'react';
import {
  Alert,
  StyleSheet,
  InteractionManager,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Switch,
  AsyncStorage,
  ImageBackground,
  Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import base64 from 'base-64';
// import Register from './Register';
import { timeout } from './Utils/Tools';
import Icon from 'react-native-vector-icons/Ionicons';

// import Retrievepassword from './Retrievepassword';
// import Main from './Main';
// let Global = require('./Global');
let {height, width} = Dimensions.get('window');//获取屏幕高度宽度
let loginInfo = { "username": "", "password": "" };

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      falseSwitchIsOn: true
    }
  }
  // componentWillMount() {//根据自动登录状态改变switch的状态
  //   AsyncStorage.getItem('loginstate', (err, state) => {
  //     if (state != null && state === "1") {
  //       this.setState({ falseSwitchIsOn: true });
  //     }
  //     else if (state === null) {
  //       this.setState({ falseSwitchIsOn: true });
  //       AsyncStorage.setItem('loginstate', "1", (err) => {
  //         if (err) {
  //           //TODO:存储出错
  //           Alert.alert('出错信息', err, [{ text: '确定'}])
  //         };
  //       });
  //     }
  //     else {
  //       this.setState({ falseSwitchIsOn: false });
  //     }
  //   });
  // }
  // changestate(value) {//改变自动登录状态
  //   this.setState({ falseSwitchIsOn: value });
  //   if (value === false) {
  //     AsyncStorage.setItem('loginstate', "0", (err) => {
  //       if (err) {
  //         //TODO:存储出错
  //         Alert.alert('出错信息', err, [{ text: '确定'}])
  //       };
  //     });
  //   }
  //   else {
  //     AsyncStorage.setItem('loginstate', "1", (err) => {//自动登录
  //       if (err) {
  //         //TODO:存储出错
  //         Alert.alert('出错信息', err, [{ text: '确定' }])
  //       };
  //     });
  //   }
  // }
  login() {//登录事件
    var reg = "^1[345789][0-9]{9}$";//正则表达式判定手机号
    var re = new RegExp(reg);
    if (re.test(loginInfo.username)) {


    //   if (loginInfo.password!=''&&loginInfo.password.length >= 6) {//http basic登录
    //     timeout(5000, fetch(Global.serverip + '/api/v1/i/userLogin',
    //       {
    //         method: 'POST',
    //         headers: {
    //           "Authorization": "Basic " + base64.encode(loginInfo.username + ":" + loginInfo.password),
    //           'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: "",
    //       }).then((response) => {//登录成功后将cookie持久化存储
    //         if (response.ok === true) {
    //           if (response.headers.map["set-cookie"] != undefined) {
    //             AsyncStorage.setItem('cookie', response.headers.map["set-cookie"][0], (err) => {
    //               if (err) {
    //                 //TODO:存储出错
    //                 Alert.alert('出错信息', err, [{ text: '确定'}])
    //               };
    //             });
    //           }
    //           loginInfo.password = null;
    //           return response.json();
    //         }
    //         else {
    //           Alert.alert('出错信息', "登录失败", [{ text: '确定'}])
    //         }
    //       }).then((json) => {
    //         if (json != undefined && json.code === 1) {
    //           Global.userinfo = json;
    //           const {navigator} = this.props;
    //           navigator.resetTo({
    //             component: Main,
    //             name: 'Main'
    //           });
    //         }
    //       }).catch((error) => {
    //         console.error(error);
    //         if (error != null && error != "") {
    //           Alert.alert('错误', "网络请求失败", [{ text: '确定' }])
    //         }
    //       })).catch((error) => {
    //         Alert.alert('出错信息', "网络请求失败", [{ text: '确定' }])
    //       })
    //   }
    //   else {
    //     Alert.alert('出错信息', "密码最短需要 6 个字符", [{ text: '确定'}])
    //   }
    }
    else {
      Alert.alert('出错信息', "请确认手机号码是否正确", [{ text: '确定' }])
    }
  }
  // register() {
  //   InteractionManager.runAfterInteractions(() => {
  //     const {navigator} = this.props;
  //     navigator.push({
  //       component: Register,
  //       name: 'Register'
  //     });
  //   })
  // }
  // Retrievepassword() {//跳转至忘记密码页面
  //   InteractionManager.runAfterInteractions(() => {
  //     const {navigator} = this.props;
  //     navigator.push({
  //       component: Retrievepassword,
  //       name: 'Retrievepassword'
  //     });
  //   })
  // }
  render() {//页面渲染ß
    return (
      <Image style={{width: width, height: height, backgroundColor: 'transparent'}}
                      source={require('./imgs/login.png')}
                      resizeMode='stretch'>
       {/* <ScrollView style={{ flex: 1 }} > */}
        <View style={styles.titlebar}>
          <Text style={styles.titletext}>葫芦素</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.textinputcontainer}>
            <View style={[styles.textinputInner,{borderBottomWidth: 1,borderColor: '#ccc'}]}>
              <Icon name='ios-person-outline' size={25} color='#989898' borderWidth={1} style={{marginLeft:5}}/>
              <TextInput style={{flex:1,flexDirection:'column',marginLeft:8,marginRight:10,fontSize: 13, color: 'white',height:25,textAlignVertical: 'center',padding:4}} placeholderTextColor="#ccc" placeholder="用户名" underlineColorAndroid="transparent" />
            </View>
          {/* <View style={styles.horizontalbar} /> */}
            <View style={[styles.textinputInner,{height:44}]}>
              <Icon name='ios-lock-outline' size={25} color='#989898' borderWidth={1} style={{marginLeft:5}}/>
              <TextInput style={{flex:1,flexDirection:'column',marginLeft:8,marginRight:10,fontSize: 13, color: 'white',height:25,textAlignVertical: 'center',padding:4}} placeholderTextColor="#ccc" placeholder="密码" underlineColorAndroid="transparent" />
            </View>
          </View>
          {/* <View style={styles.switch}>
            <Text>自动登录</Text>
            <Switch
              onValueChange={(value) => { this.changestate(value) }}
              value={this.state.falseSwitchIsOn} />
          </View> */}
          <TouchableOpacity onPress={() => { this.login() }}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>登录</Text>
            </View>
          </TouchableOpacity>
          {/* <View style={styles.resbar}>
            <TouchableOpacity onPress={() => { this.register() }}>
              <Text style={styles.text}>注册账号</Text>
            </TouchableOpacity>
            <View style={styles.verticalbar} />
            <TouchableOpacity onPress={() => { this.Retrievepassword() }}>
              <Text style={styles.text}>忘记密码</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      {/* </ScrollView> */}
    </Image>
    );
  }
}
let styles = StyleSheet.create({
  horizontalbar: {
    height: 1,
    backgroundColor: '#ccc',
    width: 0.9 * width,
    alignSelf: 'center'
  },
  textinput: {
    height: 45,
    textAlignVertical: 'center',
    paddingLeft: 20,
    width: 0.6 * width
  },
  textinputcontainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    height:90,
    // width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft:20,
    marginRight:20,
    borderRadius: 5

  },
  textinputInner: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height:45,
    // width: width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  body: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    marginTop: 2
  },
  titlebar: {
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: '#ccc',

  },
  titletext: {
    fontSize: 57,
    color: 'white'
  },
  switch: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#007aff',
    height: 45,
    // width: width - 20,
    // marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 17
  },
  verticalbar: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10
  },
  text: {
    color: '#007aff'
  },
  resbar: {
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row'
  }
});
