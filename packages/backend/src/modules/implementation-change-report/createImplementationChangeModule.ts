import { Logger } from '@l2beat/backend-tools'
import { ConfigReader } from '@l2beat/discovery'
import { ChainConverter } from '@l2beat/shared-pure'

import { Config } from '../../config'
import { Peripherals } from '../../peripherals/Peripherals'
import { ApplicationModule } from '../ApplicationModule'
import { ImplementationChangeController } from './api/ImplementationChangeController'
import { createImplementationChangeRouter } from './api/createImplementationChangeRouter'

export function createImplementationChangeModule(
  config: Config,
  logger: Logger,
  peripherals: Peripherals,
): ApplicationModule | undefined {
  if (!config.implementationChangeReporterEnabled) {
    logger.info('DiffHistory module disabled')
    return
  }

  const configReader = new ConfigReader()
  const chainConverter = new ChainConverter(config.chains)

  const controller = new ImplementationChangeController(
    peripherals.database,
    configReader,
    chainConverter,
  )

  const routers = [createImplementationChangeRouter(controller)]

  const start = () => {}

  return {
    routers,
    start,
  }
}
