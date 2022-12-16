<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
    :p="p"
  />
</template>

<script>
/* eslint-disable */
import echarts from "echarts"

export default {
  //   mixins: [resize],
  props: {
    p: {
      type: Array,
      default: "",
    },
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      chart: null,
      lineColor: ["red", "blue", "green", "yellow"],
      names: [],
      date: [],
      data: [],
    }
  },
  mounted() {
    this.parseProps()
    this.initChart()
    console.log("p", this.p)
    console.log("date", this.date)
    console.log("data", this.data)
    console.log("createSeries", this.createSeries())
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        backgroundColor: "#394056",
        title: {
          top: 20,
          text: "Активность",
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "#F1F1F3",
          },
          left: "1%",
        },
        legend: {
          top: 40,
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: this.names,
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3",
          },
        },
        grid: {
          top: 100,
          left: "2%",
          right: "2%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            data: this.date,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(%)",
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14,
              },
            },
            splitLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
          },
        ],
        series: this.createSeries(),
      })
    },
    createSeries() {
      let series = []
      for (let i = 0; i < this.names.length; i++) {
        series.push({
          name: this.names[i],
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: this.lineColor[i],
            },
          },
          data: this.data[i],
        })
      }
      return series
    },
    parseProps() {
      let names = []
      let date = []
      let data = []
      this.p.forEach((item) => {
        names.push(item.name)

        let arr_date = []
        let arr_data = []
        item.data.forEach((elem) => {
          arr_date.push(Object.keys(elem).join())
          arr_data.push(Object.values(elem).join())
        })
        date.push(arr_date)
        data.push(arr_data)
      })
      this.names = names
      this.date = date[0]
      this.data = data
    },
  },
}
</script>
