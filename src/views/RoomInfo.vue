<template>
  <div class="room-info">
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
      <div class="room six">
        <div class="number">601</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.six.one.people">
          <select v-model="floor.six.one.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.one.days">
            <span>/</span>
            <input type="number" v-model="floor.six.one.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.one.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.one.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.one.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.one.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.one.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">602</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.six.two.people">
          <select v-model="floor.six.two.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.two.days">
            <span>/</span>
            <input type="number" v-model="floor.six.two.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.two.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.two.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.two.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.two.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.two.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.two.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">603</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.six.three.people">
          <select v-model="floor.six.three.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.three.days">
            <span>/</span>
            <input type="number" v-model="floor.six.three.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.three.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.three.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.three.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.three.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.three.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.three.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">604</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.six.four.people">
          <select v-model="floor.six.four.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.four.days">
            <span>/</span>
            <input type="number" v-model="floor.six.four.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.four.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.four.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.four.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.four.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.four.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.four.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">605</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.six.five.people">
          <select v-model="floor.six.five.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.five.days">
            <span>/</span>
            <input type="number" v-model="floor.six.five.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.five.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.five.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.five.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.five.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.five.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">606</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.six.people">
          <select v-model="floor.six.six.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.six.days">
            <span>/</span>
            <input type="number" v-model="floor.six.six.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.six.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.six.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.six.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.six.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.six.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.six.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">607</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.seven.people">
          <select v-model="floor.six.seven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.seven.days">
            <span>/</span>
            <input type="number" v-model="floor.six.seven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.seven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.seven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.seven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.seven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.seven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.seven.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">608</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.eight.people">
          <select v-model="floor.six.eight.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.eight.days">
            <span>/</span>
            <input type="number" v-model="floor.six.eight.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.eight.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.eight.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.eight.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.eight.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.eight.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.eight.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">609</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.nine.people">
          <select v-model="floor.six.nine.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.nine.days">
            <span>/</span>
            <input type="number" v-model="floor.six.nine.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.nine.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.nine.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.nine.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.nine.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.nine.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.nine.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">610</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.ten.people">
          <select v-model="floor.six.ten.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.ten.days">
            <span>/</span>
            <input type="number" v-model="floor.six.ten.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.ten.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.ten.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.ten.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.ten.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.ten.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.ten.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">611</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.eleven.people">
          <select v-model="floor.six.eleven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.eleven.days">
            <span>/</span>
            <input type="number" v-model="floor.six.eleven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.eleven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.eleven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.eleven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.eleven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.eleven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.eleven.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">612</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.twelve.people">
          <select v-model="floor.six.twelve.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.twelve.days">
            <span>/</span>
            <input type="number" v-model="floor.six.twelve.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.twelve.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.twelve.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.twelve.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.twelve.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.twelve.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.twelve.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">613</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.thirteen.people">
          <select v-model="floor.six.thirteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.thirteen.days">
            <span>/</span>
            <input type="number" v-model="floor.six.thirteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.thirteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.thirteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.thirteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.thirteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.thirteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.thirteen.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">614</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.fourteen.people">
          <select v-model="floor.six.fourteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.fourteen.days">
            <span>/</span>
            <input type="number" v-model="floor.six.fourteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.fourteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.fourteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.fourteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.fourteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.fourteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.fourteen.card">
          </div>
        </div>
      </div>
      <div class="room six">
        <div class="number">615</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.six.fifteen.people">
          <select v-model="floor.six.fifteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.six.fifteen.days">
            <span>/</span>
            <input type="number" v-model="floor.six.fifteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.six.fifteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.six.fifteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.six.fifteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.six.fifteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.six.fifteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.six.fifteen.card">
          </div>
        </div>
      </div>
    </div>

    <h2>5F</h2>
    <div class="floor">
      <div class="room five">
        <div class="number">501</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.five.one.people">
          <select v-model="floor.five.one.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.one.days">
            <span>/</span>
            <input type="number" v-model="floor.five.one.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.one.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.one.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.one.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.one.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.one.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">502</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.five.two.people">
          <select v-model="floor.five.two.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.two.days">
            <span>/</span>
            <input type="number" v-model="floor.five.two.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.two.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.two.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.two.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.two.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.two.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.two.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">503</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.five.three.people">
          <select v-model="floor.five.three.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.three.days">
            <span>/</span>
            <input type="number" v-model="floor.five.three.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.three.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.three.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.three.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.three.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.three.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.three.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">504</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.five.four.people">
          <select v-model="floor.five.four.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.four.days">
            <span>/</span>
            <input type="number" v-model="floor.five.four.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.four.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.four.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.four.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.four.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.four.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.four.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">505</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.five.five.people">
          <select v-model="floor.five.five.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.five.days">
            <span>/</span>
            <input type="number" v-model="floor.five.five.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.five.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.five.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.five.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.five.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.five.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">506</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.six.people">
          <select v-model="floor.five.six.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.six.days">
            <span>/</span>
            <input type="number" v-model="floor.five.six.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.six.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.six.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.six.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.six.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.six.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.six.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">507</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.seven.people">
          <select v-model="floor.five.seven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.seven.days">
            <span>/</span>
            <input type="number" v-model="floor.five.seven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.seven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.seven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.seven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.seven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.seven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.seven.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">508</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.eight.people">
          <select v-model="floor.five.eight.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.eight.days">
            <span>/</span>
            <input type="number" v-model="floor.five.eight.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.eight.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.eight.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.eight.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.eight.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.eight.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.eight.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">509</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.nine.people">
          <select v-model="floor.five.nine.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.nine.days">
            <span>/</span>
            <input type="number" v-model="floor.five.nine.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.nine.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.nine.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.nine.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.nine.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.nine.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.nine.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">510</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.ten.people">
          <select v-model="floor.five.ten.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.ten.days">
            <span>/</span>
            <input type="number" v-model="floor.five.ten.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.ten.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.ten.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.ten.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.ten.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.ten.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.ten.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">511</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.eleven.people">
          <select v-model="floor.five.eleven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.eleven.days">
            <span>/</span>
            <input type="number" v-model="floor.five.eleven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.eleven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.eleven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.eleven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.eleven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.eleven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.eleven.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">512</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.twelve.people">
          <select v-model="floor.five.twelve.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.twelve.days">
            <span>/</span>
            <input type="number" v-model="floor.five.twelve.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.twelve.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.twelve.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.twelve.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.twelve.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.twelve.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.twelve.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">513</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.thirteen.people">
          <select v-model="floor.five.thirteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.thirteen.days">
            <span>/</span>
            <input type="number" v-model="floor.five.thirteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.thirteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.thirteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.thirteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.thirteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.thirteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.thirteen.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">514</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.fourteen.people">
          <select v-model="floor.five.fourteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.fourteen.days">
            <span>/</span>
            <input type="number" v-model="floor.five.fourteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.fourteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.fourteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.fourteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.fourteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.fourteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.fourteen.card">
          </div>
        </div>
      </div>
      <div class="room five">
        <div class="number">515</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.five.fifteen.people">
          <select v-model="floor.five.fifteen.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.five.fifteen.days">
            <span>/</span>
            <input type="number" v-model="floor.five.fifteen.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.five.fifteen.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.five.fifteen.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.five.fifteen.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.five.fifteen.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.five.fifteen.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.five.fifteen.card">
          </div>
        </div>
      </div>
    </div>

    <h2>4F</h2>
    <div class="floor">
      <div class="room four">
        <div class="number">401</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.four.one.people">
          <select v-model="floor.four.one.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.one.days">
            <span>/</span>
            <input type="number" v-model="floor.four.one.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.one.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.one.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.one.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.one.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.one.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.one.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">402</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.four.two.people">
          <select v-model="floor.four.two.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.two.days">
            <span>/</span>
            <input type="number" v-model="floor.four.two.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.two.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.two.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.two.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.two.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.two.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.two.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">403</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.four.three.people">
          <select v-model="floor.four.three.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.three.days">
            <span>/</span>
            <input type="number" v-model="floor.four.three.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.three.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.three.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.three.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.three.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.three.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.three.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">404</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.four.four.people">
          <select v-model="floor.four.four.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.four.days">
            <span>/</span>
            <input type="number" v-model="floor.four.four.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.four.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.four.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.four.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.four.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.four.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.four.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">405</div>
        <div class="stay-info">
          <div class="room-type">S</div>
          <input type="number" class="people" v-model="floor.four.five.people">
          <select v-model="floor.four.five.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.five.days">
            <span>/</span>
            <input type="number" v-model="floor.four.five.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.five.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.five.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.five.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.five.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.five.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.five.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">406</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.four.six.people">
          <select v-model="floor.four.six.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.six.days">
            <span>/</span>
            <input type="number" v-model="floor.four.six.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.six.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.six.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.six.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.six.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.six.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.six.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">407</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.four.seven.people">
          <select v-model="floor.four.seven.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.seven.days">
            <span>/</span>
            <input type="number" v-model="floor.four.seven.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.seven.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.seven.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.seven.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.seven.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.seven.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.seven.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">408</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.four.eight.people">
          <select v-model="floor.four.eight.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.eight.days">
            <span>/</span>
            <input type="number" v-model="floor.four.eight.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.eight.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.eight.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.eight.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.eight.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.eight.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.eight.card">
          </div>
        </div>
      </div>
      <div class="room four">
        <div class="number">409</div>
        <div class="stay-info">
          <div class="room-type">T</div>
          <input type="number" class="people" v-model="floor.four.nine.people">
          <select v-model="floor.four.nine.type" class="type">
            <option v-for="(label, key) in roomType" :key="key" :value="parseInt(key)">
              {{ label }}
            </option>
          </select>
          <div class="stay-date">
            <input type="number" v-model="floor.four.nine.days">
            <span>/</span>
            <input type="number" v-model="floor.four.nine.stay">
          </div>
        </div>
        <div class="name">
          <input type="text" v-model="floor.four.nine.name">
        </div>
        <div class="price">
          <input type="number" v-model="floor.four.nine.price">
        </div>
        <div class="canpany-info">
          <select v-model="floor.four.nine.company" class="company">
            <option v-for="(name, key) in companyName" :key="key" :value="parseInt(key)">
              {{ name }}
            </option>
          </select>
          <select v-model="floor.four.nine.payment" class="payment">
            <option v-for="(type, key) in paymentType" :key="key" :value="parseInt(key)">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="payment-info">
          <div class="point">
            ポイント：<input type="number" v-model="floor.four.nine.point">
          </div>
          <div class="card">
            カード：<input type="number" v-model="floor.four.nine.card">
          </div>
        </div>
      </div>
    </div>

    <button v-on:click="infoLog" style="width: 100px;height: 40px;margin: 60px auto;">Log</button>
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
            number: 806,
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
            number: 702,
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
            number: 703,
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
            number: 704,
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
            number: 705,
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
            number: 701,
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
            number: 707,
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
            number: 708,
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
            number: 709,
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
            number: 710,
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
        six: {
          one: {
            number: 601,
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
            number: 602,
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
            number: 603,
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
            number: 604,
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
            number: 605,
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
            number: 606,
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
            number: 607,
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
            number: 608,
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
            number: 609,
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
            number: 610,
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
            number: 611,
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
          twelve: {
            number: 612,
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
          thirteen: {
            number: 613,
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
          fourteen: {
            number: 614,
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
          fifteen: {
            number: 615,
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
        five: {
          one: {
            number: 501,
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
            number: 502,
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
            number: 503,
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
            number: 504,
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
            number: 505,
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
            number: 506,
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
            number: 507,
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
            number: 508,
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
          nine: {
            number: 509,
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
          ten: {
            number: 510,
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
          eleven: {
            number: 511,
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
          twelve: {
            number: 512,
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
          thirteen: {
            number: 513,
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
          fourteen: {
            number: 514,
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
          fifteen: {
            number: 515,
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
        four: {
          one: {
            number: 401,
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
            number: 402,
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
            number: 403,
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
            number: 404,
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
            number: 405,
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
            number: 406,
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
            number: 407,
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
            number: 408,
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
          nine: {
            number: 409,
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
        }
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
  margin-bottom: 40px;
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
  .six {
    .number {
      background-color: var(--six);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--six-cover);
    }
  }
  .five {
    .number {
      background-color: var(--five);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--five-cover);
    }
  }
  .four {
    .number {
      background-color: var(--four);
    }
    .stay-info, .name, .price, .canpany-info, .payment-info {
      background-color: var(--four-cover);
    }
  }
}
</style>
