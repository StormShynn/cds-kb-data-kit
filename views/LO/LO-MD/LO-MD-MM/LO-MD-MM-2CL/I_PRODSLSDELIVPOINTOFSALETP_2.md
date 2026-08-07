---
name: I_PRODSLSDELIVPOINTOFSALETP_2
description: Prodslsdelivpointofsaletp 2
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODSLSDELIVPOINTOFSALETP_2

**Prodslsdelivpointofsaletp 2**

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
| `ProductSalesOrg` | ✓ | |  |  |  |  |
| `ProductDistributionChnl` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StoreSaleStartDate` |  | |  |  |  |  |
| `StoreSaleEndDate` |  | |  |  |  |  |
| `ProductSalesStatus` |  | |  |  |  |  |
| `ProductSalesStatusValidityDate` |  | |  |  |  |  |
| `PointOfSalesDiscountIsAllowed` |  | |  |  |  |  |
| `ScalesGroup` |  | |  |  |  |  |
| `ProdSlsDelivPOSIsPriceRequired` |  | |  |  |  |  |
| `ProdSlsDelivRepeatKey` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductSalesDelivery` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Prod Sales delivery Point Of Sale - TP'
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
define view entity I_ProdSlsDelivPointOfSaleTP_2
  as projection on R_ProdSlsDelivPointOfSaleTP
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ProductSalesOrg,
  key ProductDistributionChnl,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PlantStdVH', element : 'Plant'} , useAsTemplate: true }]
  key Plant,
      StoreSaleStartDate,
      StoreSaleEndDate,
      ProductSalesStatus,
      ProductSalesStatusValidityDate,
      PointOfSalesDiscountIsAllowed,
      ScalesGroup,
      ProdSlsDelivPOSIsPriceRequired,
      ProdSlsDelivRepeatKey,
      _Product              : redirected to I_ProductTP_2,
      _ProductSalesDelivery : redirected to parent I_ProductSalesDeliveryTP_2,
      _Plant

}
```
