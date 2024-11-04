import express from "express"
import { MercadoPagoConfig, Payment, Preference } from "mercadopago"


const client = new MercadoPagoConfig({  accessToken: 'APP_USR-8133444984667352-110316-55fc2ba574dd770c83ae0d634a74462f-2076107374' });
const preference = new Preference(client);


const app = express()

app.use(express.json())

    
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
              unit_price: 2.50,
        }],
        back_urls: {
            success: 'https://hardtuber.site/sucesso',
            failure: 'https://test.com/failure',
            pending: 'https://test.com/pending',
          },
    }
    


    const response = await preference.create({ body })
    .then(console.log).catch(console.log);








