---
name: I_CENTRALSUPPLIERQUOTATION
description: Centralsupplierquotation
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
  - supplier
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_CENTRALSUPPLIERQUOTATION

**Centralsupplierquotation**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralSupplierQuotation` | `R_CentralSupplierQuotation.CentralSupplierQuotation` |
| `CompanyCode` | `R_CentralSupplierQuotation.CompanyCode` |
| `PurchasingDocumentCategory` | `R_CentralSupplierQuotation.PurchasingDocumentCategory` |
| `PurchasingDocumentType` | `R_CentralSupplierQuotation.PurchasingDocumentType` |
| `Supplier` | `R_CentralSupplierQuotation.Supplier` |
| `CreatedByUser` | `R_CentralSupplierQuotation.CreatedByUser` |
| `CreationDate` | `R_CentralSupplierQuotation.CreationDate` |
| `LastChangeDateTime` | `R_CentralSupplierQuotation.LastChangeDateTime` |
| `Language` | `R_CentralSupplierQuotation.Language` |
| `DocumentCurrency` | `R_CentralSupplierQuotation.DocumentCurrency` |
| `IncotermsClassification` | `R_CentralSupplierQuotation.IncotermsClassification` |
| `IncotermsTransferLocation` | `R_CentralSupplierQuotation.IncotermsTransferLocation` |
| `IncotermsVersion` | `R_CentralSupplierQuotation.IncotermsVersion` |
| `IncotermsLocation1` | `R_CentralSupplierQuotation.IncotermsLocation1` |
| `IncotermsLocation2` | `R_CentralSupplierQuotation.IncotermsLocation2` |
| `PaymentTerms` | `R_CentralSupplierQuotation.PaymentTerms` |
| `CashDiscount1Days` | `R_CentralSupplierQuotation.CashDiscount1Days` |
| `CashDiscount2Days` | `R_CentralSupplierQuotation.CashDiscount2Days` |
| `CashDiscount1Percent` | `R_CentralSupplierQuotation.CashDiscount1Percent` |
| `CashDiscount2Percent` | `R_CentralSupplierQuotation.CashDiscount2Percent` |
| `NetPaymentDays` | `R_CentralSupplierQuotation.NetPaymentDays` |
| `PricingProcedure` | `R_CentralSupplierQuotation.PricingProcedure` |
| `CentralSuplrQuotationCondition` | `R_CentralSupplierQuotation.CentralSuplrQuotationCondition` |
| `PurchasingOrganization` | `R_CentralSupplierQuotation.PurchasingOrganization` |
| `PurchasingGroup` | `R_CentralSupplierQuotation.PurchasingGroup` |
| `PurchasingDocumentOrderDate` | `R_CentralSupplierQuotation.PurchasingDocumentOrderDate` |
| `CentralRequestForQuotation` | `R_CentralSupplierQuotation.CentralRequestForQuotation` |
| `SupplierQuotationExternalID` | `R_CentralSupplierQuotation.SupplierQuotationExternalID` |
| `QuotationSubmissionDate` | `R_CentralSupplierQuotation.QuotationSubmissionDate` |
| `QuotationLatestSubmissionDate` | `R_CentralSupplierQuotation.QuotationLatestSubmissionDate` |
| `BindingPeriodValidityEndDate` | `R_CentralSupplierQuotation.BindingPeriodValidityEndDate` |
| `ExchangeRate` | `ExchangeRate` |
| `ExchangeRateIsFixed` | `ExchangeRateIsFixed` |
| `QtnLifecycleStatus` | `R_CentralSupplierQuotation.QtnLifecycleStatus` |
| `FollowOnDocumentCategory` | `R_CentralSupplierQuotation.FollowOnDocumentCategory` |
| `FollowOnDocumentType` | `R_CentralSupplierQuotation.FollowOnDocumentType` |
| `PurgDocFollowOnDocumentType` | `R_CentralSupplierQuotation.PurgDocFollowOnDocumentType` |
| `PurContrValidityStartDate` | `R_CentralSupplierQuotation.PurContrValidityStartDate` |
| `PurContrValidityEndDate` | `R_CentralSupplierQuotation.PurContrValidityEndDate` |
| `PurchaseContractTargetAmount` | `R_CentralSupplierQuotation.PurchaseContractTargetAmount` |
| `IsEndOfPurposeBlocked` | `R_CentralSupplierQuotation.IsEndOfPurposeBlocked` |
| `PurchasingDocumentDeletionCode` | `R_CentralSupplierQuotation.PurchasingDocumentDeletionCode` |
| `_CntrlSupplierQuotationItem` | *Association* |
| `_CatTextInCurrentLang` | *Association* |
| `_FollowOnDocumentType` | *Association* |
| `_FollowOnDocumentCategory` | *Association* |
| `_CentralRequestForQuotation` | *Association* |
| `_PurchasingDocumentCategory` | *Association* |
| `_PurchasingDocumentType` | *Association* |
| `_CompanyCode` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_Supplier` | *Association* |
| `_Language` | *Association* |
| `_CreatedByUser` | *Association* |
| `_PricingProcedure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CntrlSupplierQuotationItem` | `I_CntrlSupplierQuotationItem` | [1..*] |
| `_CatTextInCurrentLang` | `I_PurgDocumentCategoryText` | [0..1] |
| `_FollowOnDocumentType` | `I_PurchasingDocumentType` | [0..1] |
| `_FollowOnDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_CentralRequestForQuotation` | `I_CentralRequestForQuotation` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLQTN'
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Supplier Quotation Header'
@AbapCatalog.preserveKey: true

@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
//@AccessControl.privilegedAssociations: [ '_CreatedByUser' ]

@ObjectModel:{ compositionRoot: true,
               representativeKey: 'CentralSupplierQuotation',
               semanticKey: 'CentralSupplierQuotation',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #M }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CentralSupplierQuotation
  as select from R_CentralSupplierQuotation

  association [1..*] to I_CntrlSupplierQuotationItem   as _CntrlSupplierQuotationItem   on  $projection.CentralSupplierQuotation = _CntrlSupplierQuotationItem.CentralSupplierQuotation

  association [0..1] to I_PurgDocumentCategoryText     as _CatTextInCurrentLang         on  $projection.PurchasingDocumentCategory = _CatTextInCurrentLang.PurchasingDocumentCategory
                                                                                        and _CatTextInCurrentLang.Language         = $session.system_language

  association [0..1] to I_PurchasingDocumentType       as _FollowOnDocumentType         on  $projection.PurchasingDocumentCategory  = _FollowOnDocumentType.PurchasingDocumentCategory
                                                                                        and $projection.PurgDocFollowOnDocumentType = _FollowOnDocumentType.PurchasingDocumentType

  association [0..1] to I_PurchasingDocumentCategory   as _FollowOnDocumentCategory     on  $projection.FollowOnDocumentCategory = _FollowOnDocumentCategory.PurchasingDocumentCategory

  //association [0..1] to I_CentralSupplierQuotationType as _CentralSupplierQuotationType on  $projection.PurchasingDocumentType = _CentralSupplierQuotationType.SuplrQtnType

  association [1..1] to I_CentralRequestForQuotation   as _CentralRequestForQuotation   on  $projection.CentralRequestForQuotation = _CentralRequestForQuotation.CentralRequestForQuotation

  //association [0..1] to I_QtnLifecycleStatus           as _QtnLifecycleStatus           on  $projection.QtnLifecycleStatus = _QtnLifecycleStatus.QtnLifecycleStatus

{
  key R_CentralSupplierQuotation.CentralSupplierQuotation,

      @ObjectModel: { foreignKey.association: '_CompanyCode' }
      R_CentralSupplierQuotation.CompanyCode,

      @ObjectModel: { foreignKey.association: '_PurchasingDocumentCategory' }
      R_CentralSupplierQuotation.PurchasingDocumentCategory,

      //@ObjectModel: { foreignKey.association: '_CentralSupplierQuotationType' }
      R_CentralSupplierQuotation.PurchasingDocumentType,

      @ObjectModel: { foreignKey.association: '_Supplier' }
      R_CentralSupplierQuotation.Supplier,
      R_CentralSupplierQuotation.CreatedByUser,
      R_CentralSupplierQuotation.CreationDate,
      R_CentralSupplierQuotation.LastChangeDateTime,
      R_CentralSupplierQuotation.Language,

      @Semantics.currencyCode: true
      @ObjectModel: { foreignKey.association: '_DocumentCurrency'}
      R_CentralSupplierQuotation.DocumentCurrency,
      R_CentralSupplierQuotation.IncotermsClassification,
      R_CentralSupplierQuotation.IncotermsTransferLocation,
      R_CentralSupplierQuotation.IncotermsVersion,
      R_CentralSupplierQuotation.IncotermsLocation1,
      R_CentralSupplierQuotation.IncotermsLocation2,
      R_CentralSupplierQuotation.PaymentTerms,
      R_CentralSupplierQuotation.CashDiscount1Days,
      R_CentralSupplierQuotation.CashDiscount2Days,
      R_CentralSupplierQuotation.CashDiscount1Percent,
      R_CentralSupplierQuotation.CashDiscount2Percent,
      R_CentralSupplierQuotation.NetPaymentDays,

      @ObjectModel: {  foreignKey.association: '_PricingProcedure'}
      R_CentralSupplierQuotation.PricingProcedure,
      R_CentralSupplierQuotation.CentralSuplrQuotationCondition,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      R_CentralSupplierQuotation.PurchasingOrganization,
      R_CentralSupplierQuotation.PurchasingGroup,
      R_CentralSupplierQuotation.PurchasingDocumentOrderDate,

      @ObjectModel: { foreignKey.association: '_CentralRequestForQuotation' }
      R_CentralSupplierQuotation.CentralRequestForQuotation,
      R_CentralSupplierQuotation.SupplierQuotationExternalID,
      R_CentralSupplierQuotation.QuotationSubmissionDate,
      R_CentralSupplierQuotation.QuotationLatestSubmissionDate,
      R_CentralSupplierQuotation.BindingPeriodValidityEndDate,
      @Consumption.hidden: true
      ExchangeRate,
      ExchangeRateIsFixed,

      //@ObjectModel: {  foreignKey.association: '_QtnLifecycleStatus'}
      R_CentralSupplierQuotation.QtnLifecycleStatus,

      @ObjectModel: { foreignKey.association: '_FollowOnDocumentCategory' }
      R_CentralSupplierQuotation.FollowOnDocumentCategory,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurgDocFollowOnDocumentType'
      R_CentralSupplierQuotation.FollowOnDocumentType,

      @ObjectModel: { foreignKey.association: '_FollowOnDocumentType' }
      R_CentralSupplierQuotation.PurgDocFollowOnDocumentType,
      R_CentralSupplierQuotation.PurContrValidityStartDate,
      R_CentralSupplierQuotation.PurContrValidityEndDate,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #NONE
      R_CentralSupplierQuotation.PurchaseContractTargetAmount,
      @Semantics.booleanIndicator 
      R_CentralSupplierQuotation.IsEndOfPurposeBlocked,
      R_CentralSupplierQuotation.PurchasingDocumentDeletionCode,


      /* Associations */
      _CntrlSupplierQuotationItem,
      _PurchasingDocumentCategory,
      _CatTextInCurrentLang,
      _PurchasingDocumentType,
      //_CentralSupplierQuotationType,
      _FollowOnDocumentCategory,
      _FollowOnDocumentType,
      _CompanyCode,
      _PurchasingGroup,
      _PurchasingOrganization,
      _IncotermsClassification,
      _IncotermsVersion,
      _Supplier,
      _CentralRequestForQuotation,
      _Language,
      _CreatedByUser,
      //_QtnLifecycleStatus,
      _PricingProcedure,
      R_CentralSupplierQuotation._DocumentCurrency
}
where
  R_CentralSupplierQuotation.PurchasingDocumentCategory = 'T'
```
