<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/css/layout.css">
    <script src="/assets/js/layout.js"></script>
</head>
<body>
    <jsp:include page="/layout/header.jsp"></jsp:include>
    <div class='box_coverage'>
        <div class='container'>
            <div class='row'>
                <div class=' col-md-3'>
                    <div class='menu_cate_list'>
                        <ul class="list-group category_block">
                            <c:forEach items="${requestScope.category}" var="c">
                                <li class="list-group-item text-white"><a
                                        href="category?idcategory=${c.getIdcategory()}">${c.getName()}</a></li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
                <style>
                    .post-info {
                        position: absolute;
                        bottom: 40px;
                        width: 100%;
                        color: #fff;
                        text-align: center;
                        background: rgba(19, 18, 18, 0.4);
                    }
                </style>
                <div class='slide_coverage col-md-9'>
                    <div class='owl-carousel owl-theme' id='owl-demo-pc'>
                        <div class='item'>
                            <a href='#'>
                                <img alt='giao đồ ăn đêm'
                                     src='https://1.bp.blogspot.com/-kfDKBdUISJE/WL5VLRhYojI/AAAAAAAAGGE/MNyFqR6X1og98fgdnR_QkYew2XR5Dw1ogCLcB/s1600/1.jpg' />
                            </a>
                        </div>
                        <div class='item'>
                            <a href='#'>
                                <img alt='giao đồ ăn đêm'
                                     src='https://4.bp.blogspot.com/-fUmXY2kNPcU/WL5VLnLhMwI/AAAAAAAAGGI/p2AfRNjXXbMRVsUsMw-VRLFpazWgppfKACLcB/s1600/2.jpg' />
                            </a>
                        </div>
                        <div class='item'>
                            <a href='#'>
                                <img alt='giao đồ ăn đêm'
                                     src='https://3.bp.blogspot.com/-7VW1eGbjhVg/WL5VLXfhBzI/AAAAAAAAGGA/pWTES-ZX7vwi8FJw6LD5I9VZGFImdRnNgCLcB/s1600/3.jpg' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="/layout/list.jsp"></jsp:include>
    <jsp:include page="/layout/footer.jsp"></jsp:include>
</body>
</html>