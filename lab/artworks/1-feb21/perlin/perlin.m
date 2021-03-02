pkg load geometry;

n = 100;
s = 10;

figure(1)





# Graella de vectors
# ==================================================



# Definició
# ------------------------------

vectorsGrid = zeros(s, s);

for i = 1:s
    for j = 1:s
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
        v = pol2cart(vectorsGrid(i, j), s * .5);
        line([ x, x + v(1)], [y, y + v(2)], 'Color', 'red');
        hold on
    end
end





# Dot product
# ==================================================



dotProduct = zeros(n, n);

for x = 1:n
    i = uint8(round(x/s));
    for y = 1:n
        j = uint8(round(y/s));
        if j == 0; j = 1; end; if i == 0; i = 1; end
        v = pol2cart(vectorsGrid(i, j), s * .5);
        gx = i * w;
        gy = j * h;
        dx = double(x - gx);
        dy = double(y - gy);
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

F=1/9*ones(n);
interpolation=filter2(a,F);



# ...
# ------------------------------

figure(1)
subplot(2, 2, 3);
title('...');
imshow(a);

subplot(2, 2, 4);
title('Interpolation');
imshow(interpolation);
