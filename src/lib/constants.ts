import FaTachometerAlt from 'svelte-icons/fa/FaTachometerAlt.svelte'
import FaTruckMoving from 'svelte-icons/fa/FaTruckMoving.svelte'
import FaUser from 'svelte-icons/fa/FaUser.svelte'
import type { Pages } from './types';

export const pages : Pages = [{
  name: "Dashboard",
  path: "/",
  icon: FaTachometerAlt,
}, {
  name: "Movements",
  path: "/movements",
  icon: FaTruckMoving,
}, {
  name: "Users",
  path: "/users",
  icon: FaUser,
}]