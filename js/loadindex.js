
const url_api = 'www.aeight.cn/api/'

function load_latestarctile(){
    $.ajax({
        type: "POST",
        data: data,
        url: "https://gischaser.cn/pensionweb_backend/suggest",
        dataType: 'json',
        crossDomain: true,
        success: function(data) {
            console.log("ajax success");
            if(data.code === '500000') {
                SuggestList = data.message;
                UpdateSuggest();
                PulsingScatter();
                UpdateBounds();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ' ' + errorThrown);
        }
    })
}

function load_latestupdate(){

}

function load_hotpoint(){

}
