---
name: I_PURCONTRPARTNERSTP
description: Purcontrpartnerstp
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - partner
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRPARTNERSTP

**Purcontrpartnerstp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |
| `PurchaseContractItem` | ✓ | |  |  |
| `PurchasingOrganization` | ✓ | |  |  |
| `SupplierSubrange` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  |  |
| `PartnerCounter` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchaseContractType` |  | |  |  |
| `PurchasingDocumentType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `Supplier` |  | |  |  |
| `SupplierContact` |  | |  |  |
| `EmploymentInternalID` |  | |  |  |
| `DefaultPartner` |  | |  |  |
| `PurchasingDocumentPartner` |  | |  |  |
| `PurchasingDocumentPartnerName` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_PurchaseContract` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Partners - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem','PurchasingOrganization','SupplierSubrange','Plant','PartnerFunction','PartnerCounter' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurContrPartnersTP
  as projection on R_PurContrPartnersTP
{
  key PurchaseContract,
  key PurchaseContractItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      PurchasingDocumentCategory,
      PurchaseContractType,
      PurchasingDocumentType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      DefaultPartner,
      PurchasingDocumentPartner,
      PurchasingDocumentPartnerName,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseContract : redirected to parent I_PurchaseContractTP


}
```
