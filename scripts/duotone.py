"""Apply a black & white base with an orange/green duotone tint to the profile photo."""
from PIL import Image, ImageOps

SRC = r"C:\Users\arzoo\Desktop\application-counter-extension\public\images\itba-malahat-original.jpg"
OUT = r"C:\Users\arzoo\Desktop\application-counter-extension\public\images\itba-malahat.jpg"

# Rich green for shadows/midtones, warm orange for highlights.
SHADOW = (12, 74, 46)       # deep forest green
MID = (92, 120, 58)         # olive transition
HIGHLIGHT = (247, 165, 60)  # warm orange

img = ImageOps.autocontrast(Image.open(SRC).convert("L"), cutoff=1)

def lerp(a, b, t):
    return round(a + (b - a) * t)


def sample(i):
    t = i / 255
    if t < 0.5:
        u = t / 0.5
        return tuple(lerp(SHADOW[c], MID[c], u) for c in range(3))
    u = (t - 0.5) / 0.5
    return tuple(lerp(MID[c], HIGHLIGHT[c], u) for c in range(3))


ramp = [sample(i) for i in range(256)]
lut_r = [p[0] for p in ramp]
lut_g = [p[1] for p in ramp]
lut_b = [p[2] for p in ramp]

duotone = Image.merge(
    "RGB",
    [
        img.point(lut_r),
        img.point(lut_g),
        img.point(lut_b),
    ],
)

duotone.save(OUT, quality=92)
print("Saved", OUT, duotone.size)
