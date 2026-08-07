---
name: I_PRODPLNTMRPTEXTTP_2
description: Prodplntmrptexttp 2
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
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODPLNTMRPTEXTTP_2

**Prodplntmrptexttp 2**

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
| `Plant` | ✓ | |  |  |
| `TextObjectType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `ProductPlantMRPText` |  | |  |  |
| `ProdLongTxtCreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `ProdLongTxtLastChangedDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `_ProductPlant` | | ✓ | | |
| `_Product` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Plant MRP Long Texts - TP'
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
    representativeKey: 'Plant'
}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'SW:CMD_PM_PROD_LONG_TEXT'
define view entity I_ProdPlntMRPTextTP_2
  as projection on R_ProdPlntMRPTextTP as ProdPlntMRPText
{
  key Product,
  key Plant,
  key TextObjectType,
  key Language,
      @Semantics.text:true
      ProductPlantMRPText, 
      ProdLongTxtCreationDateTime,
      CreatedByUser,
      ProdLongTxtLastChangedDateTime,
      LastChangedByUser,

      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2

}
```
