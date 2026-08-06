---
name: I_PURGCATMATERIALGROUPAPI01
description: PURGCATMaterial GroupAPI 01
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - material
  - component:SLC-CAT-2CL
  - lob:Other
  - bo:Material
---
# I_PURGCATMATERIALGROUPAPI01

**PURGCATMaterial GroupAPI 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurCatMaterialGroupUUID` | `PurCatMaterialGroupUUID` |
| `PurgCatUUID` | `PurgCatUUID` |
| `MaterialGroup` | `MaterialGroup` |
| `_PurchasingCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingCategory` | `I_PurgCatAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCMATLGRPAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Material Group for Purchasing Category'
define view I_PurgCatMaterialGroupAPI01 as select from I_PurchasingCategoryMatlGroup
  association [1..1] to I_PurgCatAPI01 as _PurchasingCategory on $projection.PurgCatUUID   = _PurchasingCategory.PurgCatUUID

 {
  key PurCatMaterialGroupUUID, 
  PurgCatUUID, 
  MaterialGroup,
  
  _PurchasingCategory
}
```
