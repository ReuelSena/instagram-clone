import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import options from '../../../src/assets/options.png'
import like from '../../../src/assets/like.png'
import comment from '../../../src/assets/comment.png'
import send from '../../../src/assets/send.png'
import save from '../../../src/assets/save.png'

function Feed(){

    const [text, setText] = useState('')

    const onSave = async (id) => {
        try {
          await AsyncStorage.setItem(id, text);
          setComentarios([...comentarios, ...text])
        } catch (error) {
          // Error saving data
        }
      }

      const MAX_LENGTH = 250;

const posts = [
   {
       id: '1',
       foto: '',
       autor: 'reuelsena',
       picture_url: 'https://blog.bycast.com.br/wp-content/uploads/2019/06/294576-mesa-de-som-para-estudio-de-radio-conheca-as-melhores.jpg',
       likes: '124',
       descricao: 'Sistema de Som alinhado <3',
       hashtags: '#light',
       local: 'Salvador Eventos',
       comentario: ''
   },
   {
    id: '2',
    foto_url: 'data:image/png;base64,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',
    autor: 'rsenalight',
    picture_url: 'https://img.olx.com.br/images/30/300051080133660.jpg',
    likes: '752',
    descricao: 'Iluminação para clipe de dupla sertaneja',
    hashtags: '#light',
    local: 'Arena Footbal - Dias Dávila'
},
{
    id: '3',
    
    autor: 'aledecor',
    picture_url: 'https://lh3.googleusercontent.com/proxy/HEg8VSB9taI0PkVQGt9SCe3B9iym9JRMhFuNUOHGTiaZg7pvLOV5YUN5sCmhaJ-2HWvnvR5DaRFnLaFE4Oenb3kVpW4sfiMnSK61-ACjMH8M-a7AVzvLBHu1BtvoOJ7dlUvdph6AEW4-DQ',
    likes: '359',
    descricao: 'Bailde da terceira idade',
    hashtags: '#light',
    local: 'Espaço Alê Decor'
},
{
    id: '4',
    
    autor: 'leandrovonhaack',
    picture_url: 'https://cdn-sites-images.46graus.com/files/photos/080c7886/fce56989-7343-4637-b0fe-9371b4df83d3/haack0025-768x505.jpg',
    likes: '455',
    descricao: 'O Amor descrito em uma fotografia',
    hashtags: '#light',
    local: 'Cascalheira - Camaçari'
},
]

function renderItem({item: post}){
return (
 <View style={styles.post}>
     <View style={styles.cabecalhoPost}>
         
         <View style={styles.userInfo}>
            <Text style={styles.autor}>{post.autor}</Text>
            <Text style={styles.local}>{post.local}</Text>
         </View>

         <View style={styles.opcoesPost}>
             <TouchableOpacity>
             <Image source={options} ></Image>
             </TouchableOpacity>
         </View>
    </View>
   
    <View> 
         <Image style={styles.postUrl} source={{uri:post.picture_url }}/>  
     </View>

     <View style={styles.footer}>
       <View style={styles.actions}>
            <View style={styles.leftActions}>
                <TouchableOpacity style={styles.action}>
                    <Image source={like} ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Image source={comment} ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Image source={send} ></Image>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity>
                <Image source={save} ></Image>
            </TouchableOpacity>
            </View>
       </View>

        <Text style={styles.likes}>{post.likes} likes</Text>
        <Text style={styles.descricao}>{post.descricao} </Text>
            <TextInput
              multiline={true}
              onChangeText={(text) => setText(text)}
              placeholder={"Comentários"}
              style={[styles.text]}
              maxLength={MAX_LENGTH}
              value={text}/>
     
    </View > 
 </View>
);
}

return(
  <View>
      <FlatList 
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(renderItem)}
      />
    
  </View>  
)

}



const styles = StyleSheet.create({

    post:{
      marginVertical: 20  
    },

    cabecalhoPost:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    userInfo:{

    },

    opcoesPost: {

    },

    autor:{
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: -4
    },

    local:{
        fontSize:15,
        color: '#666',
        marginBottom: 5
    },
    
    postUrl:{
        width: '100%',
        height: 400
    },

    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
         
    },

    leftActions:{
        flexDirection:'row'
    },

    action:{
        marginRight: 8
    },

    footer:{
        paddingHorizontal: 15
    },

    likes:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    descricao: {
        fontSize: 15,
        color:'#000'
    },

    comment: {
        color:'#002d5e'
    },

})

export default Feed;