---
name: I_CENTRALSUPPLIERQUOTATIONTP_2
description: "Centralsupplierquotationtp 2"
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
  - supplier
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_CENTRALSUPPLIERQUOTATIONTP_2

**Centralsupplierquotationtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
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
| `CentralSuplrQuotationCondition` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CentralRequestForQuotation` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `QtnLifecycleStatus` |  | |  |  |  |  |
| `FollowOnDocumentCategory` |  | |  |  |  |  |
| `PurgDocFollowOnDocumentType` |  | |  |  |  |  |
| `PurContrValidityStartDate` |  | |  |  |  |  |
| `PurContrValidityEndDate` |  | |  |  |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Central Supplier Quotation'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralSupplierQuotation']
@ObjectModel.representativeKey: 'CentralSupplierQuotation'
@ObjectModel.sapObjectNodeType.name: 'CentralSupplierQuotation'

@ObjectModel:{
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A, // #B or #C
               usageType.sizeCategory: #L
             }

@Metadata.ignorePropagatedAnnotations: true
define root view entity I_CentralSupplierQuotationTP_2
  provider contract transactional_interface
  as projection on R_CentralSupplierQuotationTP as _CentralSupplierQuotation
{
  key CentralSupplierQuotation,
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
      CentralSuplrQuotationCondition,
      PurchasingOrganization,
      PurchasingGroup,
      CentralRequestForQuotation,
      SupplierQuotationExternalID,
      QuotationSubmissionDate,
      QuotationLatestSubmissionDate,
      BindingPeriodValidityEndDate,
      ExchangeRate,
      QtnLifecycleStatus,
      FollowOnDocumentCategory,
      PurgDocFollowOnDocumentType,
      PurContrValidityStartDate,
      PurContrValidityEndDate,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurchaseContractTargetAmount,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      PurchasingDocumentDeletionCode,
      /* Associations */

      _CntrlSupplierQuotationItem : redirected to composition child I_CntrlSuplrQuotationItemTP_2
}
```
