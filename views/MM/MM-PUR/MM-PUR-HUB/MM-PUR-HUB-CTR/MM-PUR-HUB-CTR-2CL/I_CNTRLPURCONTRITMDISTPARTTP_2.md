---
name: I_CNTRLPURCONTRITMDISTPARTTP_2
description: Cntrlpurcontritmdistparttp 2
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNTRLPURCONTRITMDISTPARTTP_2

**Cntrlpurcontritmdistparttp 2**

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
| `DistributionKey` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `PartnerFunction` |  | |  |  |  |  |
| `ExtPlantForPurg` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierSubrange` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `_CntrlPurContract` | | ✓ | | | | |
| `_CntrlPurContrItmDist` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Distribution Partner - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract','CentralPurchaseContractItem','DistributionKey', 'PartnerCounter' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlPurContrItmDistPartTP_2
  as projection on R_CntrlPurContrItmDistrPartTP

{
     
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
  key DistributionKey,
  key PartnerCounter,
      PartnerFunction,
      ExtPlantForPurg,
      Supplier,
      SupplierSubrange,
      PurchasingOrganization,
       
      /* Associations */
      _CntrlPurContract     : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrItmDist : redirected to parent I_CntrlPurContrItemDistrTP_2

}
```
