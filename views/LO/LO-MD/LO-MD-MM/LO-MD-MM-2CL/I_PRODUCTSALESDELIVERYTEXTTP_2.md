---
name: I_PRODUCTSALESDELIVERYTEXTTP_2
description: Productsalesdeliverytexttp 2
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
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSALESDELIVERYTEXTTP_2

**Productsalesdeliverytexttp 2**

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
| `ProductSalesOrg` | ✓ | |  |  |
| `ProductDistributionChnl` | ✓ | |  |  |
| `TextObjectType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `ProductSalesDeliveryText` |  | |  |  |
| `ProdLongTxtCreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `ProdLongTxtLastChangedDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `_ProductSalesDelivery` | | ✓ | | |
| `_Product` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Sales Delivery Long Texts - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    representativeKey: 'ProductSalesOrg'

}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'SW:CMD_PM_PROD_LONG_TEXT'
define view entity I_ProductSalesDeliveryTextTP_2
  as projection on R_ProductSalesDeliveryTextTP as ProductSalesDeliveryText
{
  key Product,
  key ProductSalesOrg,
  key ProductDistributionChnl,
  key TextObjectType,
  key Language,
      @Semantics.text:true
      ProductSalesDeliveryText, 
      ProdLongTxtCreationDateTime,
      CreatedByUser,
      ProdLongTxtLastChangedDateTime,
      LastChangedByUser,

      /* Associations */
      _ProductSalesDelivery : redirected to parent I_ProductSalesDeliveryTP_2,
      _Product              : redirected to I_ProductTP_2

}
```
