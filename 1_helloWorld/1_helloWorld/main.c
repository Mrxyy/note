//
//  main.c
//  1_helloWorld
//
//  Created by 熊洋洋 on 2021/6/2.
//

#include <stdio.h>
#include "a.h"

int main(int argc, const char * argv[]) {
// 声明变量，exters向上找
    extern int a;
    printf("%d \n",a);
   
// 运算符
    int x = 1;
    printf("%d \n",sizeof(x));
    printf("%d \n",&x);
    printf("%d \n",*&x);
    return 0;
// 存储类
    regist y = 1; // 放到寄存器而不是内存中
    static b = 2; // 不会被销毁
}
