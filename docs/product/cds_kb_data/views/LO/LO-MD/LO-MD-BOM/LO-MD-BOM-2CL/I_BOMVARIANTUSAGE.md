---
name: I_BOMVARIANTUSAGE
description: "Bomvariantusage"
app_component: LO-MD-BOM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
