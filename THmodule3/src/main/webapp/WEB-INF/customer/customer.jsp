<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/5/2023
  Time: 4:01 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="/WEB-INF/assets/customer.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.min.js" integrity="sha512-7rusk8kGPFynZWu26OKbTeI+QPoYchtxsmPeBqkHIEXJxeun4yJ4ISYe7C6sz9wdxeE1Gk3VxsIWgCZTc+vX3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.5/sweetalert2.all.min.js" integrity="sha512-2JsZvEefv9GpLmJNnSW3w/hYlXEdvCCfDc+Rv7ExMFHV9JNlJ2jaM+uVVlCI1MAQMkUG8K83LhsHYx1Fr2+MuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
<div class="container customer ">
    <div class="row headsearch">
            <div class="col-4">
                <a href="/customer?action=add"><button class="col-4 btn btn-primary mybutton">Add</button></a>
            </div>
            <form class="col-8 d-flex" action="/customer" method="get">
                <input name="kw" type="text" class="form-control mysearch" value="${requestScope.kw}">
                <select name="idLevel" class="form-control mybutton">
                    <option value="-1">ALL</option>
                    <c:forEach items="${requestScope.levels}" var="l">
                        <option value="${l.getIdClass()}">${l.getName()}</option>
                    </c:forEach>
                </select>
                <button class="btn btn-primary mybutton">Search</button>
            </form>

    </div>
    <div class="customertb">
        <form action="/customer?action=delete" method="post" id="frmDelete">
            <input id="txtDeleteId" type="hidden" name="id">
        </form>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Class</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${requestScope.customers}" var="c">
                <tr>
                    <td>${c.getIdStudent()}</td>
                    <td>${c.getName()}</td>
                    <td>${c.getDate_of_birth()}</td>
                    <td>${c.getAddress()}</td>
                    <td>${c.getPhone_number()}</td>
                    <td>${c.getEmail()}</td>
                    <td>
                    <c:forEach items="${requestScope.levels}" var="l">
                        <c:if test="${c.getIdClass() == l.getIdClass()}">
                            ${l.getName()}
                        </c:if>
                    </c:forEach>
                    </td>
                <td>
                    <a href="/customer?action=edit&id=${c.getIdStudent()}"><button type="button" class="btn btn-warning">Edit</button></a>
                    <a href="javascript:;" onclick="handleDelete(${c.getIdStudent()}, '${c.getName()}')"><button type="button" class="btn btn-danger">Delete</button></a>
                </td>
            </c:forEach>
                </tr>
            </tbody>
        </table>
        <ul class="pagination justify-content-end">
            <c:if test="${requestScope.currentPage != 1}">
                <li class="page-item"><a class="page-link" href="/customer?kw=${requestScope.kw}&page=${requestScope.currentPage-1}&idLevel=${requestScope.idClass}&limit=${requestScope.limit}">Previous</a></li>
            </c:if>
            <c:forEach var="i" begin="1" end="${requestScope.noOfPages}">
                <c:choose>
                    <c:when test="${i == requestScope.currentPage}">
                        <li class="page-item active"><a class="page-link" href="/customer?kw=${requestScope.kw}&page=${i}&idLevel=${requestScope.idClasss}&limit=${requestScope.limit}">${i}</a></li>
                    </c:when>
                    <c:otherwise>
                        <li class="page-item"><a class="page-link" href="/customer?kw=${requestScope.kw}&page=${i}&idLevel=${requestScope.idClass}&limit=${requestScope.limit}">${i}</a></li>
                    </c:otherwise>
                </c:choose>
            </c:forEach>
            <c:if test="${requestScope.currentPage < requestScope.noOfPages}">
                <li class="page-item"><a class="page-link" href="/customer?kw=${requestScope.kw}&page=${requestScope.currentPage+1}&idLevel=${requestScope.idClass}&limit=${requestScope.limit}">Next</a></li>
            </c:if>
        </ul>
    </div>
</div>
<script>
    function handleDelete(id, title) {
        document.getElementById("txtDeleteId").value = id;
        Swal.fire({
            title: 'Bạn có muốn xóa?',
            text: title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            confirmButtonText: 'Yes!'
            if (result.isConfirmed) {
                document.getElementById("frmDelete").submit();
            }
        })

    }
</script>
</body>
</html>
