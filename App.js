import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedbackBase } from 'react-native';

class App extends Component {


  constructor (props){
    super(props);
    this.state ={
      textoFrase:'Uma pessoa bonita, inteligente e amorosa entrará em sua vida.',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [ 'Uma pessoa bonita, inteligente e amorosa entrará em sua vida.',
    'Um amigo duvidoso pode ser um inimigo camuflado.',
    'Um amigo fiel é uma defesa forte.',
    'Uma pena na mão é melhor do que um pássaro no ar.',
    'Um novo começo irá colocá-lo no seu caminho.',
    'Um amigo pede apenas seu tempo, não seu dinheiro.',
    'Um amigo é um presente que você dá a si mesmo.',
    'Um jogador não só perderá o que possui, mas também perderá o que não possui.',
    'Um ovo de ouro de oportunidade cai em seu colo este mês.',
    'Uma boa amizade costuma ser mais importante do que um romance apaixonado.',
    'Um bom momento para terminar tarefas antigas.',
    'Um palpite é a criatividade tentando lhe dizer algo.',
    'Um amigo para toda a vida logo será feito.',
    'Uma vida inteira de felicidade está à sua frente.',
    'Um coração leve carrega você em todos os momentos difíceis.',
    'Uma nova perspectiva virá com o novo ano.',
    'Uma pessoa nunca é muito velha para aprender.',
    'Uma pessoa de palavras e não de ações é como um jardim cheio de ervas daninhas.',
    'Uma agradável surpresa está esperando por você.',
    'Um lápis curto geralmente é melhor do que uma longa memória em qualquer dia.',
    'Uma pequena doação é necessária. É a coisa certa a fazer.',
    'Um sorriso é o seu tapete de boas-vindas pessoal.',
    'Uma longa jornada tranquila! Grandes Expectativas.',
    'Uma voz suave pode ser terrivelmente persuasiva.',
    'Uma vida verdadeiramente rica contém amor e arte em abundância.','Aceite algo que você não pode mudar e se sentirá melhor.',
    'A aventura pode ser uma verdadeira felicidade.',
    'O conselho é como beijar. Não custa nada e é uma coisa agradável de se fazer.',
    'Conselhos, quando mais necessários, são menos atendidos.',
    'Todo o esforço que você está fazendo, no final das contas, será recompensado.',
    'Todos os problemas que você tem passarão muito rapidamente.',
    'Tudo irá bem com seu novo projeto.',
    'Todo o seu trabalho árduo logo terá retorno.',
    'Permita que a compaixão guie suas decisões.',
    'Um conhecido do passado afetará você em um futuro próximo.',
    'Um romance agradável pode começar a aparecer.',
    'Uma pessoa importante oferecerá suporte a você.',
    'Uma polegada de tempo é uma polegada de ouro.',
    'Qualquer decisão que você tenha que tomar amanhã é uma boa decisão.',
    'Ao toque do amor, todos se tornam poetas.',
    'Tenha cuidado ou você pode cair em alguns truques hoje.',
    'A beleza em suas várias formas atrai você.',
    'Como você exige mais de si mesmo, os outros o respeitam profundamente.',
    'Acredite em si mesmo e nos outros também.',
    'Acredite que isso pode ser feito.',
    'Melhor perguntar duas vezes do que se perder uma vez.',
    'Aguarde sua hora, pois o sucesso está próximo.',
    'Grave seu nome em seu coração e não em mármore.',
    'A mudança está acontecendo em sua vida, então siga o fluxo!',
    'Competências como a sua são subestimadas.',
    'Parabéns! Você está no seu caminho.',
  ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
  
    this.setState({
      textoFrase:'"'+ this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {


    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>QUEBRAR BISCOITO</Text>
          </View>
        </TouchableOpacity>
  

      </View>
  
    );
  }
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#0dcaf0',
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize:20,
    color: '#FFFF00',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center',
    fontWeight:'bold',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor:'#FFFF00',
    borderRadius:25,
  },
  btnArea:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#FFFF00',
  },  
})

export default App;
