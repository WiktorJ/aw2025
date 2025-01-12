import qrcode

def make_qr(box_size, border, fill_color, background_color, path):
    qr = qrcode.QRCode(version=None, box_size=box_size, border=border)
    qr.add_data('https://www.aw2025.eu')
    qr.make(fit=True)
    qr_image = qr.make_image(fill_color=fill_color, back_color=background_color)
    qr_image.save(path)

make_qr(box_size=20, border=2, fill_color='black', background_color='white', path='aw2025qr.png')