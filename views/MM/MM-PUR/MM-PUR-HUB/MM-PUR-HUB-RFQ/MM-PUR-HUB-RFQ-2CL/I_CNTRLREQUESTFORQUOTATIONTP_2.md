---
name: I_CNTRLREQUESTFORQUOTATIONTP_2
description: Cntrlrequestforquotationtp 2
app_component: MM-PUR-HUB-RFQ-2CL
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
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLREQUESTFORQUOTATIONTP_2

**Cntrlrequestforquotationtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
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
| `RFQLifecycleStatus` |  | |  |  |  |  |
| `RequestForQuotationName` |  | |  |  |  |  |
| `QuotationEarliestSubmsnDate` |  | |  |  |  |  |
| `LatestRegistrationDate` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `FollowOnDocumentCategory` |  | |  |  |  |  |
| `PurgDocFollowOnDocumentType` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurContrValidityStartDate` |  | |  |  |  |  |
| `PurContrValidityEndDate` |  | |  |  |  |  |
| `_CentralReqForQuotationItem` | | ✓ | | | | |
| `_CntrlReqForQuotationBidder` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Cntrl req for Quotation header'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralRequestForQuotation']
@ObjectModel.representativeKey:'CentralRequestForQuotation'
@ObjectModel.sapObjectNodeType.name: 'CentralRequestForQuotation'
@ObjectModel:{
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A, // #B or #C
               usageType.sizeCategory: #L
             }
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_CntrlRequestForQuotationTP_2
  provider contract transactional_interface
  as projection on R_CentralRequestForQuotationTP as _CentralRequestForQuotation
{
  key CentralRequestForQuotation,
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
      //      ValidityStartDate,
      //      ValidityEndDate,
      RFQPublishingDate,
      QuotationLatestSubmissionDate,
      BindingPeriodValidityEndDate,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      RFQLifecycleStatus,
      RequestForQuotationName,
      QuotationEarliestSubmsnDate,
      LatestRegistrationDate,
      CorrespncInternalReference,
      FollowOnDocumentCategory,
      PurgDocFollowOnDocumentType,
      PurchasingDocumentDeletionCode,

      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,
      PurContrValidityStartDate,
      PurContrValidityEndDate,

      /* Associations */
      @Semantics.valueRange.maximum: '1'
      _CentralReqForQuotationItem : redirected to composition child I_CntrlReqForQuotationItemTP_2,
      @Semantics.valueRange.maximum: '1'
      _CntrlReqForQuotationBidder : redirected to composition child I_CntrlRequestForQtnBidderTP_2

}
```
