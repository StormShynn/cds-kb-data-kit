---
name: I_PHYSINVTRYDOCHEADER
description: Physinvtrydocheader
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - header-level
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCHEADER

**Physinvtrydocheader**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PhysicalInventoryDocument` | `cast(ikpf.iblnr as pi_document preserving type)` |
| key `FiscalYear` | `ikpf.gjahr` |
| `InventoryTransactionType` | `cast(ikpf.vgart as pi_transaction_type preserving type)` |
| `Plant` | `ikpf.werks` |
| `StorageLocation` | `ikpf.lgort` |
| `InventorySpecialStockType` | `ikpf.sobkz` |
| `DocumentDate` | `ikpf.bldat` |
| `PhysInventoryPlannedCountDate` | `ikpf.gidat` |
| `PhysicalInventoryLastCountDate` | `ikpf.zldat` |
| `PostingDate` | `cast(ikpf.budat as mmim_postingdate preserving type)` |
| `FiscalPeriod` | `cast(ikpf.monat as pi_monat preserving type)` |
| `CreatedByUserName` | `cast(ikpf.usnam as pi_created_by_user preserving type)` |
| `PostingIsBlockedForPhysInvtry` | `ikpf.sperr` |
| `PhysicalInventoryCountStatus` | `ikpf.zstat` |
| `PhysInvtryAdjustmentPostingSts` | `ikpf.dstat` |
| `PhysInventoryReferenceNumber` | `cast(ikpf.xblni as pi_reference preserving type)` |
| `PhysInvtryDeletionStatus` | `ikpf.lstat` |
| `PhysInvtryDocHasQtySnapshot` | `cast(ikpf.xbufi as pi_book_inventory_freeze preserving type)` |
| `PhysicalInventoryGroupType` | `ikpf.keord` |
| `PhysicalInventoryGroup` | `ikpf.ordng` |
| `PhysicalInventoryNumber` | `cast(ikpf.invnu as pi_number preserving type)` |
| `PhysicalInventoryDocumentDesc` | `ikpf.ibltxt` |
| `PhysicalInventoryType` | `cast(ikpf.invart as pi_type preserving type)` |
| `LastChangeDateTime` | `ikpf.lastchange_datetime` |
| `SalesPriceValuationIsActive` | `cast(t001k.xvkbw as pi_is_sp_valuation_active preserving type)` |
| `ValuationArea` | `t001k.bwkey` |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_CreatedByUser` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_PhysInvtryDocItem` | *Association* |
| `_PhysInvtryGroupType` | *Association* |
| `_PhysInvtryType` | *Association* |
| `_InventoryTransactionType` | *Association* |
| `_PhysInvtryCountSts` | *Association* |
| `_PhysInvtryDeletionSts` | *Association* |
| `_PhysInvtryPostSts` | *Association* |
| `_PhysInvtryDocFiscalYear` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_InventorySpecialStockType` | `I_PhysInvtrySpecialStockTypeVH` | [0..1] |
| `_PhysInvtryDocItem` | `I_PhysInvtryDocItem` | [0..*] |
| `_ItemExtension` | `E_PhysInvtryDocumentItem` | [0..*] |
| `_PhysInvtryGroupType` | `I_PhysInvtryGroupType` | [0..1] |
| `_PhysInvtryType` | `I_PhysInvtryType` | [0..1] |
| `_InventoryTransactionType` | `I_StockTakingTransactionType` | [0..1] |
| `_PhysInvtryCountSts` | `I_PhysInvtryCountSts` | [0..1] |
| `_PhysInvtryDeletionSts` | `I_PhysInvtryDeletionSts` | [0..1] |
| `_PhysInvtryPostSts` | `I_PhysInvtryPostSts` | [0..1] |
| `_PhysInvtryDocFiscalYear` | `I_PhysInvtryDocFiscalYear` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Physical Inventory Document Header'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser'],
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@ObjectModel: {
                 usageType: {
                              sizeCategory: #XL,
                              serviceQuality: #B,
                              dataClass: #TRANSACTIONAL
                            },
                 representativeKey: 'PhysicalInventoryDocument',
                 semanticKey: ['PhysicalInventoryDocument', 'FiscalYear'],
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                 sapObjectNodeType.name: 'PhysicalInventoryDocument'
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Metadata: {
             ignorePropagatedAnnotations: true
           }
           
@Metadata.allowExtensions:true 

@Analytics:{
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: 
      [{ table: 'ikpf',
         role: #MAIN,
         viewElement: ['PhysicalInventoryDocument', 'FiscalYear'],
         tableElement: ['iblnr', 'gjahr'] },
       { table: 't001k',
         role: #LEFT_OUTER_TO_ONE_JOIN,
         viewElement: ['ValuationArea'],
         tableElement: ['bwkey'] }
      ]
    } 
  },
  internalName: #LOCAL,
  technicalName: 'IPIDOCHEADER'
}
 
define view entity I_PhysInvtryDocHeader
  as select from ikpf
  left outer to one join t001w on ikpf.werks = t001w.werks
  left outer to one join t001k on t001w.bwkey = t001k.bwkey

  association [0..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant

  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation

  association [0..1] to I_User                       as _CreatedByUser             on  $projection.CreatedByUserName = _CreatedByUser.UserID

  association [0..1] to I_PhysInvtrySpecialStockTypeVH  as _InventorySpecialStockType on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..*] to I_PhysInvtryDocItem          as _PhysInvtryDocItem         on  $projection.PhysicalInventoryDocument = _PhysInvtryDocItem.PhysicalInventoryDocument
                                                                                   and $projection.FiscalYear                = _PhysInvtryDocItem.FiscalYear
  association [0..*] to E_PhysInvtryDocumentItem    as _ItemExtension              on  $projection.PhysicalInventoryDocument = _ItemExtension.PhysicalInventoryDocument
                                                                                   and $projection.FiscalYear = _ItemExtension.FiscalYear
                                                                                                                                                                     
  association [0..1] to I_PhysInvtryGroupType        as _PhysInvtryGroupType       on  $projection.PhysicalInventoryGroupType = _PhysInvtryGroupType.PhysicalInventoryGroupType

  association [0..1] to I_PhysInvtryType             as _PhysInvtryType            on  $projection.PhysicalInventoryType = _PhysInvtryType.PhysicalInventoryType

  association [0..1] to I_StockTakingTransactionType as _InventoryTransactionType  on  $projection.InventoryTransactionType = _InventoryTransactionType.InventoryTransactionType

  association [0..1] to I_PhysInvtryCountSts         as _PhysInvtryCountSts        on  $projection.PhysicalInventoryCountStatus = _PhysInvtryCountSts.PhysicalInventoryCountStatus

  association [0..1] to I_PhysInvtryDeletionSts      as _PhysInvtryDeletionSts     on  $projection.PhysInvtryDeletionStatus = _PhysInvtryDeletionSts.PhysInvtryDeletionStatus

  association [0..1] to I_PhysInvtryPostSts          as _PhysInvtryPostSts         on  $projection.PhysInvtryAdjustmentPostingSts = _PhysInvtryPostSts.PhysInvtryAdjustmentPostingSts
  association [1..1] to I_PhysInvtryDocFiscalYear    as _PhysInvtryDocFiscalYear   on  $projection.FiscalYear = _PhysInvtryDocFiscalYear.FiscalYear

{

  key cast(ikpf.iblnr as pi_document preserving type)                as PhysicalInventoryDocument,
  @ObjectModel.foreignKey.association: '_PhysInvtryDocFiscalYear'
  key ikpf.gjahr                                                     as FiscalYear,

      @ObjectModel.foreignKey.association: '_InventoryTransactionType'
      cast(ikpf.vgart as pi_transaction_type preserving type)        as InventoryTransactionType,
      @ObjectModel.foreignKey.association: '_Plant'
      ikpf.werks                                                     as Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      ikpf.lgort                                                     as StorageLocation,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      ikpf.sobkz                                                     as InventorySpecialStockType,
      ikpf.bldat                                                     as DocumentDate,
      ikpf.gidat                                                     as PhysInventoryPlannedCountDate,
      ikpf.zldat                                                     as PhysicalInventoryLastCountDate,
      cast(ikpf.budat as mmim_postingdate preserving type)           as PostingDate,
      cast(ikpf.monat as pi_monat preserving type)                   as FiscalPeriod,
      cast(ikpf.usnam as pi_created_by_user preserving type)         as CreatedByUserName,
      ikpf.sperr                                                     as PostingIsBlockedForPhysInvtry,
      @ObjectModel.foreignKey.association: '_PhysInvtryCountSts'
      ikpf.zstat                                                     as PhysicalInventoryCountStatus,
      @ObjectModel.foreignKey.association: '_PhysInvtryPostSts'
      ikpf.dstat                                                     as PhysInvtryAdjustmentPostingSts,
      cast(ikpf.xblni as pi_reference preserving type)               as PhysInventoryReferenceNumber,
      @ObjectModel.foreignKey.association: '_PhysInvtryDeletionSts'
      ikpf.lstat                                                     as PhysInvtryDeletionStatus,
      cast(ikpf.xbufi as pi_book_inventory_freeze preserving type)   as PhysInvtryDocHasQtySnapshot,
      ikpf.keord                                                     as PhysicalInventoryGroupType,
      ikpf.ordng                                                     as PhysicalInventoryGroup,
      cast(ikpf.invnu as pi_number preserving type)                  as PhysicalInventoryNumber,
      ikpf.ibltxt                                                    as PhysicalInventoryDocumentDesc,
      @ObjectModel.foreignKey.association: '_PhysInvtryType'
      cast(ikpf.invart as pi_type preserving type)                   as PhysicalInventoryType,
      ikpf.lastchange_datetime                                       as LastChangeDateTime,
      cast(t001k.xvkbw as pi_is_sp_valuation_active preserving type) as SalesPriceValuationIsActive,
      @Consumption.hidden: true
      t001k.bwkey                                                    as ValuationArea,
      
      _Plant,
      _StorageLocation,
      _CreatedByUser,
      _InventorySpecialStockType,
      _PhysInvtryDocItem,
      _PhysInvtryGroupType,
      _PhysInvtryType,
      _InventoryTransactionType,
      _PhysInvtryCountSts,
      _PhysInvtryDeletionSts,
      _PhysInvtryPostSts,
      _PhysInvtryDocFiscalYear
}
```
