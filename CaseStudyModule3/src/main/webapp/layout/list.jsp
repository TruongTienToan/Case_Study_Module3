<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-white">
<div class="container">
    <div class="row">
        <div class="col-9">
            <nav class="navbar navbar-inverse d-flex">
                <nav class="nav nav-pills nav-fill">
                    <a class="nav-item nav-link active bg-warning" href="/home">Món ăn</a>
                    <c:forEach items="${requestScope.category}" var="c">
                        <a class="nav-item nav-link text-muted"
                           href="category?idcategory=${c.getIdcategory()}">${c.getName()}</a>
                    </c:forEach>
                </nav>
            </nav>

            <div class="menufood">
                <div class="row">
                    <c:forEach items="${requestScope.product}" var="p">
                        <div class="card col-sm-3" style="width: 18rem;">
                            <a href="/productdetail?idproduct=${p.getIdproduct()}">
                            <img class="card-img-top" src="${p.getImage()}" alt="Card image cap" width="200px" height="200px">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${p.getName()}</h5>
                                <p class="card-text">${p.getPrice()}</p>
                                <a href="/productdetail?idproduct=${p.getIdproduct()}" class="btn btn-warning">Mua ngay</a>
                            </div>
                        </div>
                    </c:forEach>
                </div>
            </div>
        </div>
        <div class="col-3">
            <ul class="list-group">
                <li class="list-group-item active" style="font-family: 'Roboto', sans-serif; font-size: 17px;">HỖ TRỢ
                    TRỰC TUYẾN
                </li>
                <li class="list-group-item">
                    <p style="color: grey; font-size: small;">Tư vấn bán hàng 1</p>
                    <span style="font-size: small;">Mr. Hòa: 097 1239 671</span>
                </li>
                <li class="list-group-item">
                    <p style="color: grey; font-size: small;">Tư vấn bán hàng 2</p>
                    <span style="font-size: small;">Mr. Trần: 097 1539 681</span>
                </li>
                <li class="list-group-item">
                    <p style="color: grey; font-size: small;">Email liên hệ</p>
                    <span style="font-size: small;">truongtientoan2308@gmail.com</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>