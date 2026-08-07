---
name: I_SECURITYCLASS
description: Securityclass
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASS

**Securityclass**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SecurityClass` | ✓ | |  |  |
| `FinancialInstrProductCategory` |  | |  |  |
| `FinancialInstrumentProductType` |  | |  |  |
| `SecurityClassName` |  | |  |  |
| `SecurityClassDescription` |  | |  |  |
| `Issuer` |  | |  |  |
| `SecurityClassIsListed` |  | |  |  |
| `SecurityClassQuotation` |  | |  |  |
| `IssueCurrency` |  | |  |  |
| `SecurityClassIsPledgeable` |  | |  |  |
| `ScrtyClassGenClassification` |  | |  |  |
| `SecurityClassTransferType` |  | |  |  |
| `SecurityClassStatus` |  | |  |  |
| `SecurityClassIssuePriceValue` |  | |  |  |
| `IssueRateInPercent` |  | |  |  |
| `ScrtyClMinimalNumberOfUnits` |  | |  |  |
| `SecurityClassCreatedByUser` |  | |  |  |
| `SecurityClassCreationDate` |  | |  |  |
| `SecurityClassCreationTime` |  | |  |  |
| `SecurityClassCreationSource` |  | |  |  |
| `SecurityClassLastChangedByUser` |  | |  |  |
| `SecurityClassLastChangedDate` |  | |  |  |
| `SecurityClassLastChangedTime` |  | |  |  |
| `SecurityClassLastChangedSource` |  | |  |  |
| `SecurityClassIssueStartDate` |  | |  |  |
| `SecurityClassNomPerStockValue` |  | |  |  |
| `SecurityClassStockCategory` |  | |  |  |
| `SecurityClassStockForm` |  | |  |  |
| `SecurityClassFundType` |  | |  |  |
| `SecurityClassFundCategory` |  | |  |  |
| `SecurityClassFundVolumeAmount` |  | |  |  |
| `ScrtyClIssuePremiumInPercent` |  | |  |  |
| `SecurityClassTaxClassification` |  | |  |  |
| `BondClassification` |  | |  |  |
| `BondCertificateNominalAmount` |  | |  |  |
| `BondCertPerTrdgUnitNominalAmt` |  | |  |  |
| `SecurityClassFinalDueDate` |  | |  |  |
| `ScrtyClCalcPeriodStartDate` |  | |  |  |
| `ScrtyClCompatibleTermEndDate` |  | |  |  |
| `ScrtyClExpectedTermEndDate` |  | |  |  |
| `ScrtyClIsCalcdWthNomPerTrdgUnt` |  | |  |  |
| `ScrtyClTrancheClassification` |  | |  |  |
| `SecurityClassAssetPool` |  | |  |  |
| `IntrstCalcFnlDuDteIsIncld` |  | |  |  |
| `SecurityClassShareholdingType` |  | |  |  |
| `ScrtyClShareholdingStructure` |  | |  |  |
| `_SecurityClassBond` | | ✓ | | |
| `_SecurityClassStock` | | ✓ | | |
| `_SecurityClassLstdDerivative` | | ✓ | | |
| `_SecurityClassIssuer` | | ✓ | | |
| `_SecurityClassQuotation` | | ✓ | | |
| `_SecurityClassTransferType` | | ✓ | | |
| `_SecurityClassGenClassfctn` | | ✓ | | |
| `_FinancialInstrProductType` | | ✓ | | |
| `_FinancialInstrProdCat` | | ✓ | | |
| `_SecurityClRgtyRptgHeader` | | ✓ | | |
| `_SecurityClassConditionHeader` | | ✓ | | |
| `_SecurityClassPayInPriceRate` | | ✓ | | |
| `_SecurityClassCondition` | | ✓ | | |
| `_SecuritySwap` | | ✓ | | |
| `_SecurityClassSecondaryIndex` | | ✓ | | |
| `_TreasurySPPISecurity` | | ✓ | | |
| `_SecurityClassRating` | | ✓ | | |
| `_SecurityClassExchange` | | ✓ | | |
| `_SecurityClassAssetPool` | | ✓ | | |
| `_InstlmntBondPrtnAssignment` | | ✓ | | |
| `_BondRedemptionSchedule` | | ✓ | | |
| `_ScrtyClSubscrpnPeriod` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClassBond` | `I_SecurityClassBond` | [0..1] |
| `_SecurityClassStock` | `I_SecurityClassStock` | [0..1] |
| `_SecurityClassLstdDerivative` | `I_SecurityClassLstdDerivative` | [0..1] |
| `_SecurityClassIssuer` | `I_BusinessPartner` | [0..1] |
| `_SecurityClassQuotation` | `I_SecurityClassQuotation` | [0..1] |
| `_SecurityClassTransferType` | `I_SecurityClassTransferType` | [0..1] |
| `_SecurityClassGenClassfctn` | `I_SecurityClassGenClassfctn` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_SecurityClRgtyRptgHeader` | `I_SecurityClRgtyRptgHeader` | [1..1] |
| `_SecurityClassConditionHeader` | `I_SecurityClassConditionHeader` | [1..1] |
| `_SecurityClassPayInPriceRate` | `I_SecurityClassPayInPriceRate` | [0..*] |
| `_SecurityClassCondition` | `I_SecurityClassCondition` | [0..*] |
| `_SecuritySwap` | `I_SecuritySwap` | [0..*] |
| `_SecurityClassSecondaryIndex` | `I_SecurityClassSecondaryIndex` | [0..*] |
| `_TreasurySPPISecurity` | `I_TreasurySPPISecurity` | [0..*] |
| `_SecurityClassRating` | `I_SecuritiesClassRating` | [0..*] |
| `_SecurityClassExchange` | `I_SecurityClassExchange` | [0..*] |
| `_SecurityClassAssetPool` | `I_SecurityClassAssetPool` | [0..1] |
| `_InstlmntBondPrtnAssignment` | `I_InstlmntBondPrtnAssignment` | [0..*] |
| `_BondRedemptionSchedule` | `I_BondRedemptionSchedule` | [0..*] |
| `_ScrtyClSubscrpnPeriod` | `I_ScrtyClSubscrpnPeriod` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check
@AbapCatalog.sqlViewName: 'ISECURITYCLASS'
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Class'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityClass'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecurityClass'
// Do not use I_SecurityClassN anymore!!!

define view I_SecurityClass

  as select from P_SecurityClassAll as SecurityClass

  association [0..1] to I_SecurityClassBond            as _SecurityClassBond            on $projection.SecurityClass = _SecurityClassBond.SecurityClass
  association [0..1] to I_SecurityClassStock           as _SecurityClassStock           on $projection.SecurityClass = _SecurityClassStock.SecurityClass
  association [0..1] to I_SecurityClassLstdDerivative  as _SecurityClassLstdDerivative  on $projection.SecurityClass = _SecurityClassLstdDerivative.SecurityClass

  association [0..1] to I_BusinessPartner              as _SecurityClassIssuer          on $projection.Issuer = _SecurityClassIssuer.BusinessPartner
  association [0..1] to I_SecurityClassQuotation       as _SecurityClassQuotation       on $projection.SecurityClassQuotation = _SecurityClassQuotation.SecurityClassQuotation
  association [0..1] to I_SecurityClassTransferType    as _SecurityClassTransferType    on $projection.SecurityClassTransferType = _SecurityClassTransferType.SecurityClassTransferType
  association [0..1] to I_SecurityClassGenClassfctn    as _SecurityClassGenClassfctn    on $projection.ScrtyClassGenClassification = _SecurityClassGenClassfctn.ScrtyClassGenClassification

  association        to I_FinancialinstrProductType    as _FinancialInstrProductType    on $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association        to I_FinancialInstrProdCat        as _FinancialInstrProdCat        on $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory

  association [1..1] to I_SecurityClRgtyRptgHeader     as _SecurityClRgtyRptgHeader     on $projection.SecurityClass = _SecurityClRgtyRptgHeader.SecurityClass
  association [1..1] to I_SecurityClassConditionHeader as _SecurityClassConditionHeader on $projection.SecurityClass = _SecurityClassConditionHeader.SecurityClass
  association [0..*] to I_SecurityClassPayInPriceRate  as _SecurityClassPayInPriceRate  on $projection.SecurityClass = _SecurityClassPayInPriceRate.SecurityClass
  association [0..*] to I_SecurityClassCondition       as _SecurityClassCondition       on $projection.SecurityClass = _SecurityClassCondition.SecurityClass
  association [0..*] to I_SecuritySwap                 as _SecuritySwap                 on $projection.SecurityClass = _SecuritySwap.ScrtyClSwapOldSecurityClass

  association [0..*] to I_SecurityClassSecondaryIndex  as _SecurityClassSecondaryIndex  on $projection.SecurityClass = _SecurityClassSecondaryIndex.SecurityClass
  association [0..*] to I_TreasurySPPISecurity         as _TreasurySPPISecurity         on $projection.SecurityClass = _TreasurySPPISecurity.SecurityClass
  association [0..*] to I_SecuritiesClassRating        as _SecurityClassRating          on $projection.SecurityClass = _SecurityClassRating.SecurityClass
  association [0..*] to I_SecurityClassExchange        as _SecurityClassExchange        on $projection.SecurityClass = _SecurityClassExchange.SecurityClass

  association [0..1] to I_SecurityClassAssetPool       as _SecurityClassAssetPool       on $projection.SecurityClassAssetPool = _SecurityClassAssetPool.SecurityClassAssetPool
  association [0..*] to I_InstlmntBondPrtnAssignment   as _InstlmntBondPrtnAssignment   on $projection.SecurityClass = _InstlmntBondPrtnAssignment.SecurityClass
  association [0..*] to I_BondRedemptionSchedule       as _BondRedemptionSchedule       on $projection.SecurityClass = _BondRedemptionSchedule.SecurityClass
  association [0..*] to I_ScrtyClSubscrpnPeriod        as _ScrtyClSubscrpnPeriod        on $projection.SecurityClass = _ScrtyClSubscrpnPeriod.SubscriptionRightSecurityClass

{
       @ObjectModel.text.element:  [ 'SecurityClassName' ]
  key  SecurityClass,
       FinancialInstrProductCategory,
       FinancialInstrumentProductType,
       @Semantics.text: true
       SecurityClassName,
       @Semantics.text: true
       SecurityClassDescription,
       Issuer,
       SecurityClassIsListed,
       SecurityClassQuotation,
       //Additional table fields for TPM12
       IssueCurrency,
       SecurityClassIsPledgeable,
       ScrtyClassGenClassification,
       SecurityClassTransferType,

       //Newly added
       SecurityClassStatus,
       SecurityClassIssuePriceValue,
       IssueRateInPercent,
       ScrtyClMinimalNumberOfUnits,
       SecurityClassCreatedByUser,
       SecurityClassCreationDate,
       SecurityClassCreationTime,
       SecurityClassCreationSource,
       SecurityClassLastChangedByUser,
       SecurityClassLastChangedDate,
       SecurityClassLastChangedTime,
       SecurityClassLastChangedSource,

       SecurityClassIssueStartDate,

       SecurityClassNomPerStockValue,
       SecurityClassStockCategory,
       SecurityClassStockForm,
       SecurityClassFundType,
       SecurityClassFundCategory,
       @Semantics.amount.currencyCode: 'IssueCurrency'
       SecurityClassFundVolumeAmount,
       ScrtyClIssuePremiumInPercent,
       SecurityClassTaxClassification,

       BondClassification,
       @Semantics.amount.currencyCode: 'IssueCurrency'
       BondCertificateNominalAmount,
       @Semantics.amount.currencyCode: 'IssueCurrency'
       BondCertPerTrdgUnitNominalAmt,
       SecurityClassFinalDueDate,
       ScrtyClCalcPeriodStartDate,
       ScrtyClCompatibleTermEndDate,
       ScrtyClExpectedTermEndDate,
       ScrtyClIsCalcdWthNomPerTrdgUnt,
       ScrtyClTrancheClassification,
       SecurityClassAssetPool,

       IntrstCalcFnlDuDteIsIncld,
       SecurityClassShareholdingType,
       ScrtyClShareholdingStructure,

       //       _SecurityClassStock.SecurityClassStockCategory,
       //       _SecurityClassStockCategory._Text[1: Language=$session.system_language].SecurityClassStockCategoryName,
       //
       //       SecurityClassQuotation,
       //       _SecurityClassQuotation._Text[1: Language=$session.system_language].SecurityClassQuotationName,
       //
       //       //Additional table fields for TPM12
       //       IssueCurrency,
       //       SecurityClassIsPledgeable,
       //       ScrtyClassGenClassification,
       //       SecurityClassTransferType,
       //       _SecurityClassBond.BondClassification,
       //       ListedDerivativeCategory,
       //       OptionPutCallCode,
       //       _ListedDerivativeCategory._Text[1: Language=$session.system_language].ListedDerivativeCategoryName,
       //       _OptionPutCallCode._Text[1: Language=$session.system_language].OptionPutCallCodeName,
       //
       //       _BondClassificationText.BondClassificationName,
       //       _SecurityClassTransferTypeText.SecurityClassTransferTypeName,
       //       _ScrtyClassGenClassfctnText.ScrtyClassGenClassfctnName,

       _SecurityClassBond,
       _SecurityClassStock,
       _SecurityClassLstdDerivative,
       _SecurityClassIssuer,
       _FinancialInstrProductType,
       _FinancialInstrProdCat,
       _SecurityClassQuotation,
       _SecurityClassTransferType,
       _SecurityClassGenClassfctn,

       //Newly added
       _SecurityClRgtyRptgHeader,
       _SecurityClassConditionHeader,
       _SecurityClassPayInPriceRate,
       _SecurityClassCondition,
       _SecuritySwap,

       _SecurityClassSecondaryIndex,
       _TreasurySPPISecurity,
       _SecurityClassRating,
       _SecurityClassExchange,

       _SecurityClassAssetPool,
       _InstlmntBondPrtnAssignment,
       _BondRedemptionSchedule,
       _ScrtyClSubscrpnPeriod
}
```
