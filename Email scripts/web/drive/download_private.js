

function download_key(fileId,user)
{
    var xhr = new XMLHttpRequest();
    var url = 'https://www.googleapis.com/drive/v3/files/' + fileId + '?alt=media'

    xhr.open('GET', url, true);

}

// th is a = not here ???
//https://www.kirupa.com/html5/making_http_requests_js.htm