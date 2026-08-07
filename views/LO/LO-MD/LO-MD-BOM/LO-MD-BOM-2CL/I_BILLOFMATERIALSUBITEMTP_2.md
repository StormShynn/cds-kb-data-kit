---
name: I_BILLOFMATERIALSUBITEMTP_2
description: Bill of MaterialSUBITEMTP 2
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
  - transactional-processing
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSUBITEMTP_2

**Bill of MaterialSUBITEMTP 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |
| `BillOfMaterialCategory` | ✓ | |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |
| `BillOfMaterialVersion` | ✓ | |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |
| `HeaderChangeDocument` | ✓ | |  |  |
| `Material` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `BOMItemInternalChangeCount` | ✓ | |  |  |
| `BOMSubItemNumberValue` | ✓ | |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |
| `BillOfMaterialSubItemQuantity` |  | |  |  |
| `BOMSubItemInstallationPoint` |  | |  |  |
| `BillOfMaterialSubItemText` |  | |  |  |
| `_BillOfMaterialItem` | | ✓ | | |
| `_BillOfMaterial` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Bill of Material Sub Item'
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
define view entity I_BillOfMaterialSubItemTP_2 as projection on R_BillOfMaterialSubitemTP 
{
key    BillOfMaterial,
  key    BillOfMaterialCategory,
  key    BillOfMaterialVariant,
  key    BillOfMaterialVersion,
  key    BillOfMaterialItemNodeNumber,
  key    HeaderChangeDocument,
  key    Material,
         @Consumption.valueHelpDefinition: [
         { entity: { name:    'I_PlantStdVH',
                     element: 'Plant' } }]
         @ObjectModel.text.element: [ 'Plant' ]
  key    Plant,
  key    BOMItemInternalChangeCount,
  //       @ObjectModel: { enabled  : 'EXTERNAL_CALCULATION',
  //                       readOnly : 'EXTERNAL_CALCULATION',
  //                       mandatory: 'EXTERNAL_CALCULATION'}
  key    BOMSubItemNumberValue,
         BillOfMaterialItemUnit,
         @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit' 
         BillOfMaterialSubItemQuantity,
         BOMSubItemInstallationPoint,
         BillOfMaterialSubItemText,
         //Creditor,
        // _Supplier : redirected to I_Supplier,
//         @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
//         _BillOfMaterialItem,
     //    _Item,
//         @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
//         _BillOfMaterial
  _BillOfMaterialItem : redirected to parent I_BillOfMaterialItemTP_2,
  _BillOfMaterial : redirected to I_BillOfMaterialTP_2
  
}
```
