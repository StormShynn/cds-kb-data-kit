---
name: I_WBSBILLOFMATERIALLINKDEX
description: "WBSBill of MaterialLINKDEX"
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
  - data-extraction
  - material
  - bill-of-material
  - wbs
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
  - bo:WBS
---
# I_WBSBILLOFMATERIALLINKDEX

**WBSBill of MaterialLINKDEX**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfMaterialVariantUsage` | ✓ | |  |  |  |  |
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `RecordCreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'WBS BOM Link Data Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'WBSBillOfMaterialLink'

@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view entity I_WBSBillOfMaterialLinkDEX as select from P_WBSBillOfMaterialLink
{
  key WBSElementInternalID,
  key Material,
  key Plant,
  key BillOfMaterialVariantUsage,
  key BillOfMaterial,
  key BillOfMaterialVariant,
  BillOfMaterialCategory,
  RecordCreationDate,
  CreatedByUser,
  LastChangeDate,
  LastChangedByUser
}
```
