---
name: I_CENTRALPURCHASECONTRACTBASIC
description: "CENTRALPurchase ContractBASIC"
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
  - purchase-contract
  - contract
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CENTRALPURCHASECONTRACTBASIC

**CENTRALPurchase ContractBASIC**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  | `cast (ActivePurchasingDocument as vdm_centralpurchasecontract preserving type)` |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingDocumentName` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `PurgDocChangeRequestStatus` |  | |  |  |  |  |
| `PurgDocIsChgVers` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `_CentralPurchaseContractItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralPurchaseContractItem` | `I_CntrlPurContractItemBasic` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Central Purchase Contract'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_CentralPurchaseContractBasic
  as select from R_CentralPurchaseContract as CentralPurchaseContract
  
  association [1..*] to I_CntrlPurContractItemBasic as _CentralPurchaseContractItem on $projection.CentralPurchaseContract = _CentralPurchaseContractItem.CentralPurchaseContract

{
 key  cast (ActivePurchasingDocument as vdm_centralpurchasecontract preserving type) as CentralPurchaseContract,
      PurchaseContractType,
      PurchasingDocumentCategory,
      PurchasingDocumentSubtype,
      Supplier,
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      PurchasingDocumentName,
      ValidityStartDate,
      ValidityEndDate,
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurchaseContractTargetAmount,
      LastChangeDateTime,
      CreationDate,
      CreatedByUser,
      ReleaseCode,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      CashDiscount1Percent,
      CashDiscount2Percent,
      NetPaymentDays,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,
      ExchangeRateIsFixed,
      PurgDocChangeRequestStatus,
      PurgDocIsChgVers,
      PurchasingDocumentDeletionCode,
      
      _CentralPurchaseContractItem
      
}

where
  (
       PurgDocChangeRequestStatus = '' or
       PurgDocChangeRequestStatus = '2'
  )
```
