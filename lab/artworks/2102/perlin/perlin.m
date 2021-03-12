pkg load geometry;

n = 60;
s = 4;

figure(1)





# Graella de vectors
# ==================================================



# Definició
# ------------------------------

vectorsGrid = zeros(s, s);

for i = 1:s+1
    for j = 1:s+1
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
r = n/s * 10;

for x = 1:n
    for y = 1:n
        i = uint8(round(x/w));
        gx = double(i * w);
        if i == 0; i = s+1; end;
        j = uint8(round(y/h));
        gy = double(j * h);
        if j == 0; j = s+1; end;
        a = vectorsGrid(i, j);
        v = pol2cart(a, s);
        dx = double(x - gx);
        dy = double(y - gy);
        p = [dx dy];
        dotProduct(x,y) = dot(v,p);#dotProduct(x,y) = (dx^2+dy^2)^.5;#
    end
end

figure(1)
subplot(2, 2, 2);
title('Dot product');
imagesc(dotProduct);
hold on
for i = 1:s; x = w * i; line([x,x], [0,n], 'Color', 'magenta', 'LineWidth', 2); hold on; end;  for j = 1:s; y = h * j; line([0,n], [y,y], 'Color', 'magenta', 'LineWidth', 2); hold on; end; for i = 1:s; x = w * i; for j = 1:s; y = h * j; v = pol2cart(vectorsGrid(i, j), w); line([ x, x + v(1)], [y, y + v(2)], 'Color', 'red', 'LineWidth', 2); hold on; end; end





# Interpolation
# ==================================================



# ...
# ------------------------------

M = max(max(dotProduct));
a = dotProduct / M;
a = abs(a);
a = 1 - a;



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


#subplot(2, 2, 4);
#title('Interpolation');
#imshow(interpolation);
