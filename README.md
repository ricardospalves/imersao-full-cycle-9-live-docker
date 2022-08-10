# Imersão Full Stack e Full Cycle 9 - Live Docker

Live ensinando como criar uma aplicação do zero até o _deploy_ com _Docker_.
Essa live é relacionada a **Imersão Full Stack & Full Cycle 9.0**.

[Docker do Zero: Criando uma aplicação com Docker até o Deploy no _YouTube_](https://www.youtube.com/watch?v=F_pgDkErFIk).

## O que é _Docker_?

_Docker_ é basicamente um gerenciador de
[_Containers_](#o-que-é-docker-container) e empacota toda a sua aplicação dentro
dele. O _Docker_ garante que uma aplicação funcione da mesma forma independente
do ambiente em que está. Ou seja, não importa se uma aplicação está rodando num
PC ou servidor Windows, Linux ou MAC, ele funcionará exatamente da mesma forma.
Isso acaba com a famosa frase "na minha máquina funciona".

## O que é _Docker Container_?

Um _Docker Container_ é onde a aplicação fica encapsulada. Os _Containers_ são
isolados e independentes uns dos outros, isso quer dizer que é possível ter
diversos _Containers_ onde cada um tem as suas dependências, configurações,
bibliotecas e etc, sem afetar outros _Containers_. Então se um dos _Containers_
ocorrer um erro, os outros não serão afetados.

Os _Containers_ são ambientes que possuem todas dependências necessárias para
rodar a aplicação. Isso garante que se dois ou mais desenvolvedores estiverem
trabalhando no mesmo projeto, eles não terão problemas de versões de pacotes,
por exemplo, onde um desenvolvedor tem a versão 1.2.3 e outro a versão 1.5.0,
pois todos estarão usando exatamente as mesmas versões, independente da máquina
ou do sistema operacional.
