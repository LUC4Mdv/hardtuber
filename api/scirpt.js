import express from "express"
import { configDotenv } from "dotenv"
import axios from "axios"

const app = express()

app.use(express.json())


app.get("/api/pagamento_atualizado", async (req, res) => {
    const information = await new Payment({
        accessToken: process.env.KEYMP
    })
    .get({
        id: req.header.paymentid
    })
    .cacth(console.log)

    res.send({response: information}).status(200)
})

app.put("api/criar_pagamento", async (req,res) => {
    await new Payment ({
        accessToken: process.env.KEYMP
    })
    .create({
        body: {
            transaction_amount: Number(req.headers.value),
            payment_method_id: "pix",
            payer: { 
                name: "Player"
            }
        }
    })
    .then((response) => {
        res.send({
            response: response.point_off_interaction.transaction_data.ticket_url
        })
    })
    .cacth(console.log)
})

app.post("/api/pagamento_atualizado", async (req, res) => {
    if(req.body.action === "payment.updated") {
        await axios({
            url: "/api/pagamento_atualizado",
            headers: {
                paymentid: req.body.data.id
            }
        })
        .then(x => x.data)
        .then(async (r) => {
            if(
            r.response.satus === 'approved'

            ){
                console.log(r)
            }
        })
        .catch(console.log)
    }
})

app.listen(process.env.PORT, async () => {
    console.log(`api online na porta ${process.env.PORT}`)
})