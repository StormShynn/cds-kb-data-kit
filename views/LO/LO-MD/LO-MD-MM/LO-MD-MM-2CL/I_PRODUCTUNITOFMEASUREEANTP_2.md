---
name: I_PRODUCTUNITOFMEASUREEANTP_2
description: "PRODUCTUnit of MeasureEANTP 2"
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
  - unit-of-measure
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTUNITOFMEASUREEANTP_2

**PRODUCTUnit of MeasureEANTP 2**

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
| `AlternativeUnit` | ✓ | |  |  |  |  |
| `ConsecutiveNumber` | ✓ | |  |  |  |  |
| `ProductStandardID` |  | |  |  |  |  |
| `InternationalArticleNumberCat` |  | |  |  |  |  |
| `IsMainGlobalTradeItemNumber` |  | |  |  |  |  |
| `_ProductUnitOfMeasure` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_IntlArticleNumberCatText` | | ✓ | | | | |
| `_AlternativeUnitText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Unit of Measure EAN - TP'
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
define view entity I_ProductUnitOfMeasureEANTP_2
  as projection on R_ProductUnitOfMeasureEANTP
{
      @ObjectModel.text.association: '_ProductDescription_2'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @ObjectModel.text.association: '_AlternativeUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
  key AlternativeUnit,
  key ConsecutiveNumber,
      ProductStandardID,
      @ObjectModel.text.association: '_IntlArticleNumberCatText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_INTNTNLARTNMBCAT', element : 'InternationalArticleNumberCat'} , useAsTemplate: true }]
      InternationalArticleNumberCat,
      @Semantics.booleanIndicator: true
      IsMainGlobalTradeItemNumber,
      /* Associations */
      _ProductUnitOfMeasure : redirected to parent I_ProductUnitOfMeasureTP_2,
      _Product              : redirected to I_ProductTP_2,
      _IntlArticleNumberCatText,
      _AlternativeUnitText,
      _ProductDescription_2
}
```
