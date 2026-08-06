---
name: I_CNTRLPURCONTRHDRDISTPARTTP_2
description: Cntrlpurcontrhdrdistparttp 2
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
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRHDRDISTPARTTP_2

**Cntrlpurcontrhdrdistparttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralPurchaseContract` | `CentralPurchaseContract` |
| key `DistributionKey` | `DistributionKey` |
| key `PartnerCounter` | `PartnerCounter` |
| `PartnerFunction` | `PartnerFunction` |
| `ExtPlantForPurg` | `ExtPlantForPurg` |
| `Supplier` | `Supplier` |
| `SupplierSubrange` | `SupplierSubrange` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `_CentralPurchaseContrHdrDist` | *Association* |
| `_CentralPurchaseContract` | *Association* |

## Source Code

```abap
@EndUserText.label: 'CCTR Header Distribution Partner - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract','DistributionKey' , 'PartnerCounter' ]

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrHdrDistPartTP_2
  as projection on R_CntrlPurContrHdrDistrPartTP
{
      
  key CentralPurchaseContract,
  key DistributionKey,
  key PartnerCounter,
      PartnerFunction,
      ExtPlantForPurg,
      Supplier,
      SupplierSubrange,
      PurchasingOrganization,
      

      /* Associations */
      _CentralPurchaseContrHdrDist : redirected to parent I_CntrlPurContrHdrDistrTP_2,
      _CentralPurchaseContract     : redirected to I_CntrlPurchaseContractTP_2
}
```
