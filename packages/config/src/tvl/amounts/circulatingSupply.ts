import {
  assert,
  AssetId,
  CirculatingSupplyEntry,
  Token,
  UnixTime,
} from '@l2beat/shared-pure'
import { BackendProject, chainConverter } from '../../backend'
import { ChainConfig } from '../../common'

export function getCirculatingSupplyEntry(
  chain: ChainConfig,
  token: Token,
  project: BackendProject,
): CirculatingSupplyEntry {
  assert(token.supply === 'circulatingSupply')
  assert(chain.minTimestampForTvl, 'Chain with token should have minTimestamp')

  const sinceTimestamp = UnixTime.max(
    chain.minTimestampForTvl,
    token.sinceTimestamp,
  )

  const isAssociated = !!project.associatedTokens?.includes(token.symbol)
  const includeInTotal = true

  return {
    assetId: AssetId.create(
      chainConverter.toName(token.chainId),
      token.address,
    ),
    chain: chainConverter.toName(token.chainId),
    project: project.projectId,
    decimals: token.decimals,
    symbol: token.symbol,
    category: token.category,
    type: 'circulatingSupply',
    address: token.address ?? 'native',
    coingeckoId: token.coingeckoId,
    sinceTimestamp,
    untilTimestamp: token.untilTimestamp,
    includeInTotal,
    isAssociated,
    source: token.source,
    dataSource: chain.name,
  }
}