
## Matrix

### rotate2d
```glsl
    mat2 rotate2d (float angle) {
        return mat2(
            cos(angle), -sin(angle),
            sin(angle), cos(angle)
        );
    }
```

### scale2d
```glsl
    mat2 scale2d (vec2 scale) {
        return mat2(
            scale.x, 0.0,
            0.0,     scale.y
        );
    }
```
