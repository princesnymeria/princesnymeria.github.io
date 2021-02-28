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
        #plot(x,y, 'Color', 'red', 'LineWidth', 5);
        hold on
    end
end





# Dot product
# ==================================================







x=35; y=68;
i = uint8(round(x/s));j = uint8(round(y/s));

a = vectorsGrid(i, j);
v = pol2cart(a, 100);
r = pol2cart(a + pi *.5, 100);

x2 = w * (i +.5);
y2 = h * (j +.5);

l1 = createLine([x, x+v(1)], [y, y+v(2)]);
l2 = createLine([x2,x2+r(1)], [y2,y2+r(2)]);
p = intersectLines(l1, l2)

figure(2)
line(l1(1:2),l1(3:4), 'Color', 'red');
hold on
line(l2(1:2),l2(3:4), 'Color', 'blue');
hold on
plot(p, 'Color', 'green');







#G = zeros(n, n);

#for x = 1:n
#    i = uint8(round(x/s));
#    for y = 1:n
#        j = uint8(round(y/s));
#        if j == 0; j = 1; end; if i == 0; i = 1; end
#        r = vectorsGrid(i, j, :) * rotz;
#        v = point2Line([x,y,0], [i,j,0], [r(1),r(2),0]);
#        G(x, y) = i*j;
#    end
#end

#figure(1)
#subplot(2, 2, 2);
#title('Dot product');
#pcolor(G);










# ...
# ==================================================



# subplot(2, 2, 3);
# title('Interpolació');

# imshow(G);


# subplot(2, 2, 4);
# title('');

# imshow(G);