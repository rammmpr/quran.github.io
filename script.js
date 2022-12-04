console.log("coba");

$.getJSON('https://equran.id/api/surat', function (data) {
                if (data != null) {
                for (let i = 0; i < data.length; i++) {
                    var nomor = data[i]['nomor'];
                    var nama_latin = data[i]['nama_latin'];
                    var nama = data[i]['nama'];
                    var turun = data[i]['tempat_turun'];
                    var arti = data[i]['arti'];

                    $('#surah').append(`
                        <div class="container  bg-white mt-2" onClick="surah(`+nomor+`)">
                <div class="row align-items-center">
                <div class="col-2">
                <div class="nomor">
                `+nomor+`
                </div>
                </div>
                <div class="col-6">
                    <b>`+nama_latin+`</b><br>
                    <small style="font-size:12px">`+turun+`-`+arti+`</small> 
                </div>
                <div class="col-4 fw-bold" style="text-align:right;color: #0D89ED;">
                    `+nama+`      </div>
                </div>

            </div>
                                `)
                }

                }

            });

function surah(nomor){
    $.getJSON('https://equran.id/api/surat/'+nomor, function (data) {
        $('#detail').empty();
                var det = document.getElementById('sur').classList.remove('d-none');
                document.getElementById('judul').innerText = data['nama_latin'];
                document.getElementById('nama_surah').innerText = data['nama_latin']
                document.getElementById('Turun').innerText = data['tempat_turun'] + '-' + data['arti'];
                document.getElementById('audio').src = data['audio'];
                    var ayat = data['ayat'];
                

                for (let i = 0; i < ayat.length; i++) {
                    

                    var nomor = ayat[i]['nomor'];
                    var arab = ayat[i]['ar'];
                    var terjemah = ayat[i]['tr'];
                    var arti = ayat[i]['idn'];
                    
                    document.getElementById('surah').classList.add('d-none');

                    $('#detail').append(`
<div class="container  bg-white mt-2" >
                <div class="row align-items-center">
                <div class="col-1">
                <div class="nomor">
                `+nomor+`
                </div>
                </div>
                
                <div class="col-11 " style="">
                    <div style="text-align:right;" class="mt-1">`+arab+`</div>    
                    <div style="font-size: 12px;text-align:left;color:gray" class="mb-1">`+arti+`</div>  
                </div>
                </div>

            </div>
            `)
                }

                

            });

}
function play(){


document.getElementById('audio').play();
document.getElementById('play').innerHTML = ' <i class="bi bi-pause-circle-fill" onclick="pause()"></i>';

}
function pause() {
    document.getElementById('audio').pause();
document.getElementById('play').innerHTML = ' <i class="bi bi-play-circle-fill" onclick="play()"></i>';
}

function tutup(){
    pause()
    document.getElementById('surah').classList.remove('d-none');
    document.getElementById('sur').classList.add('d-none');
}