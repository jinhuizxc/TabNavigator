/**
 * 侧滑页显示
 *
 *
 * dataSource ListViewDataSource
 * ListView.DataSource实例（列表依赖的数据源）
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    BackHandler,
} from 'react-native';
import _TextInput from './app/components/_TextInput'
import {px3dp} from './app/util/ScreenUtil'
const MENU=['我的消息','积分商城','会员中心','在线听歌免流量','听歌识曲',
    '主题换肤','夜间模式','定时停止播放','音乐闹钟','驾驶模式'];

export default class MenuList extends Component{

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!==r2});
        this.state={
            dataSource:ds.cloneWithRows(MENU),
        }
    }
    /**
     每项点击
     **/
    onSelectItem(position){
        var func=this.props.onMenuItem;
        func&&func(position);
    }

    // 渲染header
    renderHeader(){
        return(
            //切记：height：null width:null 要设置,否则height width会图片原有的宽度
            <Image resizeMode='cover' style={styles.headImg}
                   source={require('./app/images/topinfo_ban_bg.jpg')}>
                <View style={[styles.headOpacity]}/>
                <View style={[styles.headImg,{justifyContent:'center',alignItems:'center'}]}>
                    <View style={styles.headText}>
                        <Text style={{color:'#e3e3e2'}}>登陆网易云音乐</Text>
                        <Text style={{color:'#e3e3e2',marginTop:5}}>320K高音质无限下载,手机电脑多端同步</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{marginTop:20}} onPress={()=>console.log()}>
                        <View style={styles.login}>
                            <View style={styles.input_wrap}>
                                <_TextInput
                                    placeholder='编辑框'
                                    addstyle={{
                                        width: px3dp(280)
                                    }}
                                />
                                <View style={styles.input_hr_last}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image>
        )
    }

    // 渲染图片
    renderRow(data, selectionId,rowId){
        var image;
        switch (rowId){
            case '0':
                image=require('./app/images/opmenu_icn_msg.png');
                break;
            case '1':
                image=require('./app/images/topmenu_icn_store.png');
                break;
            case '2':
                image=require('./app/images/topmenu_icn_member.png');
                break;
            case '3':
                image=require('./app/images/topmenu_icn_free.png');
                break;
            case '4':
                image=require('./app/images/topmenu_icn_identify.png');
                break;
            case '5':
                image=require('./app/images/topmenu_icn_skin.png');
                break;
            case '6':
                image=require('./app/images/topmenu_icn_night.png');
                break;
            case '7':
                image=require('./app/images/topmenu_icn_time.png');
                break;
            case '8':
                image=require('./app/images/topmenu_icn_clock.png');
                break;
            case '9':
                image=require('./app/images/topmenu_icn_vehicle.png');
                break;
            default:
                break;
        }

        return(
            <View style={{flex:1}}>
                <TouchableHighlight underlayoutColor='#ddd' onPress={()=>this.onSelectItem(rowId)}>
                    <View style={styles.item}>
                        <Image style={{width:40,height:40}} source={image}/>
                        <Text style={{color:'#333333',marginLeft:5,fontSize:16}}>{data}</Text>
                    </View>
                </TouchableHighlight>
                {rowId===3?<View style={{backgroundColor:'#d8dadb', height:1/PixelRatio.get()}}/>:null}
            </View>
        )
    }



    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    style={{backgroundColor:'#ebedee'}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={this.renderHeader.bind(this)}/>

                <View style={{flexDirection:'row',height:46,alignItems:'center'}}>
                    <TouchableHighlight style={{flex:1}} underlayColor='#ddd' onPress={()=>alert('设置')}>
                        <View style={styles.btn}><Text>设置</Text></View>
                    </TouchableHighlight>
                    <View style={{backgroundColor:'#d8dadb', width:1/PixelRatio.get(),height:20,}}/>
                    <TouchableHighlight style={{flex:1}} underlayColor='#ddd'
                                        onPress={()=>{
                                            Alert.alert('退出应用','确定要退出吗?',
                                                [
                                                    {text:'确定',onPress:()=>{BackHandler.exitApp()}},
                                                    {text:'取消',onPress:()=>{}}
                                                ]
                                            );
                                        }
                                        }>
                        <View style={styles.btn}><Text>退出应用</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    headImg:{
        height:160,
        width:300,
    },
    headOpacity:{
        height:160,
        width:300,
        backgroundColor:'#000',
        opacity:0.2,
        position:'absolute',
    },
    headText:{
        alignItems:'center',
        justifyContent:'center',
    },
    login:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:3,
        height:33,
        width:142,
        alignItems:'center',
        justifyContent:'center',
    },
    item:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    input_wrap: {
        flexDirection: 'column',
    },
    input_hr_last: {
        height: px3dp(6),
        width: px3dp(280),
        backgroundColor: '#456675'
    },
});
