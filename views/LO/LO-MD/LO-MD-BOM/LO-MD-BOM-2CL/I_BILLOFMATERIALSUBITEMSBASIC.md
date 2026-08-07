---
name: I_BILLOFMATERIALSUBITEMSBASIC
description: Bill of MaterialSUBITEMSBASIC
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSUBITEMSBASIC

**Bill of MaterialSUBITEMSBASIC**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialCategory` | ✓ | |  | `stlty` |  |  |
| `BillOfMaterial` | ✓ | |  | `cast( stpu.stlnr as char8 preserving type )` |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  | `stlkn` |  |  |
| `BOMItemInternalChangeCount` | ✓ | |  | `stpoz` |  |  |
| `BOMSubItemNumberValue` | ✓ | |  | `cast(stpu.uposz as char4 preserving type)` |  |  |
| `BillOfMaterialSubItemQuantity` |  | |  | `upmng` |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `BOMSubItemInstallationPoint` |  | |  | `ebort` |  |  |
| `BillOfMaterialSubItemText` |  | |  | `uptxt` |  |  |

## Source Code

```abap
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Bill of Material Sub items Details'
define view entity I_BillOfMaterialSubItemsBasic as select from stpu as stpu inner join I_BillOfMaterialItemBasic as Item    
                                                             on  stpu.stlty = Item.BillOfMaterialCategory
                                                             and stpu.stlnr = Item.BillOfMaterial
                                                             and stpu.stlkn = Item.BillOfMaterialItemNodeNumber
                                                             and stpu.stpoz = Item.BOMItemInternalChangeCount
{
  key stpu.stlty as BillOfMaterialCategory,
  key cast( stpu.stlnr as char8 preserving type ) as BillOfMaterial,
  key stpu.stlkn as BillOfMaterialItemNodeNumber,
  key stpu.stpoz as BOMItemInternalChangeCount,
  key cast(stpu.uposz as char4 preserving type) as BOMSubItemNumberValue,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      stpu.upmng as BillOfMaterialSubItemQuantity,
      Item.BillOfMaterialItemUnit as BillOfMaterialItemUnit,
      stpu.ebort as BOMSubItemInstallationPoint,
      stpu.uptxt as BillOfMaterialSubItemText
}
```
