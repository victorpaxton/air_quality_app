import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import * as d3 from 'd3';
import { COLORS } from '../constants';

// const data = [
//   { label: 'Jan', value: 50 },
//   { label: 'Feb', value: 100 },
//   { label: 'Mar', value: 350 },
//   { label: 'Apr', value: 200 },
//   { label: 'May', value: 550 },
//   { label: 'Jun', value: 300 },
//   { label: 'Jul', value: 150 },
//   { label: 'Aug', value: 400 },
//   { label: 'Sep', value: 450 },
//   { label: 'Oct', value: 500 },
//   { label: 'Nov', value: 250 },
//   { label: 'Dec', value: 100 },
// ];

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;

const CanvasHeight = 300;
const CanvasWidth = 350;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

const BarChart = ({ data, bgColor }) => {
  const font = useFont(require('../assets/fonts/Inter-Regular.ttf'), 10);

  const xDomain = data.map((dataPoint) => dataPoint.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const yDomain = [0, Math.max(...data.map((yDataPoint) => yDataPoint.value))];

  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  const path = useMemo(() => {
    const paths = data.map((dataPoint) => Skia.Path.Make());

    data.forEach((dataPoint, index) => {
      const rect = Skia.XYWHRect(
        x(dataPoint.label) - GRAPH_BAR_WIDTH / 2,
        graphHeight + 15,
        GRAPH_BAR_WIDTH,
        y(dataPoint.value) * -1
      );

      const rrect = Skia.RRectXY(rect, 8, 8);
      paths[index].addRRect(rrect);
    });

    return paths;
  }, [data]);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {data.map((dataPoint, index) => (
          <React.Fragment key={dataPoint.label}>
            <Path path={path[index]} color={bgColor(dataPoint.value)} />
            <Text
              font={font}
              x={x(dataPoint.label) - 8}
              y={CanvasHeight - 10}
              text={dataPoint.label}
              color={COLORS.lightgray}
              opacity={index % 2 == 0 ? 1 : 0}
            />
            <Text
              font={font}
              x={x(dataPoint.label) - 6}
              y={graphHeight - y(dataPoint.value) + 8}
              text={`${dataPoint.value}`}
              color={bgColor(dataPoint.value)}
              opacity={index % 2 == 1 ? 0 : 1}
            />
          </React.Fragment>
        ))}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  canvas: {
    height: CanvasHeight,
    width: CanvasWidth,
  },
});

export default BarChart;
