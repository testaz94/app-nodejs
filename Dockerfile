from node
run mkdir /app
workdir /app
copy . /
run npm install
expose 3030
entrypoint ["npm","start"]