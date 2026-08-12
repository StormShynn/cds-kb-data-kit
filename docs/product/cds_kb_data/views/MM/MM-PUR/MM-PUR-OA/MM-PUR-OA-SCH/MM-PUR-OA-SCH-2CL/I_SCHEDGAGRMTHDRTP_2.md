---
name: I_SCHEDGAGRMTHDRTP_2
description: "Schedgagrmthdrtp 2"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTHDRTP_2

**Schedgagrmthdrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `PurchasingDocumentTypeName` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserFullName` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
| `EffectiveExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PurchasingDocumentOrderDate` |  | |  |  |  |  |
| `ScheduleAgreementHasReleaseDoc` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierAddressID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `CompanyVATRegistration` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_SchedgAgrmtPartner` | | ✓ | | | | |
| `_SchedgAgrmtHeaderNotes` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Header'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['SchedulingAgreement']

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'PurchaseSchedulingAgreement'

define root view entity I_SchedgAgrmtHdrTP_2
  provider contract transactional_interface
  as projection on R_SchedgAgrmtHdrTP as _PurchaseSchedulingAgreement
{

  key SchedulingAgreement,
      CompanyCode,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingDocumentSubtype,
      PurchasingDocumentTypeName,
      CreatedByUser,
      CreatedByUserFullName,
      CreationDate,
      Language,
      PurchasingOrganization,
      PurchasingGroup,
      DocumentCurrency,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount1Percent,
      CashDiscount2Days,
      CashDiscount2Percent,
      NetPaymentDays,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      //      ExchangeRate,
      AbsoluteExchangeRate,
      ExchRateIsIndirectQuotation,
      EffectiveExchangeRate,
      ExchangeRateIsFixed,
      IncotermsVersion,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      PurchasingDocumentOrderDate,
      ScheduleAgreementHasReleaseDoc,
      Supplier,
      SupplierAddressID,
      ValidityStartDate,
      ValidityEndDate,
      PurchasingDocumentOrigin,
      QuotationSubmissionDate,
      SupplierQuotationExternalID,
      VATRegistrationCountry,
      InvoicingParty,
      SupplyingSupplier,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      CorrespncExternalReference,
      CorrespncInternalReference,
      CompanyVATRegistration,
      LastChangeDateTime,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      PurchasingDocumentDeletionCode,
      ReleaseIsNotCompleted,
      PurchasingCompletenessStatus,
      PurchasingProcessingStatus,

      /* Associations */
      _SchedgAgrmtItm         : redirected to composition child I_SchedgAgrmtItmTP_2,
      _SchedgAgrmtPartner     : redirected to composition child I_SchedgAgrmtPartnerTP_2,
      _SchedgAgrmtHeaderNotes : redirected to composition child I_SchedgAgrmtHeaderNotesTP_2
}
```
