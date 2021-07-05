main(){
  print('class study');
  Dog xh = Dog('xh',1);
  print("继承成功："+xh.name);
  print("computer 成功：" + xh.Spend.toString());
  xh.eat('meat');
}

class basicAction{
  void eat(String food){
    print('eat' + food);
  }
}

class basicFeature{
   bool isLive = true;
}

class Animal{
  String name;
  Animal(this.name){}
}

class Dog extends Animal with basicAction,basicFeature{
  int age;
  Dog(String name,this.age):super(name){}
  num get Spend => this.age*1.5;
}