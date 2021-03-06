pkg load geometry;

n = 20;
s = 4;

figure(1)





# Graella de vectors
# ==================================================



# Definició
# ------------------------------

vectorsGrid = zeros(s, s);

for i = 1:s+2
    for j = 1:s+2
        a = rand() * pi * 2;
        vectorsGrid(i, j)=a;
    end
end



# Dibuix
# ------------------------------

w = n/s;
h = n/s;

subplot(2, 2, 1);
title('Graella de vectors');

for i = 1:s
    x = w * i;
    line([x,x], [0,n], 'Color', 'blue');
    hold on
end
for j = 1:s
    y = h * j;
    line([0,n], [y,y], 'Color', 'blue');
    hold on
end

for i = 1:s
    x = w * i;
    for j = 1:s
        y = h * j;
        v = pol2cart(vectorsGrid(i, j), w);
        line([ x, x + v(1)], [y, y + v(2)], 'Color', 'red');
        hold on
    end
end





# Dot product
# ==================================================



dotProduct = zeros(n, n);

for x = 1:n
    i = uint8(round(x/w))+1;
    for y = 1:n
        j = uint8(round(y/h)+1);
        a = vectorsGrid(i, j);
        v = pol2cart(a, s);
        gx = i * w;
        gy = j * h;
        dx = double(gx - x);
        dy = double(gy - y);
        p = [dx dy];
        dotProduct(x, y) = dot(p,v);
    end
end

figure(1)
subplot(2, 2, 2);
title('Dot product');
pcolor(dotProduct);





# Interpolation
# ==================================================



# ...
# ------------------------------

M = max(max(dotProduct));
a = dotProduct / M;
a = a * .5 + .5;



# ...
# ------------------------------

b = 6;
interpolation = interp2(a,b);
#interpolation = imresize(interpolation, 0.2)

figure(1)
subplot(2, 2, 3);
title('...');
imshow(a);



# ...
# ------------------------------


subplot(2, 2, 4);
title('Interpolation');
imshow(interpolation);
