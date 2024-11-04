<template>
  <div class="room-info">
    <div class="floor">
      <div class="room eight">
        <div class="number">801</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.eight.one.people">
          <select v-model="floor.eight.one.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.one.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.one.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.one.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.one.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.one.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.one.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.eight.one.payment === 3 || floor.eight.one.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.one.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">802</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.eight.two.people">
          <select v-model="floor.eight.two.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.two.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.two.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.two.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.two.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.two.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.two.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.eight.two.payment === 3 || floor.eight.two.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.two.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.two.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">803</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.eight.three.people">
          <select v-model="floor.eight.three.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.three.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.three.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.three.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.three.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.three.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.three.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.eight.three.payment === 3 || floor.eight.three.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.three.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.three.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">804</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.eight.four.people">
          <select v-model="floor.eight.four.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.four.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.four.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.four.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.four.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.four.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.four.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.eight.four.payment === 3 || floor.eight.four.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.four.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.four.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">805</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.eight.five.people">
          <select v-model="floor.eight.five.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.five.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.five.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.five.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.five.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.five.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.five.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.eight.five.payment === 3 || floor.eight.five.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.five.card">
          </div>
        </div>
      </div>
      <div class="room eight"></div>
      <div class="room eight"></div>
      <div class="room eight"></div>
      <div class="room eight"></div>
      <div class="room eight"></div>
      <div class="room eight"></div>
    </div>
    <div class="floor">
      <div class="room seven">
        <div class="number">701</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.seven.one.people">
          <select v-model="floor.seven.one.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.one.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.one.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.one.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.one.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.one.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.one.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info" v-if="floor.seven.one.payment === 3 || floor.seven.one.payment === 4">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.one.card">
          </div>
        </div>
      </div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
      <div class="room seven"></div>
    </div>
    <div class="floor">
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
      <div class="room six"></div>
    </div>
    <div class="floor">
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
      <div class="room five"></div>
    </div>
    <div class="floor">
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
      <div class="room four"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  data() {
    return {
      floor: {
        eight: {
          one: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          two: {
            number: 802,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            point: 0,
            card: 0,
          },
          three: {
            number: 803,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          four: {
            number: 804,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          five: {
            number: 805,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          six: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          seven: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          eight: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          nine: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          ten: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
          eleven: {
            number: 801,
            people: 1,
            days: 1,
            stay: 1,
            type: 2,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
        },
        seven: {
          one: {
            number: 701,
            people: 1,
            days: 1,
            stay: 1,
            type: 1,
            name: "",
            price: 0,
            company: 9,
            payment: 5,
            point: 0,
            card: 0,
          },
        },
        six: {},
        five: {},
        four: {}
      },
      roomType: {
        1: '禁煙',
        2: '喫煙'
      },
      companyName: {
        1: '楽天',
        2: 'じゃらん',
        3: 'EX',
        4: 'B.com',
        5: 'るるぶ',
        6: 'Trip',
        7: 'HP',
        8: 'TEL',
        9: ''
      },
      paymentType: {
        1: '現地払い',
        2: 'クレジット',
        3: 'PayPay',
        4: '売掛',
        5: ''
      }
    }
  }
})
export default class RoomInfoView extends Vue {}
</script>

<style lang="scss" scoped>
.floor {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  * {
    font-size: 12px;
  }
  .room {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 220px;
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17%;
      height: 30px;
      font-size: 12px;
      font-weight: bold;
    }
    .stay-info {
      width: 83%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .room-type, .people {
        display: block;
        width: 13%;
        height: 23px;
        padding: 0 2px;
      }
      .room-type {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      .people {
        padding: 0 5px;
      }
      .type {
        display: block;
        width: 20%;
        height: 23px;
        padding: 0 5px;
      }
      .stay-date {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 35%;
        input {
          display: block;
          width: 40%;
          height: 23px;
          padding: 0 5px;
        }
        .span {
          width: 10%;
        }
      }
    }
    .name {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 33px;
      input {
        display: block;
        width: 98%;
        height: 80%;
        padding: 0 5px;
      }
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 30px;
      input {
        display: block;
        width: 100%;
        height: 90%;
        padding: 0;
      }
    }
    .canpany-info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80%;
      height: 30px;
      .company {
        display: block;
        width: 43%;
        height: 90%;
        padding: 0 5px;
      }
      .payment {
        display: block;
        width: 53%;
        height: 90%;
        padding: 0 5px;
      }
    }
  }
  .eight {
    .number {
      background-color: var(--eight);
    }
    .stay-info, .name, .price, .canpany-info {
      background-color: var(--eight-cover);
    }
  }
  .seven {
    .number {
      background-color: var(--seven);
    }
    .stay-info, .name, .price, .canpany-info {
      background-color: var(--seven-cover);
    }
  }
}
</style>
