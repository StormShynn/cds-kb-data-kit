---
name: I_SUPPLIERQUOTATIONTP
description: "Supplierquotationtp"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - transactional-processing
  - supplier
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATIONTP

**Supplierquotationtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
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
| `PricingProcedure` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingDocumentOrderDate` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
| `EffectiveExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `PurContrValidityStartDate` |  | |  |  |  |  |
| `PurContrValidityEndDate` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `RequestForQuotation` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `QtnLifecycleStatus` |  | |  |  |  |  |
| `FollowOnDocumentCategory` |  | |  |  |  |  |
| `PurgDocFollowOnDocumentType` |  | |  |  |  |  |
| `_SupplierQuotationItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supplier Quotation - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['SupplierQuotation']
@ObjectModel.representativeKey: 'SupplierQuotation'

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SupplierQuotation'
define root view  entity I_SupplierQuotationTP
 provider contract transactional_interface
 as projection on R_SupplierQuotationTP as _SupplierQuotation

 {

   key SupplierQuotation,
   CompanyCode,
   PurchasingDocumentCategory,
   PurchasingDocumentType,
   Supplier,
   CreatedByUser,
   CreationDate,
   LastChangeDateTime,
   Language,
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
   PricingProcedure,
   PurchasingOrganization,
   PurchasingGroup,
   PurchasingDocumentOrderDate,
   //ExchangeRate,
   AbsoluteExchangeRate,
   ExchRateIsIndirectQuotation,
   EffectiveExchangeRate,
   ExchangeRateIsFixed,
   PurContrValidityStartDate,
   PurContrValidityEndDate,
   @Semantics.booleanIndicator:  true
   IsEndOfPurposeBlocked,
   PurchasingDocumentDeletionCode,
   RequestForQuotation,
   SupplierQuotationExternalID,
   QuotationSubmissionDate,
   QuotationLatestSubmissionDate,
   BindingPeriodValidityEndDate,
   QtnLifecycleStatus,
   FollowOnDocumentCategory,
   PurgDocFollowOnDocumentType,
   /* Associations */
   _SupplierQuotationItem : redirected to composition child I_SupplierQuotationItemTP

    
}
```
