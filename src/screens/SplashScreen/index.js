import React from "react";
import {Container,ViewLogo,Image} from './styles';
import {Text} from '../../components';

export const  SplashScreen = () => {
  return(
    <Container>
      <ViewLogo>
      
        <Image source={require('../../../assets/ringfinal.png')}/>
       
     
      </ViewLogo>
      <Text >O Senhor Dos Anéis</Text>
       

       
    </Container>
  )
}