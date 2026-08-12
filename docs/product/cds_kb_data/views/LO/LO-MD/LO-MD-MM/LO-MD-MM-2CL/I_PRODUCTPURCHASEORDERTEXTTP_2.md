---
name: I_PRODUCTPURCHASEORDERTEXTTP_2
description: "PRODUCTPurchase OrderTEXTTP 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - purchase-order
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:PurchaseOrder
---
# I_PRODUCTPURCHASEORDERTEXTTP_2

**PRODUCTPurchase OrderTEXTTP 2**

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
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProductLongText` |  | |  |  |  |  |
| `ProdLongTxtCreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `ProdLongTxtLastChangedDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Purchase Order - Text TP' 
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    representativeKey: 'Product'

}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'SW:CMD_PM_PROD_LONG_TEXT'
define view entity I_ProductPurchaseOrderTextTP_2
  as projection on R_ProductPurchaseOrderTextTP as ProductPurchaseOrderText
{
  key Product,
  key TextObjectType,
  key Language,
      @Semantics.text:true
      ProductLongText,
      ProdLongTxtCreationDateTime,
      CreatedByUser,
      ProdLongTxtLastChangedDateTime,
      LastChangedByUser,

      /* Associations */
      _Product : redirected to parent I_ProductTP_2
}
```
