var listaFilmes= ["https://play-lh.googleusercontent.com/QpSySjrB8JwVdpkt4FRW1kF1R8amrQy1wXi_U9u1o0opJqZEC_IRl42Iu3ejJgSPs_Q","https://lh3.googleusercontent.com/-aGmK5ReqUnw/Ybt9mUR0NcI/AAAAAAAAN4k/eMCuN6c81pgC63uQOWe31woGFb7jmxA0ACNcBGAsYHQ/s16000/homem-aranha%2Bsem%2Bvolta%2Bpra%2Bcasa.png","https://files.mormonsud.net/wp-content/uploads/2023/01/the-chosen.jpg","https://i.ytimg.com/vi/SHFSHmlzw_g/maxresdefault.jpg"];


//listaFilmes [0]= "https://play-lh.googleusercontent.com/QpSySjrB8JwVdpkt4FRW1kF1R8amrQy1wXi_U9u1o0opJqZEC_IRl42Iu3ejJgSPs_Q"
//listaFilmes[1] = "https://lh3.googleusercontent.com/-aGmK5ReqUnw/Ybt9mUR0NcI/AAAAAAAAN4k/eMCuN6c81pgC63uQOWe31woGFb7jmxA0ACNcBGAsYHQ/s16000/homem-aranha%2Bsem%2Bvolta%2Bpra%2Bcasa.png"

for(var i=0; i< listaFilmes.length; i = i +1){
    document.write("<img src=" + listaFilmes[i] + ">")
}


