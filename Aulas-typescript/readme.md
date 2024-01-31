Para projetos typescript:
1º) Temos que criar um projeto tipo "node", para isso deve ser instalado o "package.json";
    ->em qualquer terminal instalar o npm com o comando npm init -y (-y pq é na raíz);
2º) Temos que instalar o typescript no projeto com o comando
    -> npm install typescript -D (-D para o ambiente de desenvolvimento)
3º) Após os passos 1 e 2 podemos criar um arquivo com extenção ".ts"

4º) Para rodar um typescript é a mesma coisa que rodar um javascript
5º) Para rodar um ts deve-se traduzir para um js com o comando:
    -> npx tsc "src/index.ts" (caminho do arquivo), assim o conteúdo typescript é traduzido para o conteúdo javascript
6º) Comando para configurar o arquivo de configuração do typescript
    -> consultar o site "www.typescriptlang.org" é possível consultar a referênia do arquivo TSConfig.json
    -> para aprofundar no conhecimento ver as possibilidade na opção "playground" no site
    -> npx tsc --init
    -> Observar em "module" e colocar a pasta que deseja;
    -> Observar a propriedade "outDir":"./build"
7º) Após configurar o TSConfig deve-se rodar o "npx tsc", assim ele olha a pasta root configurada e os arquivos de saída na pasta build.
8º) Para executar deve-se criar no arquivo package.json um scritp dentro de "scripts" {}
    ->adicionar "start": "npx tsc && node build/index.js",
    ->para chamar o script digite "npm run start"