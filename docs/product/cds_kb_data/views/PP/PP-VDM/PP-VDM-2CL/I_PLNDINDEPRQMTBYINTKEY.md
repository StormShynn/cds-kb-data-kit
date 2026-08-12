---
name: I_PLNDINDEPRQMTBYINTKEY
description: "Plndindeprqmtbyintkey"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTBYINTKEY

**Plndindeprqmtbyintkey**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlndIndepRqmtInternalID` | ✓ | |  | `bdzei` |  |  |
| `PlndIndepRqmtVersion` |  | |  | `versb` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `MRPArea` |  | |  | `cast(werks as berid)` |  |  |
| `PlndIndepRqmtType` |  | |  | `cast(bedae as pph_bedae preserving type)` |  |  |
| `RequirementPlan` |  | |  | `pbdnr` |  |  |
| `ExternalRequirementPlan` |  | |  | `pbdnr_ext` |  |  |
| `RequirementSegment` |  | |  | `sgt_rcat` |  |  |
| `PlndIndepRqmtConsumptionStrgy` |  | |  | `zuvkz` |  |  |
| `PlndIndepRqmtIsActive` |  | |  | `cast(vervs as pph_vervs preserving type)` |  |  |
| `PlndIndepRqmtConsumptionAssgmt` |  | |  | `cast(verkz as pph_vervp preserving type)` |  |  |
| `PlndIndepRqmtUsage` |  | |  | `plnkz` |  |  |
| `PlndIndepRqmtIsToBeDeleted` |  | |  | `cast(case loevr when '' then '' else 'X' end as pph_loevr preserving type)` |  |  |
| `PlannedIndepRqmtDeletionCode` |  | |  | `loevr` |  |  |
| `SalesOrder` |  | |  | `kdauf` |  |  |
| `SalesOrderItem` |  | |  | `cast(kdpos as co_kdpos preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `pspel` |  |  |
| `WBSElementInternalID_2` |  | |  | `cast(pspel as ps_s4_pspnr preserving type)` |  |  |
| `InventorySpecialStockType` |  | |  | `cast(sobkz as pph_sobkz preserving type)` |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast(kzbws as pph_kzbws preserving type)` |  |  |
| `ConsumptionPosting` |  | |  | `cast(kzvbr as pph_kzvbr preserving type)` |  |  |
| `AccountAssignmentCategory` |  | |  | `cast(knttp as pph_knttp preserving type)` |  |  |
| `PlndIndepRqmtLastChgdDateTime` |  | |  | `cast(lastchangedts as vdm_lastchangedatetime preserving type)` |  |  |
| `_PlndIndepRqmtItem` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlant2` | | ✓ | | | | |
| `_ProductMRPArea` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_PlndIndepRqmtType` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementBasic` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_ConsumptionPosting` | | ✓ | | | | |
| `_AccountAssignmentCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlndIndepRqmtItem` | `I_PlndIndepRqmtItemByIntKey` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [0..1] |
| `_ProductMRPArea` | `I_ProductMRPArea` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_PlndIndepRqmtType` | `I_PlndIndepRqmtType` | [1..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_AccountAssignmentCategory` | `I_AccountAssignmentCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPIRBYINTKEY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'PlndIndepRqmtInternalID'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Independent Requirement by Internal Key'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK"]  } */
define view I_PlndIndepRqmtByIntKey
  as select from pbim

  association [0..*] to I_PlndIndepRqmtItemByIntKey  as _PlndIndepRqmtItem             on  $projection.PlndIndepRqmtInternalID = _PlndIndepRqmtItem.PlndIndepRqmtInternalID
  association [1..1] to I_Plant                      as _Plant                         on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Product                    as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_ProductPlant               as _ProductPlant                  on  $projection.Plant   = _ProductPlant.Plant
                                                                                       and $projection.Product = _ProductPlant.Product
  association [0..1] to I_ProductPlantBasic          as _ProductPlant2                 on  $projection.Plant   = _ProductPlant2.Plant
                                                                                       and $projection.Product = _ProductPlant2.Product
  association [0..1] to I_ProductMRPArea             as _ProductMRPArea                on  $projection.Product = _ProductMRPArea.Product
                                                                                       and $projection.MRPArea = _ProductMRPArea.MRPArea
  association [0..1] to I_MRPArea                    as _MRPArea                       on  $projection.MRPArea = _MRPArea.MRPArea
  association [1..1] to I_PlndIndepRqmtType          as _PlndIndepRqmtType             on  $projection.PlndIndepRqmtType = _PlndIndepRqmtType.PlndIndepRqmtType
  association [0..1] to I_SalesOrder                 as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem                on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                       and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _WBSElement                    on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasic               on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting            on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_AccountAssignmentCategory  as _AccountAssignmentCategory     on  $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory

{
  key bdzei                                                         as PlndIndepRqmtInternalID,
      versb                                                         as PlndIndepRqmtVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      matnr                                                         as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                                         as Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      cast(werks as berid)                                          as MRPArea,
      @ObjectModel.foreignKey.association: '_PlndIndepRqmtType'
      cast(bedae as pph_bedae preserving type)                      as PlndIndepRqmtType,
      pbdnr                                                         as RequirementPlan,
      pbdnr_ext                                                     as ExternalRequirementPlan,
      sgt_rcat                                                      as RequirementSegment,
      zuvkz                                                         as PlndIndepRqmtConsumptionStrgy,
      cast(vervs as pph_vervs preserving type)                      as PlndIndepRqmtIsActive,
      cast(verkz as pph_vervp preserving type)                      as PlndIndepRqmtConsumptionAssgmt,
      plnkz                                                         as PlndIndepRqmtUsage,
      cast(case loevr
           when '' then ''
           else 'X'
      end as pph_loevr preserving type)                             as PlndIndepRqmtIsToBeDeleted,
      loevr                                                         as PlannedIndepRqmtDeletionCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      kdauf                                                         as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(kdpos as co_kdpos  preserving type)                      as SalesOrderItem,
      @API.element.releaseState:  #DEPRECATED
      @API.element.successor:  'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      pspel                                                         as WBSElementInternalID,   // with conv. exit
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      cast(pspel as ps_s4_pspnr preserving type)                    as WBSElementInternalID_2, // w/o conv. exit
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(sobkz as pph_sobkz preserving type)                      as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(kzbws as pph_kzbws preserving type)                      as InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(kzvbr as pph_kzvbr preserving type)                      as ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      cast(knttp as pph_knttp preserving type)                      as AccountAssignmentCategory,

      @Semantics.systemDateTime.lastChangedAt: true
      cast(lastchangedts as vdm_lastchangedatetime preserving type) as PlndIndepRqmtLastChgdDateTime,

      // Associations
      _Plant,
      _Product,
      @API.element.releaseState:  #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      _ProductMRPArea,
      _MRPArea,
      _PlndIndepRqmtType,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      _WBSElement,
      _WBSElementBasic,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _ConsumptionPosting,
      _AccountAssignmentCategory,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PlndIndepRqmtItem
}

union all

select from pbid
association [0..*] to I_PlndIndepRqmtItemByIntKey  as _PlndIndepRqmtItem             on  $projection.PlndIndepRqmtInternalID = _PlndIndepRqmtItem.PlndIndepRqmtInternalID
association [1..1] to I_Plant                      as _Plant                         on  $projection.Plant = _Plant.Plant
association [1..1] to I_Product                    as _Product                       on  $projection.Product = _Product.Product
association [0..1] to I_ProductPlant               as _ProductPlant                  on  $projection.Plant   = _ProductPlant.Plant
                                                                                     and $projection.Product = _ProductPlant.Product
association [0..1] to I_ProductPlantBasic          as _ProductPlant2                 on  $projection.Plant   = _ProductPlant2.Plant
                                                                                     and $projection.Product = _ProductPlant2.Product
association [0..1] to I_ProductMRPArea             as _ProductMRPArea                on  $projection.Product = _ProductMRPArea.Product
                                                                                     and $projection.MRPArea = _ProductMRPArea.MRPArea
association [0..1] to I_MRPArea                    as _MRPArea                       on  $projection.MRPArea = _MRPArea.MRPArea
association [1..1] to I_PlndIndepRqmtType          as _PlndIndepRqmtType             on  $projection.PlndIndepRqmtType = _PlndIndepRqmtType.PlndIndepRqmtType
association [0..1] to I_SalesOrder                 as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder
association [0..1] to I_SalesOrderItem             as _SalesOrderItem                on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                     and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
association [0..1] to I_WBSElementBasicData        as _WBSElement                    on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
association [0..1] to I_WBSElementBasicData        as _WBSElementBasic               on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting            on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
association [0..1] to I_AccountAssignmentCategory  as _AccountAssignmentCategory     on  $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory

{
  key bdzei                                                         as PlndIndepRqmtInternalID,
      versb                                                         as PlndIndepRqmtVersion,
      @ObjectModel.foreignKey.association: '_Product'
      matnr                                                         as Product,
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                                         as Plant,
      @ObjectModel.foreignKey.association: '_MRPArea'
      berid                                                         as MRPArea,
      --    @ObjectModel.foreignKey.association: '_PlndIndepRqmtType'
      cast(bedae as pph_bedae preserving type)                      as PlndIndepRqmtType,
      pbdnr                                                         as RequirementPlan,
      pbdnr_ext                                                     as ExternalRequirementPlan,
      sgt_rcat                                                      as RequirementSegment,
      zuvkz                                                         as PlndIndepRqmtConsumptionStrgy,
      cast(vervs as pph_vervs preserving type)                      as PlndIndepRqmtIsActive,
      cast(verkz as pph_vervp preserving type)                      as PlndIndepRqmtConsumptionAssgmt,
      plnkz                                                         as PlndIndepRqmtUsage,
      cast(case loevr
           when '' then ''
           else 'X'
      end as pph_loevr preserving type)                             as PlndIndepRqmtIsToBeDeleted,
      loevr                                                         as PlannedIndepRqmtDeletionCode,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      kdauf                                                         as SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(kdpos as co_kdpos  preserving type)                      as SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      pspel                                                         as WBSElementInternalID,   // with conv. exit
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      cast(pspel as ps_s4_pspnr preserving type)                    as WBSElementInternalID_2, // w/o conv. exit
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(sobkz as pph_sobkz preserving type)                      as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(kzbws as pph_kzbws preserving type)                      as InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(kzvbr as pph_kzvbr preserving type)                      as ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      cast(knttp as pph_knttp preserving type)                      as AccountAssignmentCategory,

      @Semantics.systemDateTime.lastChangedAt: true
      cast(lastchangedts as vdm_lastchangedatetime preserving type) as PlndIndepRqmtLastChgdDateTime,

      // Associations
      _Plant,
      _Product,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      _ProductMRPArea,
      _MRPArea,
      _PlndIndepRqmtType,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      _WBSElement,
      _WBSElementBasic,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _ConsumptionPosting,
      _AccountAssignmentCategory,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PlndIndepRqmtItem
};
```
