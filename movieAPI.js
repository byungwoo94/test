<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

    <title>MovieParsing</title>
    <script>
        var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101";
        $(function() {
            $.ajax({
                type:"GET",
                url: url,
                dataType : "json",
                success : jsonParser,
            });
            function jsonParser(data) {
                var type = data.boxOfficeResult.dailyBoxOfficeList;
                $.each(type,function(idx,item){
                document.write("<p>" + item.rank + " : " + item.movieNm + "</p>");
                });
            }
        });
    </script>
</head>
</html>