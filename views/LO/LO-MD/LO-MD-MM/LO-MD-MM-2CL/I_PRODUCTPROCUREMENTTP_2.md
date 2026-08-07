---
name: I_PRODUCTPROCUREMENTTP_2
description: Productprocurementtp 2
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTPROCUREMENTTP_2

**Productprocurementtp 2**

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
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `VarblPurOrdUnitStatus` |  | |  |  |  |  |
| `PurchasingAcknProfile` |  | |  |  |  |  |
| `SourceOfSupplyCategory` |  | |  |  |  |  |
| `ProcurementRule` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `StoreListingEndDate` |  | |  |  |  |  |
| `DistrCenterListingEndDate` |  | |  |  |  |  |
| `StoreListingStartDate` |  | |  |  |  |  |
| `DistrCenterListingStartDate` |  | |  |  |  |  |
| `StoreListingProcedure` |  | |  |  |  |  |
| `DistrCenterListingProcedure` |  | |  |  |  |  |
| `ProdExtAssortmentPriority` |  | |  |  |  |  |
| `AssortmentGrade` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProdExtAssortmentPriorityText` | | ✓ | | | | |
| `_PurchaseOrderUnitText` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Procurement - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductProcurementTP_2
  as projection on R_ProductProcurementTP as ProductProcurement
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @ObjectModel.text.association: '_PurchaseOrderUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      PurchaseOrderQuantityUnit,
      VarblPurOrdUnitStatus,
      PurchasingAcknProfile,
      // --- Retail
      @Feature: 'SW:CMD_API_PRODUCT'
      SourceOfSupplyCategory,
      @Feature: 'SW:CMD_API_PRODUCT'
      ProcurementRule,
      @Feature: 'SW:CMD_API_PRODUCT'
      PurchasingGroup,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingProcedure,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingProcedure,
      @Feature: 'SW:CMD_API_PRODUCT'
      @ObjectModel.text.association: '_ProdExtAssortmentPriorityText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODEXTASSTMTPRIORITY', element : 'ProdExtAssortmentPriority'} , useAsTemplate: true }]
      ProdExtAssortmentPriority,
      @Feature: 'SW:CMD_API_PRODUCT'
      AssortmentGrade,


      // ---
      //ProcurementRule,
      //SourceOfSupplyCategory,
      /* Associations */
      _Product : redirected to parent I_ProductTP_2,
      _ProdExtAssortmentPriorityText,
      _PurchaseOrderUnitText,
      _ProductDescription
}
```
