<template>
  <div class="room-info">
    <button v-on:click="infoLog">Log</button>
    <h1>客室管理</h1>
    <h2>8F</h2>
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
        <div class="payment-info">
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
        <div class="payment-info">
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
        <div class="payment-info">
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
        <div class="payment-info">
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
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.five.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">806</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.eight.six.people">
          <select v-model="floor.eight.six.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.six.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.six.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.six.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.six.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.six.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.six.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.six.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.six.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">807</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.eight.seven.people">
          <select v-model="floor.eight.seven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.seven.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.seven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.seven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.seven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.seven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.seven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.seven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.seven.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">808</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.eight.eight.people">
          <select v-model="floor.eight.eight.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.eight.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.eight.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.eight.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.eight.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.eight.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.eight.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.eight.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.eight.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">809</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.eight.nine.people">
          <select v-model="floor.eight.nine.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.nine.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.nine.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.nine.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.nine.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.nine.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.nine.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.nine.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.nine.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">810</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.eight.ten.people">
          <select v-model="floor.eight.ten.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.ten.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.ten.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.ten.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.ten.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.ten.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.ten.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.ten.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.ten.card">
          </div>
        </div>
      </div>
      <div class="room eight">
        <div class="number">811</div>
        <div class="stay-info">
          <div class="room-type">D</div>
          <input type="number" class="people" v-model="floor.eight.eleven.people">
          <select v-model="floor.eight.eleven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.eight.eleven.days">
            <span>/</span>
            <input type="number" v-model="floor.eight.eleven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.eight.eleven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.eight.eleven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.eight.eleven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.eight.eleven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.eight.eleven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.eight.eleven.card">
          </div>
        </div>
      </div>
    </div>

    <h2>7F</h2>
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
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.one.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">702</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.seven.two.people">
          <select v-model="floor.seven.two.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.two.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.two.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.two.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.two.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.two.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.two.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.two.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.two.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">703</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.seven.three.people">
          <select v-model="floor.seven.three.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.three.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.three.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.three.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.three.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.three.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.three.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.three.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.three.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">704</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.seven.four.people">
          <select v-model="floor.seven.four.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.four.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.four.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.four.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.four.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.four.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.four.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.four.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.four.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">705</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.seven.five.people">
          <select v-model="floor.seven.five.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.five.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.five.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.five.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.five.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.five.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.five.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.five.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">706</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.seven.six.people">
          <select v-model="floor.seven.six.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.six.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.six.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.six.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.six.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.six.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.six.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.six.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.six.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">707</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.seven.seven.people">
          <select v-model="floor.seven.seven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.seven.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.seven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.seven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.seven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.seven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.seven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.seven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.seven.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">708</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.seven.eight.people">
          <select v-model="floor.seven.eight.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.eight.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.eight.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.eight.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.eight.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.eight.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.eight.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.eight.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.eight.card">
          </div>
        </div>
      </div>
      <div class="room seven">
        <div class="number">709</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.seven.nine.people">
          <select v-model="floor.seven.nine.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.nine.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.nine.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.nine.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.nine.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.nine.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.nine.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.nine.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.nine.card">
          </div>
        </div>
      </div>
      <div class="room vip">
        <div class="number">VIP</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.seven.ten.people">
          <select v-model="floor.seven.ten.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.seven.ten.days">
            <span>/</span>
            <input type="number" v-model="floor.seven.ten.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.seven.ten.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.seven.ten.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.seven.ten.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.seven.ten.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.seven.ten.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.seven.ten.card">
          </div>
        </div>
      </div>
    </div>

    <h2>6F</h2>
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

    <h2>5F</h2>
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

    <h2>4F</h2>
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
            number: 807,
            people: 2,
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
            number: 808,
            people: 2,
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
            number: 809,
            people: 3,
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
            number: 810,
            people: 2,
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
            number: 811,
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
            number: 807,
            people: 2,
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
            number: 808,
            people: 2,
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
            number: 809,
            people: 3,
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
            number: 809,
            people: 3,
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
  },
  methods: {
    infoLog() {
      console.log(this.floor);
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
    align-content: center;
    flex-wrap: wrap;
    width: 20%;
    min-width: 220px;
    border: 1px solid white;
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17%;
      height: 30px;
      font-size: 12px;
      font-weight: 700;
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
        font-weight: 700;
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
      height: auto;
      min-height: 33px;
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
      height: auto;
      min-height: 30px;
      margin-bottom: auto;
      input {
        display: block;
        width: 100%;
        height: 100%;
        min-height: calc(30px*0.9);
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
    .payment-info {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 5px;
      .point, .card {
        width: 48%;
        input {
          width: 100%;
        }
      }
    }
  }
  .eight {
    .number {
      background-color: var(--eight);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--eight-cover);
    }
  }
  .seven {
    .number {
      background-color: var(--seven);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--seven-cover);
    }
  }
  .vip {
    .number {
      background-color: var(--vip);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--vip-cover);
    }
  }
}
</style>
