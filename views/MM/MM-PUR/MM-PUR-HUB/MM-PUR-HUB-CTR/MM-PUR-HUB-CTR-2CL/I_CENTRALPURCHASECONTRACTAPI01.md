---
name: I_CENTRALPURCHASECONTRACTAPI01
description: CENTRALPurchase ContractAPI 01
app_component: MM-PUR-HUB-CTR-2CL
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
  - purchase-contract
  - contract
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CENTRALPURCHASECONTRACTAPI01

**CENTRALPurchase ContractAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |
| `PurchaseContractType` |  | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `Supplier` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `CreationDate` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `CashDiscount1Days` |  | |  |  |
| `CashDiscount2Days` |  | |  |  |
| `CashDiscount1Percent` |  | |  |  |
| `CashDiscount2Percent` |  | |  |  |
| `NetPaymentDays` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `PurchaseContractTargetAmount` |  | |  |  |
| `ExchangeRate` |  | |  | `cast (ExchangeRate as abap.char(12))` |
| `PurContractExchangeRateValue` |  | |  | `cast (ExchangeRate as abap.char(12))` |
| `ExchangeRateIsFixed` |  | |  |  |
| `SupplyingSupplier` |  | |  |  |
| `QuotationSubmissionDate` |  | |  |  |
| `SupplierQuotation` |  | |  |  |
| `CorrespncExternalReference` |  | |  |  |
| `CorrespncInternalReference` |  | |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |
| `SupplierPhoneNumber` |  | |  |  |
| `ReleaseCode` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |
| `PurchasingProcessingStatus` |  | |  |  |
| `ActivePurchasingDocument` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `PurgContractIsInPreparation` |  | |  | `cast ('' as boolean)` |
| `PurchasingDocumentName` |  | |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |
| `CntrlPurContrDistributionSts` |  | | `_CntrlPurContrAggrgnDistrSts` | `CntrlPurContrDistributionSts` |
| `CntrlPurContrFlxblDistrIsAllwd` |  | |  |  |
| `PurgDocIsChgVers` |  | |  |  |
| `_CentralPurchaseContractItem` | | ✓ | | |
| `_CntrlPurContrDistrMessages` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralPurchaseContractItem` | `I_CntrlPurContractItemAPI01` | [1..*] |
| `_CntrlPurContrDistrMessages` | `I_ExtendedPurgDocDistrMessages` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLPCTRHAPI01'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType : #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Central Purchase Contract'
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CentralPurchaseContractAPI01 as select from I_CentralPurchaseContract
  association [1..*] to I_CntrlPurContractItemAPI01    as _CentralPurchaseContractItem on $projection.CentralPurchaseContract = _CentralPurchaseContractItem.CentralPurchaseContract
  association [1..*] to I_ExtendedPurgDocDistrMessages as _CntrlPurContrDistrMessages  on $projection.CentralPurchaseContract = _CntrlPurContrDistrMessages.PurchasingDocument
{

  key CentralPurchaseContract,

      PurchaseContractType,

      PurchasingDocumentCategory,


      Supplier,

      CompanyCode,

      PurchasingOrganization,

      PurchasingGroup,

      ValidityStartDate,

      ValidityEndDate,

      @Semantics.currencyCode:true
      DocumentCurrency,

      LastChangeDateTime,

      CreationDate,

      PaymentTerms,

      CashDiscount1Days,

      CashDiscount2Days,

      CashDiscount1Percent,

      CashDiscount2Percent,

      NetPaymentDays,

      IncotermsClassification,

      IncotermsTransferLocation,

      IncotermsVersion,

      IncotermsLocation1,

      IncotermsLocation2,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurchaseContractTargetAmount,

      // VDM changes for datetype not allowed for RT rate
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurContractExchangeRateValue'
      cast (ExchangeRate as abap.char(12))                      as ExchangeRate,

      cast (ExchangeRate as abap.char(12))                      as PurContractExchangeRateValue,

      ExchangeRateIsFixed,

      SupplyingSupplier,

      QuotationSubmissionDate,

      SupplierQuotation,

      CorrespncExternalReference,

      CorrespncInternalReference,

      SupplierRespSalesPersonName,

      SupplierPhoneNumber,

      ReleaseCode,

      CreatedByUser,

      PurchasingDocumentDeletionCode,

      PurchasingProcessingStatus,

      ActivePurchasingDocument,                             //3227601

      @Consumption.hidden: true
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,

      cast ('' as boolean)                                      as PurgContractIsInPreparation,

      PurchasingDocumentName,

      PurchasingDocumentSubtype,

      _CntrlPurContrAggrgnDistrSts.CntrlPurContrDistributionSts as CntrlPurContrDistributionSts,

      CntrlPurContrFlxblDistrIsAllwd,

      PurgDocIsChgVers,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD]
      _CentralPurchaseContractItem,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD]
      _CntrlPurContrDistrMessages

}
```
