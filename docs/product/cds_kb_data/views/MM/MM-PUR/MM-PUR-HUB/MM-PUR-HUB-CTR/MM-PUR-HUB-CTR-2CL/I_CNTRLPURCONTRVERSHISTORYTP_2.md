---
name: I_CNTRLPURCONTRVERSHISTORYTP_2
description: "Cntrlpurcontrvershistorytp 2"
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
# I_CNTRLPURCONTRVERSHISTORYTP_2

**Cntrlpurcontrvershistorytp 2**

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
| `CntrlPurContrFlxblDistrIsAllwd` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `ActivePurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentVersion` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `PurchasingDocVersionReasonCode` |  | |  |  |  |  |
| `PurchasingDocVersionStatus` |  | |  |  |  |  |
| `_CntrlPurContr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Version History - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract' ]

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrVersHistoryTP_2
  as projection on R_CntrlPurContrVersHistoryTP
{
  key CentralPurchaseContract,
      PurchaseContractType,
      PurchasingDocumentCategory,
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
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurchaseContractTargetAmount,
      ValidityStartDate,
      ValidityEndDate,
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
      CntrlPurContrFlxblDistrIsAllwd,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      ActivePurchasingDocument,
      PurchasingDocumentVersion,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDate,
      @Semantics.systemDateTime.createdAt: true
      CreationTime,
      PurchasingDocVersionReasonCode,
      PurchasingDocVersionStatus, 
      
      /* Associations */
      _CntrlPurContr : redirected to parent I_CntrlPurchaseContractTP_2
}
```
