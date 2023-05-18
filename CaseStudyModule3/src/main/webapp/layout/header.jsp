<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
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
    <script src="layout.js"></script>
</head>

<body>

<header>
    <div class='available_pc'>
        <div class='top_header'>
            <div class='container'>
                <div class='row'>
                    <div class='logo_pc col-md-3'>
                        <a href='#'>
                            <img alt='giao đồ ăn đêm'
                                 src='https://4.bp.blogspot.com/-BeQXp0pMHoY/WL5OleWp9yI/AAAAAAAAGFs/S2yFcbMUUKQfESotIysT2EW5WJyhqTL4wCLcB/s1600/logo.png'
                                 style='top: -20px;' />
                        </a>
                    </div>
                    <div class=' col-md-4'>
                        <div class='form_search_pc'>
                            <form action="search" class='search-box-lg' method="post" role='search'>
                                <div id='hoatranwebserach'>
                                    <input class='input-search-pc' maxlength='70' name="txt"
                                                                  placeholder='Tìm kiếm...' type="text" value="" />
                                    <button class='btn-search-pc' style=' border: none;' type='submit'>
                                        <span class='fa fa-search'></span>
                                    </button>
                                </div>
                                <div id='hoatranweb'></div>
                            </form>
                        </div>
                    </div>
                    <div class='box_account col-md-3'>
                        <div class='telephone'><img alt='call'
                                                    src='https://1.bp.blogspot.com/-Ll29WDv-rcU/WLexsjto2dI/AAAAAAAAF98/BadniXePBoA97YVZEfgLw4kxTad7XCJSwCLcB/s1600/telephone.png' />
                        </div>
                        <span class='call'> Liên hệ với chúng tôi</span>
                        <span class='call-no'>
                HOTLINE: 097 1539 681
              </span>
                    </div>
                    <div class='box_cart col-md-2'>
                        <a href='#'>
                            <img alt=''
                                 src='https://2.bp.blogspot.com/-KQ5xz-iQhQw/WK6J-qY2XyI/AAAAAAAAFuQ/xBy4a-BozH47cWa293TcCU0YpMc8yiHKwCLcB/s200/favicon.png' />
                            <style>
                                .item-count {
                                    font-size: 13px;
                                    position: absolute;
                                    top: -10px;
                                    left: 30px;
                                    background-color: #ff5501;
                                    border-radius: 50%;
                                    width: 23px;
                                    height: 23px;
                                    text-align: center;
                                    line-height: 23px;
                                }
                            </style>
                            <span class='item-count'>
                  <span class='simpleCart_quantity'>0</span></span>Giỏ hàng
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class='nav_main_menu'>
            <div class='container'>
                <div class='row'>
                    <div class=' col-md-3'>
                        <div class='btn_menu_cate'>
                <span style='font-weight: bolder;'>
                  <i class='fa fa-bars'></i>
                  DANH SÁCH MÓN ĂN
                </span>
                        </div>
                    </div>
                    <div class='main_menu col-md-8'>
                        <ul>
                            <li>
                                <a href='/home'>
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Ẩm thực cú đêm
                                </a>
                            </li>
                            <li>
                                <a href='#'>

                                    Bảng giá
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Liên hệ
                                </a>
                            </li>
                            <li>
                                <a href='/product'>
                                    Quản lý sản phẩm
                                </a>
                            </li>
                        </ul>
                        </li>

                            </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</header>
</body>

</html>