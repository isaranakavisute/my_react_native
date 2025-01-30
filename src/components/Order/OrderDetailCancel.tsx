// import React, { FunctionComponent } from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import { useTheme } from '@/hooks';
// import { IOrder } from '@/model/order';
// import { ICoupon } from '@/model/coupon';
// import { IPoint } from '@/model/point';
// import { OrderDetail } from '..';
//
// interface Props {
//   order?: IOrder;
// }
//
// //หน้าแสดงรายการสั่งซื้อ
// const OrderDetailCancel: FunctionComponent<Props> = ({ order }) => {
//   const { Layout, Fonts, Images } = useTheme();
//
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [coupon, setCoupon] = React.useState<ICoupon>({});
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [point, setPoint] = React.useState<IPoint>({});
//
//   return (
//     <View>
//       <OrderDetail order={order} />
//       <View style={[Layout.main, Layout.radius10]}>
//         <View style={styles.container}>
//           <View style={styles.messageBox}>
//             <Text style={[styles.firstBox, Fonts.text18]}>ผู้ยื่อคำขอ:</Text>
//             <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
//               ผู้ซื้อ
//             </Text>
//           </View>
//           <View style={styles.messageBox}>
//             <Text style={[styles.firstBox, Fonts.text18]}>เหตุผล:</Text>
//             <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
//               ได้รับสินค้าไม่ตรงกับรายการที่สั่ง เช่น สีผิด โมเดลผิด
//               หรือสินค้าผิด
//             </Text>
//           </View>
//           <View style={styles.messageBox}>
//             <Text style={[styles.firstBox, Fonts.text18]}>
//               รายละเอียด เพิ่มเติม:
//             </Text>
//             <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
//               ได้รับสินค้าไม่ตรงกับรายการที่สั่ง เช่น สีผิด โมเดลผิด
//               หรือสินค้าผิด
//             </Text>
//           </View>
//           <View style={[Layout.gap10]}>
//             <Text style={[Fonts.text18]}>รูปภาพสินค้าที่มีปัญหา</Text>
//             <View style={styles.imagesBox}>
//               <Image source={Images.mock.noImage} style={styles.image} />
//               <Image source={Images.mock.noImage} style={styles.image} />
//               <Image source={Images.mock.noImage} style={styles.image} />
//               <Image source={Images.mock.noImage} style={styles.image} />
//               <Image source={Images.mock.noImage} style={styles.image} />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
//
// OrderDetailCancel.defaultProps = {
//   order: undefined,
// };
//
// const styles = StyleSheet.create({
//   container: {
//     padding: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   messageBox: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   firstBox: {
//     width: 60,
//   },
//   imagesBox: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     flex: 1,
//     gap: 5,
//   },
//   image: {
//     width: 64,
//     height: 64,
//   },
// });
//
// export default OrderDetailCancel;

import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { IOrder } from '@/model/order';
import { ICoupon } from '@/model/coupon';
import { IPoint } from '@/model/point';
import OrderDetail from './OrderDetail';

interface Props {
  order?: IOrder;
}

const OrderDetailCancel: FunctionComponent<Props> = ({ order }) => {
  const { Layout, Fonts, Images } = useTheme();
  //if order is null by MC
  {order?.items?.map((item, index) => (
    <View key={index} style={[styles.card]}>
      {/* เนื้อหา */}
    </View>
  )) || <Text>ไม่มีข้อมูลสินค้า</Text>}
  //
  if (!order) {
    return (
      <View style={[Layout.main, Layout.center]}>
        <Text style={Fonts.text18}>ไม่พบข้อมูลคำสั่งซื้อ</Text>
      </View>
    );
  }

  return (
    <View>
      <OrderDetail order={order} />
      <View style={[Layout.main, Layout.radius10]}>
        <View style={styles.container}>
          <View style={styles.messageBox}>
            <Text style={[styles.firstBox, Fonts.text18]}>ผู้ยื่นคำขอ:</Text>
            <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
              {order.requester || 'ผู้ซื้อ'}
            </Text>
          </View>
          <View style={styles.messageBox}>
            <Text style={[styles.firstBox, Fonts.text18]}>เหตุผล:</Text>
            <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
              {order.reason ||
                'ได้รับสินค้าไม่ตรงกับรายการที่สั่ง เช่น สีผิด โมเดลผิด หรือสินค้าผิด'}
            </Text>
          </View>
          <View style={styles.messageBox}>
            <Text style={[styles.firstBox, Fonts.text18]}>
              รายละเอียดเพิ่มเติม:
            </Text>
            <Text style={[Layout.fill, Fonts.text18, Fonts.textBlack]}>
              {order.details || 'ไม่มีข้อมูลเพิ่มเติม'}
            </Text>
          </View>
          <View style={[Layout.gap10]}>
            <Text style={[Fonts.text18]}>รูปภาพสินค้าที่มีปัญหา</Text>
            <View style={styles.imagesBox}>
              {order.images?.length ? (
                order.images.map((img, index) => (
                  <Image key={index} source={{ uri: img }} style={styles.image} />
                ))
              ) : (
                <Image source={Images.mock.noImage} style={styles.image} />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

OrderDetailCancel.defaultProps = {
  order: undefined,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  messageBox: {
    flexDirection: 'row',
    gap: 10,
  },
  firstBox: {
    width: 80,
  },
  imagesBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: 5,
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default OrderDetailCancel;

