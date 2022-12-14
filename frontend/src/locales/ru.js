const ru = {
  translation: {
    logOutBtn: 'Выйти',
    notFound: 'Страница не найдена',
    notFoundToHomeLink: 'Но вы можете перейти <1>на главную</1>',
    toastify: {
      addChannelFulfilled: '🤠 Новый канал создан!',
      renameChannelFulfilled: '✏ Канал переименован!',
      deleteChannelFulfilled: '☠ Канал удален!',
      networkErr: '📡 Проверьте подключение к интернету',
    },
    authorization: {
      header: 'Войти',
      footer: 'Регистрация',
      submit: 'Войти',
      usernamePlaceholder: 'Ваш ник',
      passwordPlaceholder: 'Пароль',
      invalidPassUsername: 'Неверные имя пользователя или пароль',
    },
    signUp: {
      header: 'Регистрация',
      footer: 'Войти',
      usernamePlaceholder: 'Имя пользователя',
      passwordPlaceholder: 'Пароль',
      passwordConfirmationPlaceholder: 'Подтвердите пароль',
      submit: 'Зарегистрироваться',
      fieldIsRequired: 'Обязательное поле',
      nameLength: 'Имя пользователя должно содержать от 3 до 20 символов',
      passwordLength: 'Пароль должен содержать минимум 6 символов',
      passwordsMatch: 'Пароли должны совпадать',
      userExists: 'Пользователь с таким именем уже сущетсвует',
    },
    chat: {
      channelsHeader: 'Каналы',
      messagesCounter: {
        count_one: '{{count}} сообщение',
        count_few: '{{count}} сообщения',
        count_many: '{{count}} сообщений',
      },
      inputPlaceholder: 'Введите сообщение...',
      modalErrors: {
        nameExistsErr: 'Канал с таким именем уже существует',
        nameLengthErr: 'Имя канала должно содержать от 3 до 20 символов',
      },
      modalButtons: {
        cancel: 'Отменить',
        submit: 'Отправить',
        delete: 'Удалить',
      },
      addChannelModal: {
        header: 'Добавить канал',
        inputPlaceholder: 'Имя канала',
      },
      deleteChannelModal: {
        triggerButton: 'Удалить',
        header: 'Удалить канал',
        body: 'Вы уверены?',
      },
      renameChannelModal: {
        triggerButton: 'Переименовать',
        header: 'Переименовать канал',
        inputPlaceholder: 'Имя канала',
      },
    },
  },
};

export default ru;
