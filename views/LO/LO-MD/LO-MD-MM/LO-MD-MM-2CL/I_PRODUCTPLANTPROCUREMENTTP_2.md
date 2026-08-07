---
name: I_PRODUCTPLANTPROCUREMENTTP_2
description: Productplantprocurementtp 2
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTPROCUREMENTTP_2

**Productplantprocurementtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `IsAutoPurOrdCreationAllowed` |  | |  |  |  |  |
| `IsSourceListRequired` |  | |  |  |  |  |
| `JustInTimeDeliveryScheduleCode` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SourceOfSupplyCategory` |  | |  |  |  |  |
| `PurgIsAcrossPurchasingGroup` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Procurement - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_ProductPlantProcurementTP_2
  as projection on R_ProductPlantProcurementTP as ProductPlantProcurement
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @Semantics.booleanIndicator: true
      IsAutoPurOrdCreationAllowed,
      @Semantics.booleanIndicator: true
      IsSourceListRequired,
      JustInTimeDeliveryScheduleCode,
      PurchasingGroup,
      SourceOfSupplyCategory,
      @Feature: 'SW:CMD_API_PRODUCT'
      PurgIsAcrossPurchasingGroup,

      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _ProductDescription
}
```
