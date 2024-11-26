# 포트폴리오

[홈페이지 바로가기](https://bogyeom-portfolio.vercel.app/)

## 주요 기술

- `next.js`
- `tailwind CSS`
- `gsap`
- `python`

## Ascii Art 생성 코드

```python
from PIL import Image, ImageEnhance

# 확장된 ASCII 문자 세트 정의 (어두운 순서대로)
ASCII_CHARS = "@&%#WM*oahkbdpqwm+=-:. "

def resize_image(image, new_width=100):
    """이미지 크기 조정."""
    width, height = image.size
    aspect_ratio = height / width
    new_height = int(new_width * aspect_ratio * 0.55)  # 문자 높이 보정
    return image.resize((new_width, new_height))

def grayscale_image(image):
    """이미지 흑백 변환."""
    return image.convert("L")

def adjust_image(image, brightness=1.0, contrast=1.5):
    """이미지 밝기와 대비 조정."""
    enhancer = ImageEnhance.Brightness(image)
    image = enhancer.enhance(brightness)
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(contrast)
    return image

def pixels_to_ascii(image, gamma=2.2):
    """이미지 픽셀을 ASCII 문자로 변환."""
    pixels = image.getdata()
    # 감마 보정 적용
    corrected_pixels = [int((pixel / 255) ** (1 / gamma) * 255) for pixel in pixels]
    ascii_str = "".join([ASCII_CHARS[cpixel * (len(ASCII_CHARS) - 1) // 255] for cpixel in corrected_pixels])
    return ascii_str

def convert_to_ascii(file_path, new_width=100):
    """이미지 파일을 ASCII 아트로 변환."""
    try:
        image = Image.open(file_path)
    except FileNotFoundError:
        print(f"파일 경로를 찾을 수 없습니다: {file_path}")
        return
    except Exception as e:
        print(f"이미지를 열 수 없습니다: {e}")
        return

    # 이미지 변환 과정
    try:
        image = resize_image(image, new_width)
        image = grayscale_image(image)
        image = adjust_image(image, brightness=1.0, contrast=1.5)

        ascii_str = pixels_to_ascii(image, gamma=2.2)
        img_width = image.width
        ascii_art = "\n".join([ascii_str[i:i+img_width] for i in range(0, len(ascii_str), img_width)])

        return ascii_art
    except Exception as e:
        print(f"ASCII 변환 중 오류 발생: {e}")
        return

# 실행 예제
if __name__ == "__main__":
    file_path = "your_file.png"  # 변환할 이미지 파일 경로
    ascii_art = convert_to_ascii(file_path, new_width=200)
    if ascii_art:
        with open("ascii_art.txt", "w") as f:
            f.write(ascii_art)
        print("ASCII 아트가 생성되었습니다. 'ascii_art.txt' 파일을 확인하세요.")
```

## Ascii Art 결과 예제

```text
-----==++mmmm++=--:::::::::-==+mmmmm++++mmmwwwwwwqwwqqqqqqqqqqqqqwwqqqqqqqqwwwwwwmmmwwwwwwwwwwwwwwmm
====+mmwwwwwwwwwwwm+++=====+++mmmmmm+++++++mmwwwwwwwwwwqqqqqqqqqqqqqqwwwqqqwwwwwwwwwwwwwwwwwwwwwwwww
mmmmwwwwwwwwwwwwqwwwwwwwwwwwwwwwwwwwmmmmm+=-:::::....:::-=+mwqqqwqqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm-.      ...............-=mqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmmm++
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm-:.     .....................:+wqwwwwwwwwwwwwwwwwwwmmmmmmmmm+++++
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm-................................:=wwwwwwwwwwwwwwwwwmmmmmmmmmmm++==
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww=..........................:-........:+wwwwwwwwwwwwwmmmmmmm+++++=----
wwwwwwwwwwwwwwwwwwwwwwwwwwwwww:....=................:-.....--.........-wwwwwmmmmmmmmmmmmm+++++++++++
wwwwwwwwwwwwwwwwwwwmmmmmmmmmw:::...+...............:-.......=:.........:mwwwwmmmmmmmmmmmmmmmmmmm++++
wwwwwwwwwwwwwwwwwmmmmmmmmmmw=:-...:=...............-........:=..........:wmwwmmmmmmm+++=============
wwwwwwwwwwwwmmmmmmmmmmmmmmmm:-....--..............-:.........=...........-wmmmmmmm++==----------====
wqppqqqqqwwmmmmmmmmmmmmmmmw--.....-:..............:..........=............mmmmmmmmmm++=========+++++
qpbbdpqqqqqwmmmmmmmmmmmmmm+::....:=...............:=:........:............=mmmmmmmmmmmm+++++++mmmmmm
wqpddddpqqqqwm++++++++++++.-w=-=qd+...............:qkdw+===+m-............-wmmmmmmmmmmmmmmmmmmm++m+m
wwwqpppppppppqwm+======+m::=pwmwq=-::...............:+wwwwm+-.............+wmmmmmmmmm+++++++++++++++
mwwwqppppppdppqqm=--===+++++++===++++====-................................w+++++++++================
mmmwwqpdbbbbbdqqw=-==------=+=-::---=+=====-::::.........................:q-=====-------------------
mmmmmwqpbkkkkbpqwm:==---=++m===--:::-m+++++q-::::--::::::...:...........:++:::::::.........---====++
wwwwwwqppddbbbpp+:..---mm=------=++===----=m-.......:::--:::-:.........:=m:...:::.........:mmmmmmmmm
pqqqppppppdddddpwm=...:m+--------m+------===-.........................:=+m--=+mmmmm===::=mmmmmmmmmmm
bddbbbbdpppdbkbdppqmm+-.::---==--=---==+=::..........................:==wmmmmmmmmmmwwwwwwwmmmmmmmmmm
bbbbbbbpqwwwpdddppqpq+-------=..........:-:.........................:==wwmmmmmwwqqwwwwwwwwmmmwwwwmmm
pddqqqqqwwwwwqqppqpw=--:::::=+............--::....................:-==wwmwwwqqqpdddpqqwwwwmmwwwwwwww
pddqwwwwwwwwqqqqqpp=.:-------=..............::--::..............:-==+mwwwwqpdpppddppqqqwwwwqqqwwqqqq
dddppqqqqqqqqqqqqqp:.........=..................:::--::::....:-===++= +qwwwwwwwwwwwwwwwwwqpppqqqpppp
qppppppqqqwwwwwwqqp:.........=q:......................:::::-=+++++w-  wqwwwmmmmmwwmmmmmmwwwwwwmmwwwq
wqqqqqqqwwwwwwwwqqd=........-+w+:............................:-=++-. -qwwwwwmmmwwwmmmmmmmmmmmwwwmmmw
qqqpppqqwwwqqqqqqpdm-:.....::+=-+:...............................=q: -qwwqwwwwmwwwmmmmmmmmmmwqqqqwww
pppddddppqqppppppppp==:.....=m=..=:...............................:=: mwwwqqwwwwmmmmwwqqwwwwqqqqpppq
dddddbbbbbddpppppppdw==-:..-w+....+:................................+..wwwwpqwwwwwwqppddppqqqqqppddd
bbbddbbkkkkkbdddppppdw===--m=..:::-m=:..............................:= :qwwwpqwwwqpddddpppppppppdddd
kkkbbkkkhhhkbbbbbddppdq+==m+       .=+-:.............................=. mqwqqpqqqqpdbdddppdddddppppp
hhhhhhhhhkkkbbbkkbdddddpmmm:        :.-+=-:.......................::=w. +pqqwqdpppddbbbbddbbbbbbdddb
hhaahhhkkkkkkkkkkkbbbbbbbq+        .:  .-===-::...............::--=+++: +qwwwwpdpddbbbbbbbbbbkkkkkkk
hhhhhhkkkkkhhhhkkkkkkkkbw=-        :      :==+==------------=====++-:=. +wwwwwwpppppdddddbbbkkkhhhhh
kkkkhhhhhhhhhhkkkbbbbbbd:.         -         .-==++++++===+++++m=-:.:-. wwwwwwwqqqqqppddbbkkkkhhhhhh
bbbbkkkkkkkkkbbbbddddbbw          .:             ..::--====---=-....-: :qwwwwwwqpqpppdbbbkkkkhhhhkkk
qqpddddbbbbbddddddddddd-          :.                        .: ....:-. =wwwwwwwwpppddbbbbbkkkhhhkkbb
wwqppppdbbbddddpppppppq           :                        ..  ....=:. wwwwwwwwwpbdbbbbbbbbkkhhkbbbb
m=-=mqpdbbddddpppppqqqm           -                       :. .....:-. .qwwwwwwwwpbbbbbbbbbbbbkhkbbbb
=:...-+=---+qpqqqqwwwwm......... .+                      :  ......:-. .qwwwwwwwwpbddbbbbddddbkkkbbbb
::.-+++=:..:mwmmmmmmmm=          :+....................... .......:-.  wwwwwwwwwqbdddbbbbdddbbbbbbbb
--:+pdbp:.-=mmmm===+++=           -                      .::.......=.. =qwwwwwwwqppdddbbbbbbbbdwmwpd
++qmmwm+=+++qbw+:.::-=-.::.       -      .::....-=:.    ...::......:-.  wwwwwwwwwqqqqqqqqqpppppp+--+
=+qwm+==wakpdbqww+=---=+w=:.    :-+=-..-+mmmmmqq+---. ......:-::-::.--. -wwwwwwmmwmmmm++mmwwwm+++===
wqpwq+---mbqwwwwwwwm+mmwwqppw=---=+mm+=+wqmmmmqdwmwwm=---:....-::----+-.=pw+---=+mmwbkqwqpqw+-----+m
-q@@k-::---+++mppbkbdpwwwqqddw+--=++wmmmqpwwwmmppw+mww++m+=-=+mmm+mmmmwmww+::::::++=mkMabp+=+mwwm+++
baMM*pwm+=+m=-mhbbqmmmwm+wppqw+----+d++mm=+qpppppqwwwwwqwwmmd*km==+mwwwm:..::=====---:+MMm-=+wqw+mbh
@@owmq+:::-+mwdwm+++-:-++mwmwwqdpqdhh==+mwpw+=+wqqwqwwqw+====pm-==+++m+:::::=pwmw==+wpd#Mwmwwwpppddq
##kppoWm+wmmph&m=::=+-:-+++qbhbdkokbbpqqqwm:-===+wwwwwdw===++++mm+=-:::=mmm+-:=+::=wpdkqm++=+wqwm+-:
hp++mdM@hdm+qdhMkbbhMpwb*d+mwbdpM&*apw=:::::--=++++=-=dMbw==mwqpp+-::-b#hqpqw-map-+wppd+-:.:=+=::.-m
```
