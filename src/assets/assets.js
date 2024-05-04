import sideBar from './bg-sidebar-desktop.svg';
import advance from './icon-advanced.svg';
import arcade from './icon-arcade.svg';
import pro from './icon-pro.svg';
import thankYou from './icon-thank-you.svg';
import checkMark from './icon-checkmark.svg';

export const assets = {
  sideBar,
  advance,
  arcade,
  pro,
  thankYou,
  checkMark,
};

export const billings = [
  {
    type: 'Arcade',
    img: arcade,
    desc: 9,
    pri: 90,
  },
  {
    type: 'Advance',
    img: advance,
    desc: 12,
    pri: 120,
  },
  {
    type: 'Pro',
    img: pro,
    desc: 15,
    pri: 150,
  },
];

export const picking = [
  {
    title: 'Online Service',
    desc: 'Access to multiplayer games',
    price: 1,
    pri: 10,
  },
  {
    title: 'Larger Storage',
    desc: 'Extra 1TB of cloud save',
    price: 2,
    pri: 20,
  },
  {
    title: 'Customizable Profile',
    desc: 'Access to multiplayer games',
    price: 2,
    pri: 20,
  },
];
