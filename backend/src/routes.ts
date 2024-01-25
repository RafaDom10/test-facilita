import { Router } from 'express'
import { ClientController } from './app/controllers/ClientController'

const clientController = new ClientController()

const router = Router()

router.post('/clients', clientController.store)
router.put('/clients/:id', clientController.update)
router.get('/clients', clientController.index)
router.delete('/clients/:id', clientController.delete)

router.get('/clients/routes', clientController.calculateClientRoute)

export default router
