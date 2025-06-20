<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contacts">
    <h1>Контакты</h1>
    
    <div class="contact-info">
      <h2>Как нас найти</h2>
      <p>📚 Адрес: г. Москва, ул. Книжная, д. 42</p>
      <p>📞 Телефон: +7 (495) 123-45-67</p>
      <p>✉ Email: info@booklibrary.ru</p>
      
      <div class="map-placeholder">
        <!-- Здесь может быть карта -->
        <img src="@/assets/map-placeholder.jpeg" alt="Карта">
      </div>
    </div>

    <div class="feedback-form">
      <h2>Обратная связь</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Ваше имя:</label>
          <input 
            id="name" 
            v-model="form.name" 
            type="text" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            id="email" 
            v-model="form.email" 
            type="email" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required
          ></textarea>
        </div>
        
        <button type="submit">Отправить</button>
      </form>
      
      <div v-if="submitStatus" class="submit-message">
        {{ submitStatus }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitStatus: ''
    }
  },
  methods: {
    submitForm() {
      // В реальном проекте здесь был бы запрос к бэкенду
      this.submitStatus = 'Спасибо! Ваше сообщение отправлено. Мы ответим вам в ближайшее время.'
      this.form = { name: '', email: '', message: '' }
      
      // Через 5 секунд убираем сообщение
      setTimeout(() => {
        this.submitStatus = ''
      }, 5000)
    }
  }
}
</script>

<style scoped>
.contacts {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact-info, .feedback-form {
  margin: 30px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.map-placeholder {
  margin: 20px 0;
  text-align: center;
}

.map-placeholder img {
  max-width: 100%;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 98%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  width: 100%;    /* Можно оставить 100% или задать фиксированную ширину */
  min-width: 98%;
  max-width: 98%;
  height: 150px;   /* Фиксированная высота */
  min-height: 100px;
  max-height: 300px;
  resize: vertical; /* Разрешаем изменять размер только по вертикали */
}

button {
  background: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #369f6b;
}

.submit-message {
  margin-top: 15px;
  padding: 10px;
  background: #dff0d8;
  color: #3c763d;
  border-radius: 4px;
}
</style>