# Notes

**gird terminolgies**
- grid line 
- grid cell 
- grid container
- grid track
- grid area -> how much cell covered


## properties
- flex -> 1 Dimension (veritcal or horizontal)
- grid -> 2d
- display : grid (grid is applied to the parent)
    - grid-template-row/column - [10px 10px 10px 10px]/ repeat(4 10px)
    - grid-gap : 10px

*applied to the children*
- grid row-start/end : 1 / span(no. of columns)
- grid column start/end : 5 / span(no of colmns)
- span and grid-row/column-start (use togather)
- always end at last then row/column-end : -1

- grid-row : start/end
- grid-column : start/end

- grid-area : row start / column start / row end / column end

## Box-Model
- box-sizing : border-box / content-box
- margin is overlapping so the margin between two is overlapping meaning the higher numbere is selected.

## Units
- absolute 
- relative 
    - em : size is em times the parent element
    - rem : size is em times the root element
    - vh : viewport height [percentage of the screen hight]
    - vw : vieport width [percentage of the screen width]

## Positioning
- position : static / absolute / fixed / relative / sticky
    - top : 40px