---
name: I_CEPUCOITMCMMDTYQTYTP_2
description: "Cepucoitmcmmdtyqtytp 2"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOITMCMMDTYQTYTP_2

**Cepucoitmcmmdtyqtytp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `CentralPurchaseContractItem` | ✓ | |  |  |  |  |
| `PurgDocCmmdtyQtySqntlNumber` | ✓ | |  |  |  |  |
| `Commodity` |  | |  |  |  |  |
| `PurgDocCmmdtyQtyValidToDate` |  | |  |  |  |  |
| `PurgDocCmmdtyQtyValidFromDate` |  | |  |  |  |  |
| `CommodityQuantity` |  | |  |  |  |  |
| `CommodityUnit` |  | |  |  |  |  |
| `PurgDocCmmdtyRefDocItmQty` |  | |  |  |  |  |
| `ItemQuantityUnit` |  | |  |  |  |  |
| `PurgDocCmmdtyUpdateCycle` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `_CentralPurchaseContract` | | ✓ | | | | |
| `_CntrlPurchaseContractItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Commodity Quantity - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'None'

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','CentralPurchaseContractItem','PurgDocCmmdtyQtySqntlNumber' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CePuCoItmCmmdtyQtyTP_2
  as projection on R_CntrlPurContrItmCmmdtyQtyTP
{
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
  key PurgDocCmmdtyQtySqntlNumber,
      Commodity,
      PurgDocCmmdtyQtyValidToDate,
      PurgDocCmmdtyQtyValidFromDate,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      CommodityQuantity,
      CommodityUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemQuantityUnit'
      PurgDocCmmdtyRefDocItmQty,
      ItemQuantityUnit,
      PurgDocCmmdtyUpdateCycle,
      PurchasingDocumentCategory,


      /* Associations */
      _CentralPurchaseContract   : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurchaseContractItem : redirected to parent I_CntrlPurchaseContractItmTP_2
}
```
