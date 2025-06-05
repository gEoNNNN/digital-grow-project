import './style.css';
import { initThree } from './three-setup.js';
import { setupThreeAnimation } from './three-animate.js';
import { setupUIAnimations } from './ui-animations.js';
import { setupModal } from './email.js';
import { setupBurgerMenu } from './burger-menu.js';

initThree();
setupThreeAnimation();
setupUIAnimations();
setupModal();
setupBurgerMenu();