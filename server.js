const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');
require('dotenv').config(); // <-- Movido arriba para cargar de forma segura
const nodemailer = require('nodemailer');

// Configuración básica
const app = express();
const PORT = process.env.PORT || 3000;

// Asegurarse de que la carpeta de subidas existe usando rutas absolutas
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Configurar Multer para guardar las fotos/PDFs del FPL Bill
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir) // Usando la ruta segura
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });

// Servir la Landing Page (archivos estáticos)
app.use(express.static(__dirname));
app.use(express.json());

// Configurar el archivo CSV (Excel) para guardar los leads
const csvWriter = createObjectCsvWriter({
    path: path.join(__dirname, 'leads_solares.csv'),
    header: [
        {id: 'date', title: 'FECHA'},
        {id: 'name', title: 'NOMBRE COMPLETO'},
        {id: 'email', title: 'EMAIL'},
        {id: 'phone', title: 'TELEFONO'},
        {id: 'address', title: 'DIRECCION'},
        {id: 'billFile', title: 'ARCHIVO BILL FPL'}
    ],
    append: true
});

// Ruta API principal que recibe el formulario
app.post('/api/submit-lead', upload.single('fplBill'), async (req, res) => {
    try {
        const { firstName, lastName, email, phone, address } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'Debes subir un archivo o foto de tu FPL Bill.' });
        }

        const fullName = `${firstName} ${lastName}`;
        const date = new Date().toLocaleString();

        // 1. Guardar en el Excel (CSV)
        try {
            await csvWriter.writeRecords([{
                date: date,
                name: fullName,
                email: email,
                phone: phone,
                address: address,
                billFile: file.filename
            }]);
        } catch (csvError) {
            console.error('⚠️ Error guardando en CSV. ¿Tienes el archivo Excel abierto?:', csvError);
        }

        // ====================================================================
        // RESPONDER AL CLIENTE INMEDIATAMENTE (Para evitar el error de Timeout)
        // ====================================================================
        res.status(200).json({ success: true, message: 'Auditoría solicitada exitosamente' });

        console.log(`✅ ¡NUEVO LEAD RECIBIDO Y PROCESADO! ${fullName} - ${address}`);
        console.log(`📄 Bill guardado en: uploads/${file.filename}`);

        // 2. Intentar Enviar Correo EN SEGUNDO PLANO (No hace esperar al cliente)
        if(process.env.GMAIL_USER && process.env.GMAIL_PASS && process.env.RECEIVER_EMAIL) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { 
                    user: process.env.GMAIL_USER, 
                    pass: process.env.GMAIL_PASS 
                }
            });
            
            // Nota: Quitamos el "await" para que esto ocurra en el fondo
            transporter.sendMail({
                from: `"Sistema Ahorro Leads" <${process.env.GMAIL_USER}>`,
                to: process.env.RECEIVER_EMAIL,
                subject: `🔥 NUEVO LEAD FPL: ${fullName}`,
                text: `¡Tienes un nuevo prospecto de Florida buscando bajar su Bill!\n\nNombre: ${fullName}\nEmail: ${email}\nTel: ${phone}\nDirección: ${address}\n\n*El recibo de FPL está adjunto a este correo.*`,
                attachments: [{ filename: file.originalname, path: file.path }]
            }).then(() => {
                console.log(`✉️ Email de alerta enviado con éxito a ${process.env.RECEIVER_EMAIL}`);
            }).catch((emailError) => {
                console.error('⚠️ ERROR AL ENVIAR EMAIL (Revisa tu .env):', emailError.message);
            });
        } else {
            console.warn(`⚠️ ALERTA: Faltan credenciales de Gmail en el archivo .env.`);
        }

    } catch (error) {
        console.error('❌ Error crítico procesando el lead:', error);
        res.status(500).json({ error: 'Hubo un error en el servidor.' });
    }
});

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Solar corriendo en: http://localhost:${PORT}`);
    console.log(`👉 Abre esa dirección en tu navegador para ver la Landing Page.`);
    console.log(`📁 Los FPL Bills se guardarán en la carpeta "uploads/"`);
    console.log(`📊 Los datos de los clientes se guardarán en "leads_solares.csv"`);
});
