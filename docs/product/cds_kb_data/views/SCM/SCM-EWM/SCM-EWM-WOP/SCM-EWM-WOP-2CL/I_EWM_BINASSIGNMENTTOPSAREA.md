---
name: I_EWM_BINASSIGNMENTTOPSAREA
description: "Ewm Binassignmenttopsarea"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  |  |  |
| `EntitledToDisposeParty` | ✓ | |  |  |  |  |
| `EWMProductionSupplyArea` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `EWMStorageBin` |  | |  |  |  |  |
| `EWMStagingMethod` |  | |  |  |  |  |
| `EWMQtyCalcTypeForStaging` |  | |  |  |  |  |
| `EWMReplnmtForPartsQuantity` |  | |  |  |  |  |
| `EWMProdnSupAreaMinProdQty` |  | |  |  |  |  |
| `EWMStagingQuantityUnit` |  | |  |  |  |  |
| `EWMWhseProcessTypeForStaging` |  | |  |  |  |  |
| `EWMWhseProcTypeToClearPSArea` |  | |  |  |  |  |
| `_EWMProductionSupplyAreaText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_EWMStagingMethodText` | | ✓ | | | | |
| `_EWMQtyCalcTypeForStagingText` | | ✓ | | | | |
| `_EWMWhseProcTypeForStagingText` | | ✓ | | | | |
| `_WhseProcTypeToClearPSAreaText` | | ✓ | | | | |

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
