---
name: I_BOMVARIANTUSAGE
description: "Bomvariantusage"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMVARIANTUSAGE

**Bomvariantusage**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialVariantUsage` | ✓ | |  | `stlan` |  |  |
| `BillOfMaterialVariantUsageDesc` |  | | `_BillOfMaterialUsage` | `BillOfMaterialVariantUsageDesc` |  |  |
| `BOMIsProductionUsageRelevant` |  | |  | `pmpfe` |  |  |
| `BOMIsEngineeringUsageRelevant` |  | |  | `pmpko` |  |  |
| `BOMIsCostingUsageRelevant` |  | |  | `pmpka` |  |  |
| `BOMIsSalesDistributionRelevant` |  | |  | `pmprv` |  |  |
| `BOMIsHighLevelConfigRelevant` |  | |  | `pmpvs` |  |  |
| `BOMIsPlantMaintenanceRelevant` |  | |  | `pmpin` |  |  |
| `BOMIsSparePartRelevant` |  | |  | `pmper` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialUsage` | `I_BillOfMaterialUsage` | [0..*] |

## Source Code

```abap
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #CUSTOMIZING}
@EndUserText.label: 'Bill Of Material Usage'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialVariantUsage'
define view entity I_BOMVariantUsage as select from t416 
association [0..*] to I_BillOfMaterialUsage as _BillOfMaterialUsage on t416.stlan = _BillOfMaterialUsage.BillOfMaterialVariantUsage
 {
     key t416.stlan                        as BillOfMaterialVariantUsage,
     _BillOfMaterialUsage.BillOfMaterialVariantUsageDesc,
     @UI.hidden: true
     t416.pmpfe as BOMIsProductionUsageRelevant,
     @UI.hidden: true
     t416.pmpko as BOMIsEngineeringUsageRelevant,
     @UI.hidden: true
     t416.pmpka as BOMIsCostingUsageRelevant,
     @UI.hidden: true
     t416.pmprv as BOMIsSalesDistributionRelevant,
     @UI.hidden: true
     t416.pmpvs as BOMIsHighLevelConfigRelevant,
     @UI.hidden: true
     t416.pmpin as BOMIsPlantMaintenanceRelevant,
     @UI.hidden: true
     t416.pmper as BOMIsSparePartRelevant
    
}
```
