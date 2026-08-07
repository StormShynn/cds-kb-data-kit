---
name: I_PRODSLSDELIVERYSALESTAXTP_2
description: Prodslsdeliverysalestaxtp 2
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
  - delivery
  - tax
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODSLSDELIVERYSALESTAXTP_2

**Prodslsdeliverysalestaxtp 2**

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
| `Country` | ✓ | |  |  |  |  |
| `ProductSalesTaxCategory` | ✓ | |  |  |  |  |
| `ProductSalesOrg` | ✓ | |  |  |  |  |
| `ProductDistributionChnl` | ✓ | |  |  |  |  |
| `ProductTaxClassification` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductSalesDelivery` | | ✓ | | | | |
| `_CountryName` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Sales Delivery Sales Tax - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProdSlsDeliverySalesTaxTP_2
  as projection on R_ProdSalesDeliverySalesTaxTP as ProductSalesDeliverySalesTax
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @ObjectModel.text.association: '_CountryName'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CountryVH', element : 'Country'} , useAsTemplate: true }]
  key Country,
  key ProductSalesTaxCategory,
  key ProductSalesOrg,
  key ProductDistributionChnl,
      ProductTaxClassification,
      /* Associations */
      _Product              : redirected to I_ProductTP_2,
      _ProductSalesDelivery : redirected to parent I_ProductSalesDeliveryTP_2,
      _CountryName
}
```
