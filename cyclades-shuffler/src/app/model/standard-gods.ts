import { God } from './god';
import { GameModules } from './game-modules';

export const GODS: God[] = [
    {
      id: 1,
      name: 'Ares',
      imagePath: 'assets/img/gods/ares.png',
      gameModule: GameModules.Basic
    },
    {
      id: 2,
      name: 'Poseidon',
      imagePath: 'assets/img/gods/poseidon.png',
      gameModule: GameModules.Basic
    },
    {
      id: 3,
      name: 'Athena',
      imagePath: 'assets/img/gods/athena.png',
      gameModule: GameModules.Basic
    },
    {
      id: 4,
      name: 'Zeus',
      imagePath: 'assets/img/gods/zeus.png',
      gameModule: GameModules.Basic
    }
];
