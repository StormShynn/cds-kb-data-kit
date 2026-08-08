---
name: I_REQUESTFORQUOTATIONTP
description: "Requestforquotationtp"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - transactional-processing
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_REQUESTFORQUOTATIONTP

**Requestforquotationtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `RFQPublishingDate` |  | |  |  |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `RFQLifecycleStatus` |  | |  |  |  |  |
| `RequestForQuotationName` |  | |  |  |  |  |
| `QuotationEarliestSubmsnDate` |  | |  |  |  |  |
| `LatestRegistrationDate` |  | |  |  |  |  |
| `FollowOnDocumentCategory` |  | |  |  |  |  |
| `PurgDocFollowOnDocumentType` |  | |  |  |  |  |
| `PurContrValidityStartDate` |  | |  |  |  |  |
| `PurContrValidityEndDate` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `_RequestForQuotationItem` | | ✓ | | | | |
| `_RequestForQuotationBidder` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Request For Quotation - TP'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['RequestForQuotation']
@ObjectModel.representativeKey: 'RequestForQuotation'

@ObjectModel: {
    usageType: {
      sizeCategory: #M,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'RequestForQuotation'
define root view entity I_RequestForQuotationTP
  provider contract transactional_interface
  as projection on R_RequestForQuotationTP as _RequestForQuotation
{
  key RequestForQuotation,
      CompanyCode,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      CreatedByUser,
      CreationDate,
      LastChangeDateTime,
      Language,
      PurchasingOrganization,
      PurchasingGroup,
      DocumentCurrency,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      CashDiscount1Percent,
      CashDiscount2Percent,
      NetPaymentDays,
      RFQPublishingDate,
      QuotationLatestSubmissionDate,
      BindingPeriodValidityEndDate,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      CorrespncInternalReference,
      RFQLifecycleStatus,
      RequestForQuotationName,
      QuotationEarliestSubmsnDate,
      LatestRegistrationDate,
      FollowOnDocumentCategory,
      PurgDocFollowOnDocumentType,
      PurContrValidityStartDate,
      PurContrValidityEndDate,
      PurchasingDocumentDeletionCode,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      /* Associations */
      _RequestForQuotationItem   : redirected to composition child I_RequestForQuotationItemTP,
      _RequestForQuotationBidder : redirected to composition child I_RequestForQuotationBidderTP
}
```
