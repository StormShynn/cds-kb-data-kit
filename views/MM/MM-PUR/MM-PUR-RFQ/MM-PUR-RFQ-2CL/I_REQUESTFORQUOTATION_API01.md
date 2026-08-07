---
name: I_REQUESTFORQUOTATION_API01
description: Requestforquotation Api 01
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
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_REQUESTFORQUOTATION_API01

**Requestforquotation Api 01**

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
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
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
| `FollowOnDocumentType` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequestQtnExtension` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMRFQAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Request for Quotation'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE 

define view I_Requestforquotation_Api01 as select from I_RequestForQuotation
  --Extension Association
  association [1..1] to E_PurchasingDocument         as _RequestQtnExtension  on  $projection.RequestForQuotation = _RequestQtnExtension .PurchasingDocument

{
  key I_RequestForQuotation.RequestForQuotation,
      I_RequestForQuotation.CompanyCode,
      I_RequestForQuotation.PurchasingDocumentCategory,
      I_RequestForQuotation.PurchasingDocumentType,
      I_RequestForQuotation.CreatedByUser,
      I_RequestForQuotation.CreationDate,
      I_RequestForQuotation.LastChangeDateTime,
      I_RequestForQuotation.Language,
      I_RequestForQuotation.PurchasingOrganization,
      I_RequestForQuotation.PurchasingGroup,
      I_RequestForQuotation.DocumentCurrency,
      I_RequestForQuotation.IncotermsClassification,
      I_RequestForQuotation.IncotermsTransferLocation,
      I_RequestForQuotation.IncotermsVersion,
      I_RequestForQuotation.IncotermsLocation1,
      I_RequestForQuotation.IncotermsLocation2,
      I_RequestForQuotation.PaymentTerms,
      I_RequestForQuotation.CashDiscount1Days,
      I_RequestForQuotation.CashDiscount2Days,
      I_RequestForQuotation.CashDiscount1Percent,
      I_RequestForQuotation.CashDiscount2Percent,
      I_RequestForQuotation.NetPaymentDays,
      I_RequestForQuotation.ValidityStartDate,
      I_RequestForQuotation.ValidityEndDate,
      I_RequestForQuotation.RFQPublishingDate,
      I_RequestForQuotation.QuotationLatestSubmissionDate,
      I_RequestForQuotation.BindingPeriodValidityEndDate,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      I_RequestForQuotation.TargetAmount,
      I_RequestForQuotation.RFQLifecycleStatus,
      I_RequestForQuotation.RequestForQuotationName,
      I_RequestForQuotation.QuotationEarliestSubmsnDate,
      I_RequestForQuotation.LatestRegistrationDate,
      I_RequestForQuotation.CorrespncInternalReference,
      I_RequestForQuotation.FollowOnDocumentCategory,
      I_RequestForQuotation.FollowOnDocumentType,
      I_RequestForQuotation.IsEndOfPurposeBlocked
      
}
```
