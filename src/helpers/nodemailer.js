export default sendMail = async ({ fullName, email, phone, message }) => {
  try {
    // create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      // secure: process.env.NODE_ENV == "development" ? false : true, // true for 465, false for other ports
      auth: {
        user: process.env.HOST_MAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    // Send mail
    const info = await transporter.sendMail({
      from: email, // sender
      to: process.env.HOST_MAIL,
      subject: "New Portfolio Contact Message",
      text: `Name: ${fullName}, Email: ${email}, Phone: ${phone}
        Message: ${message}`, // plain text
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });
    console.log(" Message sent: %s", info.messageId);
    //   try {
    //     const info = await transporter.sendMail({
    //       from: process.env.HOST_MAIL, // sender address
    //       to: email, // list of receivers
    //       subject: "", // Subject line
    //       text: "Hello world?", // plain text body
    //       html: "<b>Hello world?</b>", // html body
    //     });

    //     console.log("Message sent: %s", info.messageId);
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   } catch (err) {
    //     console.error("Error while sending mail", err);
    //   }
  } catch (error) {
    console.log(error.message, "something went wrong");
    return { success: false, error: err.message };
  }
};
