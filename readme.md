đặt biến trong css bắt đầu từ :root{ tên biến }
root là lớp giả root là lobal dùng khấp mội nợi ở biến
local thì đặt ngay thẻ hoạc class id --... tên biến rồi thuộc tính
để sử dụng biên thì dùng var(tên biến) từ khóa tìm kiếm css function
mục đích đặt biến là khi sử dụng nhiều nơi chỉ cần sử 1 chổ

## CSS unit:

## 1.CSS Absolute unit (là css tuyệt đối):

      - px:là điểm ảnh.
      - pt:
      - cm:
      - mm
      - inch
      - pc

## 2.Css Relative unit (là tương đối):

    -Lưu ý: đơn vị tương đói cần một nơi thuộc vào
      - %: thằng này sẻ thuộc vào thằng chứa nó (thằng cha);
      -rem:thằng này phụ thuộc vào thẻ html vd html có fontsize: 20px thì 1 rem=20px
           trong thực tế thằng này sẻ sử dụng nhiều hơn và dể thẻ html fontsize:100% mặc định fontsize 100% là 16px
      -em:thăng này nó thuộc vào thẻ chứ nó gần nhât vd thằng chứa nó gần nó có fontsize=10px thì 1em=10px
      -vw(viewport width): thằng này phụ thuộc vào kích thước chiều ngang của trình duyệt
      -vh(viewport height): thằng này phụ thược vào chiều dài của kích thước của trình duyệt
      -vmin
      -vmax
    ## 3.box-sizing: chiều ngàng của đối tượng = kích thuoc của border + kích thuocs pading+  kích thước content
      thuộc tính:
        -content-box: đây là thuộc tính mặt đinh của box-sizing là ko set thuộc tính box-sizing trở kích thuoc chưa set box-sizing
        -border-box: đây là thuộc tính kích hoạt box-sizing
        -unset: là hủy thuộc tính, trong thức tế khi muốn hủy box-sizing thì gọi là hàm này để unset để hủy thuộc tính trước đó của class hoạc id của đó
    ## 4.background-clip: là nó quyết định backgroup được độ ranh giới nào
      thuộc tính:
        -border-box: Thuộc tính là trạng thái mặt đinh của backbgroup clip
        -padding-box: Thuộc tính là trạng thái đổ backgroup từ padding vào
        -content-box: Thuộc tính là trạng thái đổ backgroup từ content vào
    5.background-origin: nó có tương tự như backgroud-clip nhưng nó thường sử dụng cho background-image
      thuộc tính:
        -border-box: Thuộc tính là trạng thái mặt đinh của backbgroup clip
        -padding-box: Thuộc tính là trạng thái đổ backgroup từ padding vào
        -content-box: Thuộc tính là trạng thái đổ backgroup từ content vào
    6.Background position: xác đinh vị trí của backgroud image
        -Niếu truyền 1 thuộc tính vị trí center,top,left,right,bottom thì thuộc tính thứ 2 tự hiểu là center,
         tương tự giá trị số như 10px,20px, 10%,20%,10rem thì thuộc tính thứ 2 là tự center.
        Lưu ý nó còn có thể định nghĩa cả vị trí keyword vàgiá trị số như
        vd: ban muốn hình nó float theo top right và bạn muốn nó cách top 10px và 20 px thì bạn có thể ghi như sau: background-position:top 10px right 20px
    7.Css function:
      -var(): đặt biến
      -linear-gradient():
      -rgba():chỉnh màu trong xuốt
      -rgb(): cài này chỉnh màu ko có trong xuốt
      -calc():giúp tính toán được vd (120px - 50px) nhớ có khoản trắng ở dấu - có thể có giá trị tương đối và tuyệt đối
      -attr():nó là thuộc tính html thường lớp giả
    8.Css Pseudo classes:lớp giả bắt đầu có dấu :
      - :root: đây là lớp giả tham chiếu chinh phần tử góc file html.
      - :hover:đây là lớp giả khi di chuyển chuộc vào thì nó ẻ kích hoạt thuộc tính hover
      - :active: daay là lớp giả nó chỉ kích hoạt các thuộc tính bên trong khi click chuột
      - :first-child
      - :last-child
    9.css Pseudo elements: đay là phân tử giả của css,phần tử giả này cần phải có thuộc tính content mới tồn tại được, mỗi emlement chỉ có một phần tử giả
      - ::before: phần tử giả ở trướng
      - ::after: phần tử giả ở sau
      - ::first-latter: đây là phần tử giả cho ký text ký tự đầu tiên muốn thuộc tính khác vd muốn nó inhoa hay đổi màu chử chử to hơn
      - ::first-line: đây là phần tử giả cho để cấu hình css cho dòng đâu tiên muốn thay đổi dòng đầu tiên nó sao thì chỉ cần ghi first
      - ::selection: đây là phàn tử giả thay dổi khi khi quét copy vd dổi màu background hay đổi màu chư
    10.CSS Position:
    -Relative: là vị trí tương đối lấy chính mình làm góc tạo độ ko phụ thuộc vào thằng bên ngoài nào cả
    -Absolute: là vị trí tương đối phụ thuộc vào vị trí elements có position gần nó nhất làm góc tạo độ và điều coi là thằng cha nó.
    11.Css FlexBox:
    -mô hinh sử dụng lây out flex box: flex box có 2 thành phần chính
      -flex-contianer: là thẻ chứa các thẻ flex item
      -flex-item:là con của flex-contianer
      -main axis: là quyết định flex item nó dược nằm vd 2 có cách nằm là nằm ngang nằm dọc
    -Thuộc tính flex box:
      -display:
          -flex:có sử dụng playout display flex ko
          -ineline-flex:
      -flex-direction: giúp thây đổi phương hướng main axis mặc đinh nó là row
          -row: giúp xắp theo nàm ngang;
          -column: gúp flex item nàm dọc
      -flex-wrap:
          -wrap: giấp xuông dòng khi ở chế độ row
          -nowrap:là ko xuống dòng.
          -wrap-reverse:đảo chiều xấp xếp flex item
      -flex-basis: thay đổi kính thước main size tùy vào thuộc tính flex box row hay collum.
      -justify-content: canh được các main axis theo bên trái bên phải ở giữa theo row còn trên giữa xuống theo thuộc tính colum
      -justify-seft: đây là canh cho flex item còn justifu-cotent là thằng cha nhưng khi xét thuộc tính justify-cotent cho thằng cha ko cần set thuộc tính này nữa
                     vì tất cả thuộc tính thăng còn điều theo thằng cha.
      -alin-content:giốn như flex-contenter
      -alin-seft:cung gioogsn như alin-content dành cho flex-item.
      -flex-grown:thây đổi khíc thước flex-item theo hương main size.
      -flex-shrink:ngược lại flex-grown
      -flex: là cách viết sort  cảu flex-basic và flex-grow và flex-shrink.
      -order: quyết định thứ tự flex item hiển thị.
      -flex-flow: là sort của flex-direction vả flex-wrap canh
    10.Thuộc tính prefix: thuộc tính này giúp cho trình duyệt hiểu được thuộc tính css đôi khi một số thuộc tính css nó không hổ trợ thuộc tính. Với trong thực tế thuộc tính này có thẻ giúp làm việc moi trường đặt thù như mỹ nhật đồi hỏi sự tỷ mỹ cao.
    Link trang đẻ kiểm tra thuộc tính trình duyệt nào hổ trợ:https://caniuse.com/
      -IE: -ms-{tên thuộc tính css};
      -firefox: -moz-{tên thuộc tính css};
      -opera: -o-{tên thuộc tính css};
      -Microsoft Edge,chrome: -webkit-{tên thuộc tính css}

#Bem

- Là tiêu chuẩn đặt tên class khi viết css

## ý nghĩa:

- Viết tắt của:Block Element Modifier
- Block: Khối.
- Element: Thành phần trong khối.
- Modifier: Bổ sung ý nghĩa cho `Block` hoạc `Element`

## tại sao phải dùng Bem;

- Mỗi người đăt một kiểu.
- Member đặt class trùng nhau, css đề lên nhau.

## Cú pháp:

- .block
- .block\_\_element
- .block_element--modifier

## Tính ứng dụng

- Xây dựng layout website
- Xây dựng thành trên website.

## Ưu điểm.

- Tính rỏ ràng
- Tái sử dụng dễ dàng.
- Giúp cả team làm việc với nhau dễ dàng.
- Tính module, không lo css của class ảnh hưởng lên css của class khác.

## nhược điểm.

- Class dài.
- Một só người dùng cho là xấu.

## Khi nào nên dùng BEM là phù hợp?

- Dự án nhiều member.
- Dự án lớn, số lương page nhiều hoạc số lượng các thành phần trên giao diện nhiều.

## Thực hành

-làm button
-làm message
-Làm 1 thành phần trên website.

# base-site

Là phân thực hành một site thực tế
