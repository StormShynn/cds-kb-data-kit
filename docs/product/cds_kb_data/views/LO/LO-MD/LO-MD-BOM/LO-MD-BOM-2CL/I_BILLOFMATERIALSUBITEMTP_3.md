---
name: I_BILLOFMATERIALSUBITEMTP_3
description: "Bill of MaterialSUBITEMTP 3"
semantic_vi: "View Bill of Material SUBITEMTP 3 cung cấp thông tin về các thành phần vật liệu và mối quan hệ của chúng trong một bảng vật liệu, có ích cho việc quản lý và phân tích cấu trúc vật liệu."
keywords:
  - "bill of material"
  - "bảng vật liệu"
  - "material component"
  - "thành phần vật liệu"
  - "material structure"
  - "cấu trúc vật liệu"
  - "bom"
  - "ekko"
  - "logistics general"
  - "lo"
  - "lo-md"
  - "lo-md-bom"
semantic_en: "The Bill of Material SUBITEMTP 3 view provides information about material components and their relationships within a bill of material, which is useful for managing and analyzing material structures."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - transactional-processing
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSUBITEMTP_3

**Bill of MaterialSUBITEMTP 3**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialVersion` | ✓ | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |  |  |
| `HeaderChangeDocument` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BOMItemInternalChangeCount` | ✓ | |  |  |  |  |
| `BOMSubItemNumberValue` | ✓ | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `BillOfMaterialSubItemQuantity` |  | |  |  |  |  |
| `BOMSubItemInstallationPoint` |  | |  |  |  |  |
| `BillOfMaterialSubItemText` |  | |  |  |  |  |
| `_MatBOMItem` | | ✓ | | | | |
| `_MatBOMHeader` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Bill of Material Sub Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    usageType:  { 
        serviceQuality: #D, 
        sizeCategory: #XL, 
        dataClass: #TRANSACTIONAL
        },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}      
@Metadata.ignorePropagatedAnnotations: true
define view entity I_BillOfMaterialSubItemTP_3 as projection on R_MatBillOfMaterialSubitemTP 
{
  key    BillOfMaterial,
  key    BillOfMaterialCategory,
  key    BillOfMaterialVariant,
  key    BillOfMaterialVersion,
  key    BillOfMaterialItemNodeNumber,
  key    HeaderChangeDocument,
  key    Material,
  key    Plant,
  key    BOMItemInternalChangeCount,
         @EndUserText.label: 'Sub-Item Number Value'
  key    BOMSubItemNumberValue,
         BillOfMaterialItemUnit,
         @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit' 
         BillOfMaterialSubItemQuantity,
         BOMSubItemInstallationPoint,
         BillOfMaterialSubItemText,
         _MatBOMItem : redirected to parent I_BillOfMaterialItemTP_3,
         _MatBOMHeader : redirected to I_BillOfMaterialTP_3
  
  }
```
