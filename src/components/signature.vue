<template>
<div class="">
  <van-cell icon="location-o" title="目的地(可多选)">
    <template #right-icon>
      <van-icon class="add-o" name="add-o" @click="showPlace2=true"/>
    </template>
    <template #label>
      <van-tag v-for="(item, index) in travelPlace" :key="index" closeable size="large" style="margin: 2px 5px"
               type="success  " @close="deleteCity(index)">
        {{ item.place }}
      </van-tag>
    </template>
  </van-cell>
  <div class="locationSelect">
    <van-popup
        v-model="showPlace2"
        :close-on-click-overlay="false"
        close-icon-position="top-left"
        closeable
        position="bottom"
        round
        @click-close-icon="locationClose">
      <div style="background: rgb(255,255,255);display: flex;align-items: center;padding:10px 16px;    font-size: 14px;
    line-height: 24px;justify-content: flex-end;box-shadow: inset #1cb9b9 0 -1px 0;">
        <span @click="locationYes">确定</span>
      </div>
      <div>
        <van-tree-select
            :active-id.sync="activeIds"
            :items="locations.locations"
            :main-active-index.sync="activeIndex"
            height="55vw"
            @click-item="itemss"
        />
      </div>
    </van-popup>
  </div>
</div>
</template>
<script>
import {Toast} from "vant";

export default {
  name: "SingNature",
  data() {
    return {
      showPlace2:false,
      cityArr:[],
      activeIds:[],
      activeIndex:0
    };
  },
  props:{
    // eslint-disable-next-line vue/no-dupe-keys
    travelPlace:{
      type:Array,
      required:true
    }
  },

  mounted() {

  },
  methods: {
    itemss(data) {
      this.cityArr.push({
        place: data.text,
        placeId: data.id
      })


    },
    deleteCity(index) {
      for (let i = 0; i < this.travelPlace.length; i++) {
        if (i == index) {
          this.travelPlace.splice(i, 1);
        }
        let activeIds = []

        this.travelPlace.forEach(list => {
          this.activeIds.forEach(item => {
            if (list.placeId === item) {
              activeIds.push(list.placeId)
            }
          })
        })
        this.activeIds = activeIds
      }

    },
    locationYes() {
      let hash = {}
      let newArr = this.cityArr.reduce((item, next) => {
        hash[next.placeId] ? '' : hash[next.placeId] = item.push(next)
        return item
      }, [])
      this.travelPlace = newArr.filter(item => {
        return this.activeIds.includes(item.placeId)
      })
      this.showPlace2 = false
    },
    // eslint-disable-next-line no-unused-vars
    locationClose(event) {
      Toast('取消操作')
      if (this.travelPlace.length > 0) {
        this.activeIds = []
        this.travelPlace.forEach(item => {
          this.activeIds.push(item.placeId)
        })
      }
    },
  },
  watch: {
    travelPlace() {
      for (let i = 0; i < this.locations.locations.length; i++) {
        this.locations.locations[i].dot = false
        for (let j = 0; j < this.locations.locations[i].children.length; j++) {
          this.travelPlace.forEach(item => {
            if (this.locations.locations[i].children[j].text === item.place) {
              this.locations.locations[i].dot = true
            }
          })
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-popup__close-icon--top-left {
  top: 11px;
  left: 16px;
}
</style>
