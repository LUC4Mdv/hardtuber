const client = new MercadoPago({  accessToken: config.access_token });
const preference = new Preference(client);

const body = {
  items: [
    {
      id: '1',
      title: 'Vip Gold',
      description: '» Veja todas as informações e benefícios deste VIP, em nosso servidor do Discord!',
      picture_url: 'https://www.hardtuber.site/src/img/vips/Gold.png',
      category_id: 'vips',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: 2,
    },
  ],
  back_urls: {
    success: 'https://test.com/success',
    failure: 'https://test.com/failure',
    pending: 'https://test.com/pending',
  },
};

const response = await preference.create({ body })
  .then(console.log).catch(console.log);