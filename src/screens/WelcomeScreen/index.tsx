import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { containerStyle } from '../../styles/common';
import { MainText } from '../../components/common/MainText';
import FirstIcon from '../../assets/svg/welcomeScreenIcons/firstIcon.svg';
import SecondIcon from '../../assets/svg/welcomeScreenIcons/secondIcon.svg';
import ThirdIcon from '../../assets/svg/welcomeScreenIcons/thirdIcon.svg';
import { MainButton } from '../../components/common/MainButton';

const data = [
  {
    backgroundColor: '#ecfdf5',
    icon: () => <FirstIcon width={20} height={20} color="#05856b" />,
    iconBackground: '#d1fae5',
    title: 'تأمين شامل',
    description: 'تغطية كاملة لك ولعائلتك',
  },
  {
    backgroundColor: '#f0fdfa',
    icon: () => <SecondIcon width={20} height={20} color="#05856b" />,
    iconBackground: '#ccfbf1',
    title: 'إصدار فوري',
    description: 'احصل على وثيقتك في دقائق',
  },
  {
    backgroundColor: '#ecfeff',
    icon: () => <ThirdIcon width={20} height={20} color="#05856b" />,
    iconBackground: '#cffafe',
    title: 'آمن ومشفر',
    description: 'بياناتك محمية بأعلى معايير الأمان',
  },
];

export const WelcomeScreen = () => {
  return (
    <View
      style={[
        containerStyle(),
        {
          gap: 5,
        },
      ]}
    >
      <Image
        source={require('../../assets/images/SarwaLifeLogo.png')}
        style={styles.imageStyle}
      />

      <MainText style={styles.titleStyle} fontWeight={'700'}>
        {'مرحباً بك في ثروة لتأمينات الحياة'}
      </MainText>

      <MainText
        style={{
          fontSize: 15,
        }}
      >
        {'ابدأ رحلتك نحو مستقبل آمن'}
      </MainText>

      <View
        style={{
          marginTop: 10,
        }}
      />
      {data.map((item, index) => {
        return (
          <View
            key={item.title}
            style={[
              styles.cardStyle,
              {
                backgroundColor: item.backgroundColor,
              },
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: item.iconBackground },
              ]}
            >
              {item.icon()}
            </View>

            <View
              style={{
                alignItems: 'flex-start',
              }}
            >
              <MainText
                style={{
                  fontSize: 16,
                }}
                fontWeight={'700'}
              >
                {item.title}
              </MainText>
              <MainText
                style={{ fontSize: 14, marginTop: 4 }}
                fontWeight={'400'}
              >
                {item.description}
              </MainText>
            </View>
          </View>
        );
      })}

      <MainButton
        title="إنشاء حساب جديد"
        type="Bold"
        style={{
          marginTop: 30,
        }}
        onPress={() => {}}
      />
      <MainButton
        title="لديك حساب بالفعل؟ تسجيل الدخول"
        type="Light"
        style={{
          marginTop: 5,
        }}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 144,
    height: 144,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  cardStyle: {
    width: '90%',
    height: 80,
    borderRadius: 10,
    marginTop: 5,
    padding: 16,
    flexDirection: 'row',
    gap: 15,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});
