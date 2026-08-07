---
name: I_CNTRLPURCHASECONTRACTTP_2
description: "CNTRLPurchase ContractTP 2"
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
  - purchase-contract
  - contract
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCHASECONTRACTTP_2

**CNTRLPurchase ContractTP 2**

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
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `SupplierQuotation` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PurchasingDocumentName` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurgContractIsInPreparation` |  | |  |  |  |  |
| `CntrlPurContrFlxblDistrIsAllwd` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `ActivePurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentVersion` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `PurgDocIsChgVers` |  | |  |  |  |  |
| `IsCancelled` |  | |  |  |  |  |
| `CntrlPurContrDistributionSts` |  | |  |  |  |  |
| `PurchasingDocVersionReasonCode` |  | |  |  |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `ProcmtHubCompanyCodeGroupingID` |  | |  |  |  |  |
| `_CentralPurchaseContractItem` | | ✓ | | | | |
| `_CentralPurchaseContrHdrDistr` | | ✓ | | | | |
| `_CntrlPurContractHdrNotes` | | ✓ | | | | |
| `_CntrlPurContrHdrCndnValidity` | | ✓ | | | | |
| `_CntrlPurContrVersionHistory` | | ✓ | | | | |
| `_SubordCntrlPurContract` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Central Purchase Contract Header - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract']

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CentralPurchaseContract'
define root view entity I_CntrlPurchaseContractTP_2 provider contract transactional_interface
  as projection on R_CntrlPurchaseContractTP as CentralPurchaseContract
{
  key CentralPurchaseContract,
      PurchaseContractType,
      PurchasingDocumentCategory,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.systemDateTime.createdAt: true
      CreationDate,
      Supplier,
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      DocumentCurrency,
      IncotermsClassification,
      IncotermsTransferLocation,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,
      @Semantics.amount.currencyCode:'DocumentCurrency'
      PurchaseContractTargetAmount,
      ValidityStartDate,
      ValidityEndDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      QuotationSubmissionDate,
      SupplierQuotation,
      CorrespncExternalReference,
      CorrespncInternalReference,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,
      PurchasingDocumentName,
      PurchasingProcessingStatus,
      PurgContractIsInPreparation,   
      CntrlPurContrFlxblDistrIsAllwd,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      ActivePurchasingDocument,                       
      PurchasingDocumentVersion,
      PurchasingDocumentOrigin,
      PurgDocIsChgVers,
      IsCancelled,
      CntrlPurContrDistributionSts,
      PurchasingDocVersionReasonCode,
      PurchasingDocumentSubtype,
      ProcmtHubCompanyCodeGroupingID,
      
      
      /* Associations */

      _CentralPurchaseContractItem  : redirected to composition child I_CntrlPurchaseContractItmTP_2,
      _CentralPurchaseContrHdrDistr : redirected to composition child I_CntrlPurContrHdrDistrTP_2,
      _CntrlPurContractHdrNotes     : redirected to composition child I_CntrlPurContrHdrNotesTP_2,
      _CntrlPurContrHdrCndnValidity : redirected to composition child I_CePuCoHdrCndnValdtyTP_2,
      @Semantics.valueRange.maximum: '1'
      _CntrlPurContrVersionHistory  : redirected to composition child I_CntrlPurContrVersHistoryTP_2,
      _SubordCntrlPurContract       : redirected to composition child I_SubordinateCntrlContractTP_2
      
      
}
```
