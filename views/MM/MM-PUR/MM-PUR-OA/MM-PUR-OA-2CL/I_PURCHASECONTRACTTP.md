---
name: I_PURCHASECONTRACTTP
description: "Purchase ContractTP"
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - purchase-contract
  - contract
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTTP

**Purchase ContractTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
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
| `ReleaseCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
| `EffectiveExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
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
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `SupplierAddressID` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `PurgHasCatalogRelevantItems` |  | |  |  |  |  |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurCtrPartners` | | ✓ | | | | |
| `_PurCtrNotes` | | ✓ | | | | |
| `_ReleaseCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Header - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['PurchaseContract']
@ObjectModel.representativeKey: 'PurchaseContract'

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'PurchaseContract'
define root view entity I_PurchaseContractTP
 provider contract transactional_interface
  as projection on R_PurchaseContractTP as PurchaseContract

{
  key PurchaseContract,
      PurchaseContractType,
      PurchasingDocumentCategory,
      LastChangeDateTime,
      CreationDate,
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
      @Semantics.amount.currencyCode:'DocumentCurrency'
      PurchaseContractTargetAmount,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.foreignKey.association: '_ReleaseCode'
      ReleaseCode,
      
      CreatedByUser,
      PurchasingDocumentDeletionCode,
      SupplyingSupplier,
      InvoicingParty,
//      ExchangeRate,
      AbsoluteExchangeRate,
      ExchRateIsIndirectQuotation,
      EffectiveExchangeRate,

      ExchangeRateIsFixed,
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
      PurchasingDocumentOrigin,
      ReleaseIsNotCompleted,
      PurchasingProcessingStatus,
            
      SupplierAddressID,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      PurgHasCatalogRelevantItems,

      /* Associations */
      _PurchaseContractItem : redirected to composition child I_PurchaseContractItemTP,
      _PurCtrPartners       : redirected to composition child I_PurContrPartnersTP,
      _PurCtrNotes          : redirected to composition child I_PurContrHeaderNotesTP,
      _ReleaseCode


}
```
