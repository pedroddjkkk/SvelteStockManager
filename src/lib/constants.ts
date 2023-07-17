import FaTachometerAlt from 'svelte-icons/fa/FaTachometerAlt.svelte'
import FaTruckMoving from 'svelte-icons/fa/FaTruckMoving.svelte'
import type { Pages } from './types';

export const pages : Pages = [{
  name: "Dashboard",
  path: "/",
  icon: FaTachometerAlt,
}, {
  name: "Movimentations",
  path: "/movimentations",
  icon: FaTruckMoving,
}]