---
name: I_PRODUOMSUPLREANTP_2
description: Produomsuplreantp 2
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
  - unit-of-measure
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUOMSUPLREANTP_2

**Produomsuplreantp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `AlternativeUnit` | ✓ | |  |  |
| `Supplier` | ✓ | |  |  |
| `ConsecutiveNumber` | ✓ | |  |  |
| `GlobalTradeItemNumber` |  | |  |  |
| `SuplrGTINIsMain` |  | |  |  |
| `SupplierProduct` |  | |  |  |
| `_ProductUnitOfMeasure` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_AlternativeUnit` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |
| `_AlternativeUnitText` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Product Supplier EAN - TP'
@AccessControl.authorizationCheck: #MANDATORY
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
@Feature: 'SW:CMD_API_PRODUCT'
define view entity I_ProdUoMSuplrEANTP_2
  as projection on R_ProdUoMSuplrEANTP
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @ObjectModel.text.association: '_AlternativeUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
  key AlternativeUnit,
  key Supplier,
  key ConsecutiveNumber,
      GlobalTradeItemNumber,
      SuplrGTINIsMain,
      SupplierProduct,
      /* Associations */
      _ProductUnitOfMeasure : redirected to parent I_ProductUnitOfMeasureTP_2,
      _Product              : redirected to I_ProductTP_2,
      _AlternativeUnit,
      _ProductDescription,
      _AlternativeUnitText
}
```
