class Queue {
  elements
  constructor(){
    this.elements = []
  }

  size(){
    return this.elements.length;
  }

  add(item){
    this.elements.push(item);
  }

  peek(){
    return this.elements[0];
  }


 /* dequeue(){
    this.elements.splice(1, 0);
  }
  Primeiro eu utilizei o splice, que é o conhecimento que possuo
  referente a array para remover itens. Mas ao pesquisar sobre dequeue 
  entendi que a melhor alternativa para remover o primeiro elemento é
  o método shift. As duas formas retornou PASS, mas decidir subir o código 
  com o método shift.
  */

  dequeue(){
    return this.elements.shift();
  }
  
}

module.exports = Queue