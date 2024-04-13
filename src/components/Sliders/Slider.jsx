import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions,Image } from 'react-native';
import { COLORS } from '../../constants';



const Slider = ({SLIDES,updateActiveIndex}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    updateActiveIndex(index)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.slideContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        onScroll={(event) => {
          const slideWidth = Dimensions.get('window').width;
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offset / slideWidth);
          handleSlideChange(index);
        }}
      />
      <View style={styles.dotContainer}>
        {SLIDES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    width: Dimensions.get('window').width,
    height: '100%', // Adjust the height as needed
  },
  image: {
    resizeMode: 'cover',
    width:'90%',
    height:'100%',
    justifyContent:'center',
    display:'flex',
    alignSelf:'center'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
});

export default Slider;
