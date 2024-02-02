import os
from PIL import Image

# 指定目标大小（以字节为单位）
target_size = 256  # 修改为你想要的目标大小

# 获取当前目录下的所有文件
files = [f for f in os.listdir('.') if os.path.isfile(f)]

# 遍历文件列表
for file in files:
    # 检查文件是否为图片（支持的格式可根据实际需求修改）
    if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
        img = Image.open(file)
        img.save(file,quality=30)
        print(f"Compressed {file}. New size: {os.path.getsize(file)} bytes")