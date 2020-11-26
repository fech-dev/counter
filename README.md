# counter
Simple counter built in js

## Usage

### Module
  ```bash
  npm install @federico.mameli/counter

  or 

  yarn add @federico.mameli/counter
  ```

  ```js
  import Counter from '@fech-dev/counter'

  const counterEl = document.querySelector('.counter')
  const counter = new Counter({
    el: counterEl,
    from = 0,
    to = 100,
    incRange = 10,
    overflow = 0,
    time = 50,
    start = false
  })

  counter.start()
  ```

  ## options properties
  ### options.el <HtmlElement>
  The element where to print the counter values.
  ### options.from <Number>
  start value, default 0

  ### options.to <Number>
  end value, default 100

  ### options.incRange<Number>
  value added each time

  ### options.overflow <Float>
  default is 0, if a percentage is defined the counter will count until `to + (to * overflow)` and will count down until `to`. 

  ### options.time <Number>
  velocity of each change, default 50 ms

  ### options.start <Boolean>
  if true starts the counter

  ## METHODS
  ### start()
  Start the counter
