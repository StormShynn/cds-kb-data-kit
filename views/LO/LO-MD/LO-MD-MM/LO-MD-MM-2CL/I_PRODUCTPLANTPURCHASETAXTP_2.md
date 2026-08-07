---
name: I_PRODUCTPLANTPURCHASETAXTP_2
description: Productplantpurchasetaxtp 2
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
  - tax
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTPURCHASETAXTP_2

**Productplantpurchasetaxtp 2**

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
| `DepartureCountry` | ✓ | |  |  |  |  |
| `ProdPurchaseTaxClassification` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Purchase Tax - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_ProductPlantPurchaseTaxTP_2
  as projection on R_ProductPlantPurchaseTaxTP as ProductPlantPurchaseTax
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @ObjectModel.text.association: '_CountryText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CountryVH', element : 'Country'} , useAsTemplate: true }]
  key DepartureCountry,
      ProdPurchaseTaxClassification,

      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2,
      _Country,
      _ProductDescription,
      _CountryText
}
```
