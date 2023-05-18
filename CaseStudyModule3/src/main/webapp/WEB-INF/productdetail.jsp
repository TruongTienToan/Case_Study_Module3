<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html class="no-js" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Product details</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
  <script src="/assets/js/layout.js"></script>
  <!-- CSS
  ========================= -->

  <link rel="stylesheet" href="/assets/css/layout.css">

  <!-- Plugins CSS -->
  <link rel="stylesheet" href="./assets/css/plugins.css">

  <!-- Main Style CSS -->
  <link rel="stylesheet" href="./assets/css/style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.5/sweetalert2.all.min.js"
          integrity="sha512-2JsZvEefv9GpLmJNnSW3w/hYlXEdvCCfDc+Rv7ExMFHV9JNlJ2jaM+uVVlCI1MAQMkUG8K83LhsHYx1Fr2+MuA=="
          crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>

<body>

<!-- Main Wrapper Start -->
<!--Offcanvas menu area start-->
<div class="off_canvars_overlay"></div>
<jsp:include page="/layout/header.jsp"/>



<!--product details start-->
<div class="product_details" style="margin-top: 150px; padding-top: 30px">
  <div class="container">

    <div class="row">
      <div class="col-lg-5 col-md-5">
        <div class="product-details-tab">

          <div id="img-1" class="zoomWrapper single-zoom">
            <a href="#">
              <img id="zoom1" src="${ProductData.getImage()}" data-zoom-image="${ProductData.getImage()}"
                   alt="product">
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-7 col-md-7">
        <div class="product_d_right">
          <c:if test="${requestScope.message !=null}">
            <script>
              window.onload = function () {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Thêm sản phẩm thành công!',
                  showConfirmButton: false,
                  timer: 1500
                })
              };
            </script>
          </c:if>
          <form action="/productdetail?idproduct=${ProductData.getIdproduct()}" method="POST">
            <p style="color: red; align-content: center;">
              ${requestScope.error}
            </p>
            <h1>${ProductData.getName()}</h1>
            <div class="product_price">
              <span class="current_price" style="text-align: left">${ProductData.getPrice()}</span>
            </div>
            <div class="product_desc">
              <p>${ProductData.getDescription()}</p>
            </div>

            <div class="product_variant quantity">
              <label>quantity</label>
              <input min="1" max="${ProductData.getQuantity()}" name="quantity" type="number" value="1" style="text-align: center">
              <a href="#"><button class="button" >Thêm vào giỏ hàng</button></a>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!--product details end-->
<!--product info end-->
<!--product section area end-->

<!--footer area start-->
<jsp:include page="/layout/footer.jsp"></jsp:include>
<!--footer area end-->

<!-- Plugins JS -->
<script src="assets/js/plugins.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!-- Main JS -->
<script src="assets/js/main.js"></script>
<script>
  //            $("#submit").click(function()){
  //            swal({
  //            title: "Thanks for Contacting us..!",
  //                    text: "We Will Contact You Soon...",
  //                    icon: "success",
  //            })
  //            }
</script>
</body>

</html>