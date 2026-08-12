---
name: I_PURCHASECONTRACTPARTNER
description: "Purchase ContractPARTNER"
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - purchase-contract
  - contract
  - partner
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTPARTNER

**Purchase ContractPARTNER**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `SupplierSubrange` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `PartnerFunctionLanguageDepdnt` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierContact` |  | |  |  |  |  |
| `EmploymentInternalID` |  | |  |  |  |  |
| `DefaultPartner` |  | |  |  |  |  |
| `PurchasingDocumentPartner` |  | |  |  |  |  |
| `PurchasingDocumentPartnerName` |  | |  |  |  |  |
| `_PurchaseContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseContract` | `I_PurchaseContractAPI01` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@EndUserText.label: 'Purchase Contract Partner'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
define view entity I_PurchaseContractPartner 
as select from I_Purctrpartners as partner
association [1..1] to I_PurchaseContractAPI01      as _PurchaseContract     on  _PurchaseContract.PurchaseContract    = $projection.PurchaseContract
{
  key PurchaseContract,
  key PurchaseContractItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      PartnerFunctionLanguageDepdnt,
      PurchasingDocumentCategory,
      PurchaseContractType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      DefaultPartner,
      PurchasingDocumentPartner,
      PurchasingDocumentPartnerName,
      _PurchaseContract  
}
```
