import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions,Text } from 'react-native';
import tw from 'twrnc';



const ViewSlider = ({SLIDES,isBlur}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
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
            <View style={styles.cardContent}>
                {
                  isBlur ?
                  <View  style={{
                    padding:4,
                    shadowOpacity: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 10, height: 10 },
                    shadowRadius: 10,
                    elevation: 5,
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    borderRadius: 10
                  }}>
                    <Text style={styles.blurText}>{"$00000.00"}</Text>
                </View>
                :
                <Text style={tw`font-bold text-4xl text-white`}>{"$"+item?.amount}</Text>
              }
                <Text style={tw`font-light text-sm text-white my-3`}>Total Balance</Text>
            </View>
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
    justifyContent:'center'
  },
  slideContainer: {
    width: Dimensions.get('window').width,
    height: '100%', // Adjust the height as needed
  },
  blurText:{
    fontSize: 34,
    fontWeight: 'bold',
    opacity: 0.3,
    color: "gray"
  },
  cardContent: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
    paddingTop:'4%'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    paddingVertical:'2%'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    width:24,
    backgroundColor: 'white',
  },
});

export default ViewSlider;
