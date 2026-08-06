---
name: I_SUPPLIERQUOTATION_API01
description: Supplierquotation Api 01
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
  - supplier
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATION_API01

**Supplierquotation Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierQuotation` | `I_SupplierQuotation.SupplierQuotation` |
| `CompanyCode` | `I_SupplierQuotation.CompanyCode` |
| `PurchasingDocumentCategory` | `I_SupplierQuotation.PurchasingDocumentCategory` |
| `PurchasingDocumentType` | `I_SupplierQuotation.PurchasingDocumentType` |
| `Supplier` | `I_SupplierQuotation.Supplier` |
| `CreatedByUser` | `I_SupplierQuotation.CreatedByUser` |
| `CreationDate` | `I_SupplierQuotation.CreationDate` |
| `LastChangeDateTime` | `I_SupplierQuotation.LastChangeDateTime` |
| `Language` | `I_SupplierQuotation.Language` |
| `DocumentCurrency` | `I_SupplierQuotation.DocumentCurrency` |
| `IncotermsClassification` | `I_SupplierQuotation.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_SupplierQuotation.IncotermsTransferLocation` |
| `IncotermsVersion` | `I_SupplierQuotation.IncotermsVersion` |
| `IncotermsLocation1` | `I_SupplierQuotation.IncotermsLocation1` |
| `IncotermsLocation2` | `I_SupplierQuotation.IncotermsLocation2` |
| `PaymentTerms` | `I_SupplierQuotation.PaymentTerms` |
| `CashDiscount1Days` | `I_SupplierQuotation.CashDiscount1Days` |
| `CashDiscount2Days` | `I_SupplierQuotation.CashDiscount2Days` |
| `CashDiscount1Percent` | `I_SupplierQuotation.CashDiscount1Percent` |
| `CashDiscount2Percent` | `I_SupplierQuotation.CashDiscount2Percent` |
| `NetPaymentDays` | `I_SupplierQuotation.NetPaymentDays` |
| `PricingProcedure` | `I_SupplierQuotation.PricingProcedure` |
| `PurchasingDocumentCondition` | `I_SupplierQuotation.PurchasingDocumentCondition` |
| `PurchasingOrganization` | `I_SupplierQuotation.PurchasingOrganization` |
| `PurchasingGroup` | `I_SupplierQuotation.PurchasingGroup` |
| `PurchasingDocumentOrderDate` | `I_SupplierQuotation.PurchasingDocumentOrderDate` |
| `RequestForQuotation` | `I_SupplierQuotation.RequestForQuotation` |
| `SupplierQuotationExternalID` | `I_SupplierQuotation.SupplierQuotationExternalID` |
| `QuotationSubmissionDate` | `I_SupplierQuotation.QuotationSubmissionDate` |
| `QuotationLatestSubmissionDate` | `I_SupplierQuotation.QuotationLatestSubmissionDate` |
| `BindingPeriodValidityEndDate` | `I_SupplierQuotation.BindingPeriodValidityEndDate` |
| `ExchangeRate` | `I_SupplierQuotation.ExchangeRate` |
| `ExchangeRateIsFixed` | `I_SupplierQuotation.ExchangeRateIsFixed` |
| `QTNLifecycleStatus` | `I_SupplierQuotation.QtnLifecycleStatus` |
| `FollowOnDocumentCategory` | `I_SupplierQuotation.FollowOnDocumentCategory` |
| `FollowOnDocumentType` | `I_SupplierQuotation.FollowOnDocumentType` |
| `IsEndOfPurposeBlocked` | `I_SupplierQuotation.IsEndOfPurposeBlocked` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotationExtension` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMQTNAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@EndUserText.label: 'Supplier Quotation'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE

define view I_SupplierQuotation_Api01 as select from I_SupplierQuotation 

 ----Extension Association
  association [1..1] to E_PurchasingDocument          as _SupplierQuotationExtension on  $projection.SupplierQuotation = _SupplierQuotationExtension.PurchasingDocument
 
{
  key I_SupplierQuotation.SupplierQuotation,
      I_SupplierQuotation.CompanyCode,
      I_SupplierQuotation.PurchasingDocumentCategory,
      I_SupplierQuotation.PurchasingDocumentType,
      I_SupplierQuotation.Supplier,
      I_SupplierQuotation.CreatedByUser,
      I_SupplierQuotation.CreationDate,
      I_SupplierQuotation.LastChangeDateTime,
      I_SupplierQuotation.Language,
      I_SupplierQuotation.DocumentCurrency,
      I_SupplierQuotation.IncotermsClassification,
      I_SupplierQuotation.IncotermsTransferLocation,
      I_SupplierQuotation.IncotermsVersion,
      I_SupplierQuotation.IncotermsLocation1,
      I_SupplierQuotation.IncotermsLocation2,
      I_SupplierQuotation.PaymentTerms,
      I_SupplierQuotation.CashDiscount1Days,
      I_SupplierQuotation.CashDiscount2Days,
      I_SupplierQuotation.CashDiscount1Percent,
      I_SupplierQuotation.CashDiscount2Percent,
      I_SupplierQuotation.NetPaymentDays,
      I_SupplierQuotation.PricingProcedure,
      I_SupplierQuotation.PurchasingDocumentCondition,
      I_SupplierQuotation.PurchasingOrganization,
      I_SupplierQuotation.PurchasingGroup,
      I_SupplierQuotation.PurchasingDocumentOrderDate,
      I_SupplierQuotation.RequestForQuotation,
      I_SupplierQuotation.SupplierQuotationExternalID,
      I_SupplierQuotation.QuotationSubmissionDate,
      I_SupplierQuotation.QuotationLatestSubmissionDate,
      I_SupplierQuotation.BindingPeriodValidityEndDate,
      I_SupplierQuotation.ExchangeRate,
      I_SupplierQuotation.ExchangeRateIsFixed,
      I_SupplierQuotation.QtnLifecycleStatus as QTNLifecycleStatus,
      I_SupplierQuotation.FollowOnDocumentCategory,
      I_SupplierQuotation.FollowOnDocumentType,
      I_SupplierQuotation.IsEndOfPurposeBlocked
}
```
