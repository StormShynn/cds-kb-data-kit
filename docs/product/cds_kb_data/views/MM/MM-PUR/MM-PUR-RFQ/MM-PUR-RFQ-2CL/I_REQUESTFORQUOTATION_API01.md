---
name: I_REQUESTFORQUOTATION_API01
description: "Requestforquotation Api 01"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
