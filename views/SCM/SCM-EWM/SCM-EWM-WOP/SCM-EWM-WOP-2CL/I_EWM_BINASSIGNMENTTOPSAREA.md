---
name: I_EWM_BINASSIGNMENTTOPSAREA
description: Ewm Binassignmenttopsarea
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_BINASSIGNMENTTOPSAREA

**Ewm Binassignmenttopsarea**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMWarehouse` | `EWMWarehouse` |
| key `EntitledToDisposeParty` | `EntitledToDisposeParty` |
| key `EWMProductionSupplyArea` | `EWMProductionSupplyArea` |
| key `Product` | `Product` |
| `ProductUUID` | `ProductUUID` |
| `EWMStorageBin` | `EWMStorageBin` |
| `EWMStagingMethod` | `EWMStagingMethod` |
| `EWMQtyCalcTypeForStaging` | `EWMQtyCalcTypeForStaging` |
| `EWMReplnmtForPartsQuantity` | `EWMReplnmtForPartsQuantity` |
| `EWMProdnSupAreaMinProdQty` | `EWMProdnSupAreaMinProdQty` |
| `EWMStagingQuantityUnit` | `EWMStagingQuantityUnit` |
| `EWMWhseProcessTypeForStaging` | `EWMWhseProcessTypeForStaging` |
| `EWMWhseProcTypeToClearPSArea` | `EWMWhseProcTypeToClearPSArea` |
| `_EWMProductionSupplyAreaText` | *Association* |
| `_ProductText` | *Association* |
| `_EWMStagingMethodText` | *Association* |
| `_EWMQtyCalcTypeForStagingText` | *Association* |
| `_EWMWhseProcTypeForStagingText` | *Association* |
| `_WhseProcTypeToClearPSAreaText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EWMProductionSupplyAreaText` | `I_EWM_ProductionSupplyAreaText` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..1] |
| `_EWMStagingMethodText` | `I_EWM_StagingMethodText` | [0..1] |
| `_EWMQtyCalcTypeForStagingText` | `I_EWM_QtyCalcTypeForStagingTxt` | [0..1] |
| `_EWMWhseProcTypeForStagingText` | `I_EWM_WrhsProcTypeText_2` | [0..1] |
| `_WhseProcTypeToClearPSAreaText` | `I_EWM_WrhsProcTypeText_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'WhseProdnSupplyAreaBinAssgmt'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Bin Assignment to Production Supply Area'
define view entity I_EWM_BinAssignmentToPSArea
  as select from I_EWM_BinAssgmtToPSAreaBasic as _binassgmtoPSArea
  association [0..1] to I_EWM_ProductionSupplyAreaText as _EWMProductionSupplyAreaText   on  $projection.EWMWarehouse              = _EWMProductionSupplyAreaText.EWMWarehouse
                                                                                         and $projection.EWMProductionSupplyArea   = _EWMProductionSupplyAreaText.EWMProductionSupplyArea
                                                                                         and _EWMProductionSupplyAreaText.Language = $session.system_language

  association [0..1] to I_ProductText                  as _ProductText                    on  $projection.Product  = _ProductText.Product
                                                                                         and _ProductText.Language = $session.system_language

  association [0..1] to I_EWM_StagingMethodText        as _EWMStagingMethodText          on  $projection.EWMStagingMethod   = _EWMStagingMethodText.EWMStagingMethod
                                                                                         and _EWMStagingMethodText.Language = $session.system_language

  association [0..1] to I_EWM_QtyCalcTypeForStagingTxt as _EWMQtyCalcTypeForStagingText  on  $projection.EWMStagingMethod           = _EWMQtyCalcTypeForStagingText.EWMQtyCalcTypeForStaging
                                                                                         and _EWMQtyCalcTypeForStagingText.Language = $session.system_language

  association [0..1] to I_EWM_WrhsProcTypeText_2       as _EWMWhseProcTypeForStagingText on  $projection.EWMWarehouse                 = _EWMWhseProcTypeForStagingText.EWMWarehouse
                                                                                         and $projection.EWMWhseProcessTypeForStaging = _EWMWhseProcTypeForStagingText.WarehouseProcessType
                                                                                         and _EWMWhseProcTypeForStagingText.Language  = $session.system_language

  association [0..1] to I_EWM_WrhsProcTypeText_2       as _WhseProcTypeToClearPSAreaText on  $projection.EWMWarehouse                 = _WhseProcTypeToClearPSAreaText.EWMWarehouse
                                                                                         and $projection.EWMWhseProcessTypeForStaging = _WhseProcTypeToClearPSAreaText.WarehouseProcessType
                                                                                         and _WhseProcTypeToClearPSAreaText.Language  = $session.system_language
{
  key       EWMWarehouse,

  key       EntitledToDisposeParty,

  key       EWMProductionSupplyArea,

  key       Product,

            ProductUUID,

            EWMStorageBin,

            EWMStagingMethod,

            EWMQtyCalcTypeForStaging,
            @Semantics.quantity.unitOfMeasure: 'EWMStagingQuantityUnit'
            EWMReplnmtForPartsQuantity,
            @Semantics.quantity.unitOfMeasure: 'EWMStagingQuantityUnit'
            EWMProdnSupAreaMinProdQty,

            EWMStagingQuantityUnit,

            EWMWhseProcessTypeForStaging,

            EWMWhseProcTypeToClearPSArea,
            _EWMProductionSupplyAreaText,
            _EWMStagingMethodText,
            _EWMQtyCalcTypeForStagingText,
            _ProductText,
            _EWMWhseProcTypeForStagingText,
            _WhseProcTypeToClearPSAreaText




}
```
