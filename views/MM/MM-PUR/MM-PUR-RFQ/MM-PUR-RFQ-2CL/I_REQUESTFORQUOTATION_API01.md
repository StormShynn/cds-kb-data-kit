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

| Field | Data Source |
|---|---|
| key `RequestForQuotation` | `I_RequestForQuotation.RequestForQuotation` |
| `CompanyCode` | `I_RequestForQuotation.CompanyCode` |
| `PurchasingDocumentCategory` | `I_RequestForQuotation.PurchasingDocumentCategory` |
| `PurchasingDocumentType` | `I_RequestForQuotation.PurchasingDocumentType` |
| `CreatedByUser` | `I_RequestForQuotation.CreatedByUser` |
| `CreationDate` | `I_RequestForQuotation.CreationDate` |
| `LastChangeDateTime` | `I_RequestForQuotation.LastChangeDateTime` |
| `Language` | `I_RequestForQuotation.Language` |
| `PurchasingOrganization` | `I_RequestForQuotation.PurchasingOrganization` |
| `PurchasingGroup` | `I_RequestForQuotation.PurchasingGroup` |
| `DocumentCurrency` | `I_RequestForQuotation.DocumentCurrency` |
| `IncotermsClassification` | `I_RequestForQuotation.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_RequestForQuotation.IncotermsTransferLocation` |
| `IncotermsVersion` | `I_RequestForQuotation.IncotermsVersion` |
| `IncotermsLocation1` | `I_RequestForQuotation.IncotermsLocation1` |
| `IncotermsLocation2` | `I_RequestForQuotation.IncotermsLocation2` |
| `PaymentTerms` | `I_RequestForQuotation.PaymentTerms` |
| `CashDiscount1Days` | `I_RequestForQuotation.CashDiscount1Days` |
| `CashDiscount2Days` | `I_RequestForQuotation.CashDiscount2Days` |
| `CashDiscount1Percent` | `I_RequestForQuotation.CashDiscount1Percent` |
| `CashDiscount2Percent` | `I_RequestForQuotation.CashDiscount2Percent` |
| `NetPaymentDays` | `I_RequestForQuotation.NetPaymentDays` |
| `ValidityStartDate` | `I_RequestForQuotation.ValidityStartDate` |
| `ValidityEndDate` | `I_RequestForQuotation.ValidityEndDate` |
| `RFQPublishingDate` | `I_RequestForQuotation.RFQPublishingDate` |
| `QuotationLatestSubmissionDate` | `I_RequestForQuotation.QuotationLatestSubmissionDate` |
| `BindingPeriodValidityEndDate` | `I_RequestForQuotation.BindingPeriodValidityEndDate` |
| `TargetAmount` | `I_RequestForQuotation.TargetAmount` |
| `RFQLifecycleStatus` | `I_RequestForQuotation.RFQLifecycleStatus` |
| `RequestForQuotationName` | `I_RequestForQuotation.RequestForQuotationName` |
| `QuotationEarliestSubmsnDate` | `I_RequestForQuotation.QuotationEarliestSubmsnDate` |
| `LatestRegistrationDate` | `I_RequestForQuotation.LatestRegistrationDate` |
| `CorrespncInternalReference` | `I_RequestForQuotation.CorrespncInternalReference` |
| `FollowOnDocumentCategory` | `I_RequestForQuotation.FollowOnDocumentCategory` |
| `FollowOnDocumentType` | `I_RequestForQuotation.FollowOnDocumentType` |
| `IsEndOfPurposeBlocked` | `I_RequestForQuotation.IsEndOfPurposeBlocked` |

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
