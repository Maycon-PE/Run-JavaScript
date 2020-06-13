import { cars, pilots } from './source/data/index.js'
import Car from './source/classes/Car.js'
import Pilot from './source/classes/Pilot.js'
import { carsDetails, pilotsDetails } from './source/views/info-base.js'

/* CSS */
import informations from './source/css/showInformations.js'

informations()

carsDetails(cars())

pilotsDetails(pilots())
