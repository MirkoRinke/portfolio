import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

@Component({
  selector: 'app-snake-canvas',
  imports: [CommonModule],
  templateUrl: './snake-canvas.component.html',
  styleUrls: ['./snake-canvas.component.scss'],
})
export class SnakeCanvasComponent implements OnInit {
  @Output() scoreChange = new EventEmitter<number>();

  canvas!: HTMLCanvasElement;
  canvasWidth!: number;
  canvasHeight!: number;
  ctx!: CanvasRenderingContext2D;
  gameInterval: any;

  snake: { x: number; y: number }[] = [];
  boxSize!: number;

  food!: { x: number; y: number };

  direction = 'RIGHT';
  nextDirection = 'RIGHT';

  score = 0;
  winningScore = 20; // Default value is 399

  isGameRunning = false;
  hasWon!: boolean;

  snakeColor: string = 'rgb(61, 207, 182)';
  foodColor: string = 'rgb(255, 255, 255)';

  constructor(
    private ngZone: NgZone,
    public svgIconsService: SvgIconsService
  ) {}

  ngOnInit() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    const rect = this.canvas.getBoundingClientRect();
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;

    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.snake = [{ x: this.canvasWidth / 2, y: this.canvasHeight / 2 }];
    this.boxSize = Math.min(this.canvasWidth, this.canvasHeight) / 20;
    this.setSnakeColor();
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    });
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  setSnakeColor() {
    if (localStorage.getItem('currentColor') === 'violett')
      this.snakeColor = 'rgb(102, 71, 148)';
    else if (localStorage.getItem('currentColor') === 'blue')
      this.snakeColor = 'rgb(74, 144, 226)';
    else this.snakeColor = 'rgb(61, 207, 182)';
  }

  startGame() {
    this.isGameRunning = true;
    this.food = { x: this.getRandomPosition(), y: this.getRandomPosition() };
    this.score = 0;
    this.snake = [{ x: this.canvasWidth / 2, y: this.canvasHeight / 2 }];
    this.direction = 'RIGHT';
    this.nextDirection = 'RIGHT';
    this.canvas.style.display = 'block';
    this.ngZone.runOutsideAngular(() => {
      this.gameInterval = setInterval(() => this.update(), 100);
    });
    this.ngZone.run(() => {
      this.scoreChange.emit(this.score);
    });
  }

  endGame() {
    this.ngZone.run(() => {
      clearInterval(this.gameInterval);
      this.isGameRunning = false;
    });
  }

  update() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawFood();
      this.moveSnake();
      this.drawSnake();
      this.checkCollision();
      this.checkScore();
    }
  }

  getRandomPosition() {
    return (
      Math.floor(Math.random() * (this.canvas.width / this.boxSize)) *
      this.boxSize
    );
  }

  drawSnake() {
    this.snake.forEach((segment) => {
      this.ctx.fillStyle = this.snakeColor;
      this.ctx.fillRect(segment.x, segment.y, this.boxSize, this.boxSize);
    });
  }

  drawFood() {
    this.ctx.fillStyle = this.foodColor;
    this.ctx.fillRect(this.food.x, this.food.y, this.boxSize, this.boxSize);
  }

  moveSnake() {
    const head = { ...this.snake[0] };
    this.direction = this.nextDirection;
    switch (this.direction) {
      case 'RIGHT':
        head.x += this.boxSize;
        if (head.x >= this.canvas.width) head.x = 0;
        break;
      case 'LEFT':
        head.x -= this.boxSize;
        if (head.x < 0) head.x = this.canvas.width - this.boxSize;
        break;
      case 'UP':
        head.y -= this.boxSize;
        if (head.y < 0) head.y = this.canvas.height - this.boxSize;
        break;
      case 'DOWN':
        head.y += this.boxSize;
        if (head.y >= this.canvas.height) head.y = 0;
        break;
    }
    this.snake.unshift(head);
    this.checkEatingFood(head);
  }

  checkCollision() {
    const head = this.snake[0];
    for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
        this.ngZone.run(() => {
          this.hasWon = false;
          this.endGame();
        });
      }
    }
  }

  checkScore() {
    if (this.score >= this.winningScore) {
      this.ngZone.run(() => {
        this.hasWon = true;
        this.endGame();
      });
    }
  }

  checkEatingFood(head: { x: number; y: number }) {
    const tolerance = this.boxSize / 2;
    if (
      Math.abs(head.x - this.food.x) < tolerance &&
      Math.abs(head.y - this.food.y) < tolerance
    ) {
      this.food = { x: this.getRandomPosition(), y: this.getRandomPosition() };
      this.score += 1;
      this.ngZone.run(() => {
        this.scoreChange.emit(this.score);
      });
    } else {
      this.snake.pop();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this.direction !== 'LEFT')
      this.nextDirection = 'RIGHT';
    if (event.key === 'ArrowLeft' && this.direction !== 'RIGHT')
      this.nextDirection = 'LEFT';
    if (event.key === 'ArrowUp' && this.direction !== 'DOWN')
      this.nextDirection = 'UP';
    if (event.key === 'ArrowDown' && this.direction !== 'UP')
      this.nextDirection = 'DOWN';
  }
}
