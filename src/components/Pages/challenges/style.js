import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,  
        backgroundColor: config.white, 
    },
    rightCondent:{
        width: '100%'
    },
    accordin:{
        backgroundColor: '#0C3033',
        borderRadius: 6,
        height: 56,
        width: '100%',
        paddingLeft: 16,
        paddingVertical: 12,
        marginBottom: 8,
    },
    newView:{
      height: 66,
    },
    accordinBloks:{
        backgroundColor: 'red',
        height: 50
    },
    accordinTitle:{
        fontSize:18,
        fontFamily:config.fontSecondory,
        color:'#E98EA4',
        lineHeight:15,
    },
    range:{
        fontSize:14,
        fontFamily:config.fontSecondory,
        textTransform:'uppercase',
        color:'#E98EA4',
        lineHeight:15,
    },
    topSafeArea: {
        backgroundColor: "#5862E9",
    },
    menuColor: {
        backgroundColor: "#202840",
    },  
    topSafeAreas: {
        backgroundColor: "#0C3033",
    },
    bGCol: {
        backgroundColor: "#0C3033",
    },
    profileTitle:{
        fontSize:11,
        lineHeight: 15,
        textTransform:'uppercase',
        fontFamily:config.fontSecondory,
        color: '#525252',
        paddingBottom: 3, 
    },
    profileName:{
        color:'#F45B56',
        paddingBottom: 36
    },
    p: {
        fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 5,  
    },

    text: {
        color: config.white,
        fontSize: 20,
        lineHeight: 24,
        fontFamily:config.fontPrimary,
    },    
    p: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 20,
    },
    boldtext: {
        color: config.white,
        fontSize: 28,
        lineHeight: 34,
        fontFamily:config.fontPrimary,
        paddingTop: 38
    },
    titleBlk:{
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      paddingBottom: 10,
      width:'100%',
      color: config.white,
      borderBottomWidth:1,
      borderBottomColor:config.white,
    },
    condentBorder:{
      borderBottomColor:'#e9e9e9',
      borderBottomWidth:0.75,
      marginBottom: 30,
      paddingBottom: 20
    },
    eventsDetails:{
        paddingHorizontal: 25
    },
    imgBlk: {
        paddingRight: 70,
        paddingLeft: 30,
        paddingTop: 20
    },
    normalText:{
        color: config.white,
        fontSize: 15,
        lineHeight: 18,
        fontFamily:config.fontSecondory,
    },
    normalTexts:{
       fontWeight:'normal', 
       paddingBottom: 40
    },
    normalTextes:{
       color:'#000'
    },
    blackText: {
        color:'#000',
        fontSize:22,
        lineHeight:26,
        fontFamily:config.fontPrimary,
        paddingBottom: 18,
    },
    events:{
        backgroundColor:'#FAF7F7',
        borderRightWidth:20,
        borderRightColor:config.white,
        borderRadius:9, 
        width: '50%',
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
        paddingTop:32,
        paddingHorizontal: 20,
        paddingBottom:22,
        display: 'flex',
        alignItems:'center'
    },
    bodySpace:{
        paddingRight: 20,
        paddingLeft: 24,
    },
    body:{
        backgroundColor:config.white,
        paddingTop: 20,
        paddingBottom: 90,
        paddingLeft:25,
        paddingRight: 25
    },
    blockEvent:{
        flex: 0,
        flexDirection:'row',
        paddingBottom: 13,
        flexWrap:'wrap',  
         borderBottomColor:'#e9e9e9',
        borderBottomWidth:0.75,
        marginBottom:13      
    },
    tabBody:{
      flex: 0,
      flexDirection:'row', 
      paddingVertical: 30, 
    },
    deActive: {
        backgroundColor: '#ededed',
    },
    activeColor:{
        backgroundColor:'#e98ea4',
    },
    activeTexts:{
        color:'#0c3033',
    },
    activeBoxs:{
        borderTopColor: '#e98ea4',
    },
    activeBox:{
      position: 'absolute',
      bottom: -9,
      // left:'60%',
      // transform: [{ translateX: '25%' }],
      borderTopWidth:10,
      borderTopColor: '#0c3033',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftWidth:10,
      borderRightWidth:10,
      justifyContent: 'center', alignItems: 'center'
    },
    activeText:{
       fontFamily:config.fontPrimary,
    },
    tabBlk:{
      alignItems: 'center',
      backgroundColor: '#0c3033',
      borderRadius: 3,
      minWidth: 65,
      height: 29,
      textAlign: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginRight: 5,
      paddingHorizontal: 15,
    },
    tabItem:{
      color:'#e98ea4',
      fontFamily: 11,
      lineHeight: 15,
      fontFamily: config.fontSecondory,
    },
    tabItems:{
      color:'#0c3033',
    },
    removeBorer:{
        borderTopWidth: 0,
        borderBottomColor:'#e9e9e9',
        borderBottomWidth:0.75,     
    },
    profile:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop: 30,
    },
    bG:{
        backgroundColor: "#5862E9",
        marginBottom: 23
    },
    eventTitle:{
        fontSize:18,
        lineHeight: 20,
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5,
        paddingRight: 10,
        width: '90%'
    },
    eventDate:{
        color:'#525252',
        fontSize:18,
        lineHeight: 22,
        fontFamily:config.fontSecondory,
    },
    workTitle:{
        color:config.white,
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontSecondory,
        paddingBottom: 25,
        width:'90%'
    },
    workDetails:{
        color:'#000000',
        fontSize:12,
        lineHeight: 14,
        fontFamily:config.fontSecondory,
        paddingBottom: 50
    },
    workOuts:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',     
    },
    workOutsBlk:{
        backgroundColor:config.white,
        borderRightWidth:20,
        borderRightColor:'#FAF7F7', 
        width: '50%',
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
        display: 'flex',
        alignItems:'center',
        height: 80,
    },
    workOutsBg:{
        backgroundColor:'#FAF7F7',
        paddingHorizontal:40,
        paddingBottom: 58,
        paddingTop:40,
    },
    footer:{
        backgroundColor:'#44C0C6',
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        padding: 20,
        height: 100
    },
    list: {
        flexDirection:'column',
        alignItems: 'center'
    },
    tabs: {
        fontSize: 12,
        lineHeight: 14,
        color:config.white,
        fontFamily:config.fontPrimary,
    },
     tabSec:{
        paddingTop: 33,
        marginBottom: 20,
        flexDirection: 'row',
    },
    tabBlock:{
        backgroundColor:'#FAF7F7',
        borderRadius: 4,
        minWidth:100,
        height: 40,
        textAlign:'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        flex: 1
    },
    tabtext:{
        fontSize: 16,
        lineHeight: 19,
        color:'#44c0c6',
        fontFamily:config.fontPrimary, 
    },
    activeTab: {
        backgroundColor:'#44c0c6',
    },
    sectionTitle: {
        fontFamily:config.fontPrimary, 
        fontSize: 22,
        lineHeight: 26,
        color: '#000',
        paddingBottom: 20,        
    },
    Textborder:{
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
    },
    sectionText: {
        fontFamily:config.fontPrimary, 
        fontSize: 15,
        lineHeight: 20,
        color: '#44c0c6'
    },
    sectionBorder: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
    },
    item: {
        alignItems: 'center',
        backgroundColor: '#0c3033',
        borderRadius: 6,
        paddingHorizontal: 16,
        minHeight: 66,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-around',
    },
    borderTop:{
        borderTopColor: '#D3D3D3',
        borderTopWidth: 0.5,
    },
    activity:{
        paddingBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrowBox:{
        borderColor:'#44C0C6',
        borderWidth:1,
        width: 24,
        height: 24
    },
    textAlign:{
        textAlign: 'right',
        paddingRight: 8
    },
    arrowText:{
        color: '#44C0C6',
        paddingLeft: 8,
        width: 80
    },
    singleLine:{
        flexDirection: 'row',
        alignItems:'center',
        paddingTop: 32

    },
    noborder:{
        borderBottomWidth: 0,
        paddingVertical: 13,
        marginBottom: 15,
    },
  title: {
    fontSize: 18,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#44C0C6',
    paddingBottom: 0,
    marginRight: 10,
  },
  name: {
    fontSize: 11,
    fontFamily:config.fontSecondory,
    lineHeight: 16,
    color: '#525252',
    textTransform:'uppercase',
  },
  speedText: {
    fontSize: 16,
    fontFamily:config.fontPrimary,
    lineHeight: 15,
    color: '#525252',
  },
  smallText: {
    fontSize: 12,
    fontFamily:config.fontPrimary,
    lineHeight: 15,
    color: '#525252',
  },
  textColor:{
    color:'#e98ea4'
  },
  info: {
    backgroundColor: '#134a4e',
    borderRadius: 3,
    paddingTop: 7,
    paddingHorizontal: 8,
    textAlign: 'center',
    flex: 0,
    fontSize: 18,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#e98ea4',
    height: 28,
    minWidth: 104,
    marginRight: 10,
  },
  count: {
    fontSize: 14,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#0c3033'
  },
  lead: {
    fontSize: 11,
    fontFamily:config.fontSecondory,
    lineHeight: 16,
    color: '#525252',
    textAlign:'right'
  },
  roundBlk:{
    backgroundColor: '#e98ea4',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 31,
    height: 32,
    marginRight: 10
  },
   roundBlks:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:config.white,
        borderRadius:100,
        display: 'flex',
        height: 82,
        marginRight: 20,
        width: 82,
    },
    block:{
       display: 'flex',
       flexDirection:'row',
       alignItems: 'center'
    },
    textBottomspace:{
        marginBottom:8,
    },
    bottomSpace:{
        paddingBottom: 25,
        alignItems:'flex-end'
    },
    spaceArea:{
        paddingHorizontal: 25,
    },
    eventWidth:{
        width: '50%',
    },
    rightCondent:{
        width: '60%'
    },
    editBlock:{
        position: 'absolute',
        top: 0,
        right: 25,
        zIndex: 999
    },
    imgArea: {
        width: 32, 
        height: 32,
        marginRight: 16,
        opacity: 0
    },
});