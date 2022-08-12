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

Um _Docker Container_ é onde a aplicação fica encapsulada e todos os
_Containers_ são baseados em uma [_Image_](#o-que-é-docker-image) (Imagem). Os
_Containers_ são isolados e independentes uns dos outros, isso quer dizer que é
possível ter diversos _Containers_ onde cada um tem as suas dependências,
configurações, bibliotecas e etc, sem afetar outros _Containers_. Então se um
dos _Containers_ ocorrer um erro, os outros não serão afetados.

Os _Containers_ são ambientes que possuem todas dependências necessárias para
rodar a aplicação. Isso garante que se dois ou mais desenvolvedores estiverem
trabalhando no mesmo projeto, eles não terão problemas de versões de pacotes,
por exemplo, onde um desenvolvedor tem a versão 1.2.3 e outro a versão 1.5.0,
pois todos estarão usando exatamente as mesmas versões, independente da máquina
ou do sistema operacional.

## O que é _Docker Image_?

Um _Docker Image_ é o que define como os _Containers_ devem rodar. Ele vai ter
o sistema operacional, pastas, arquivos, programas e etc. Um _Container_ só irá
ser executado quando a _Image_ for instanciada. Em resumo, o _Image_ é como se
fosse uma classe e os _Containers_ extendem essa classe.

O Docker possui o [Docker Hub](https://hub.docker.com/search?q=) onde é possível
encontrar diversas imagens para baixar e usar.

## Comandos úteis

Iniciar o Docker:

```sh
service docker start
```

Listar os _Containers_ ativos:

```sh
docker ps
```

Listar todos os _Containers_:

```sh
docker ps -a
```

Parar um _Container_ específico:

```sh
docker stop <CONTAINER_ID>
```

Deletar um _Container_:

```sh
docker rm <CONTAINER_ID>
```

Baixar um _Image_:

```sh
docker pull <IMAGE_NAME>
```

Listar as _Images_ instaladas:

```sh
docker images
```

Deletar um _Image_, porém um _Image_ só pode ser deletado se ele não tiver
_Containers_ que são baseados nele. Então é preciso deletar primeiro os
_Containers_ baseados nessa _Image_ e só depois é possível deletar o _Image_.

```sh
npm rmi <IMAGE_NAME>
```

Alternativamente, é possível forçar que um _Image_ seja deletado:

```sh
npm rmi <IMAGE_NAME> -f
```
