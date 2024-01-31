<h1>Para projetos typescript:</h1></br>
1. Temos que criar um projeto tipo "node", para isso deve ser instalado o "package.json";</br>
   - em qualquer terminal instalar o npm com o comando npm init -y (-y pq é na raíz);</br>
2. Temos que instalar o typescript no projeto com o comando</br>
   - npm install typescript -D (-D para o ambiente de desenvolvimento)</br>
3. Após os passos 1 e 2 podemos criar um arquivo com extenção ".ts"</br>
4. Para rodar um typescript é a mesma coisa que rodar um javascript</br>
5. Para rodar um ts deve-se traduzir para um js com o comando:</br>
   - npx tsc "src/index.ts" (caminho do arquivo), assim o conteúdo typescript é traduzido para o conteúdo javascript</br>
6. Comando para configurar o arquivo de configuração do typescript</br>
   - consultar o site "www.typescriptlang.org" é possível consultar a referênia do arquivo TSConfig.json</br>
   - para aprofundar no conhecimento ver as possibilidade na opção "playground" no site</br>
   - npx tsc --init</br>
   - Observar em "module" e colocar a pasta que deseja;</br>
   - Observar a propriedade "outDir":"./build"</br>
7. Após configurar o TSConfig deve-se rodar o "npx tsc", assim ele olha a pasta root configurada e os arquivos de saída na pasta build.</br>
8. Para executar deve-se criar no arquivo package.json um scritp dentro de "scripts" {}</br>
   -adicionar "start": "npx tsc && node build/index.js",</br>
   -para chamar o script digite "npm run start"</br>