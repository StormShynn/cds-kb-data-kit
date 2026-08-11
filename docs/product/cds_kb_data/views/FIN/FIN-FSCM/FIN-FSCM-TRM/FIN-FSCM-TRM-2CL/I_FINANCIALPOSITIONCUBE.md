---
name: I_FINANCIALPOSITIONCUBE
description: "This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?"
semantic_vi: "Financial Status - Cube — CDS view giao diện dựa trên P_FinancialPositionCubeGrpBy."
keywords:
  - "financial"
  - "status"
  - "cube"
  - "position"
  - "group"
  - "data"
  - "source"
  - "asset"
  - "liability"
  - "code"
  - "company"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_FINANCIALPOSITIONCUBE

**This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPosition` | ✓ | |  |  | `CHAR(20)` | Financial Position |
| `FinancialPositionGroup` | ✓ | |  |  | `CHAR(20)` | Financial Position Group |
| `FinancialPositionDataSource` | ✓ | |  |  | `CHAR(35)` | Data Source |
| `FinPositionAssetLiabilityCode` | ✓ | |  |  | `CHAR(1)` | Assets or Liabilities |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `HouseBank` | ✓ | |  |  | `CHAR(5)` | House Bank Key |
| `BusinessArea` | ✓ | |  |  | `CHAR(4)` | Business Area |
| `Issuer` | ✓ | |  |  | `CHAR(10)` | Issuer Identity Key |
| `Counterparty` | ✓ | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` | ✓ | |  |  | `CHAR(3)` | Product Type |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrTransactionType` | ✓ | |  |  | `CHAR(3)` | Financial Transaction Type |
| `TreasuryValuationClass` | ✓ | |  |  | `NUMC(4)` | Valuation Class |
| `SecurityAccount` | ✓ | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` | ✓ | |  |  | `CHAR(13)` | Security Class |
| `TreasuryPositionAccount` | ✓ | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryValuationArea` | ✓ | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentType` | ✓ | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `NominalCurrency` | ✓ | |  |  | `CUKY(5)` | Transaction Currency |
| `TransactionCurrency` | ✓ | |  |  | `CUKY(5)` | Transaction Currency |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(23)` |  |
| `BookValueAmtInPositionCurrency` |  | |  |  | `CURR(23)` |  |
| `CommitmentBusinessPartner` |  | |  |  | `CHAR(10)` | Partner with Whom Commitment Exists |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CompanyCodeIsTreasuryCenter` |  | | `_TreasuryCompanyCodeSetting` | `CompanyCodeIsTreasuryCenter` | `CHAR(1)` | Treasury Center Indicator |
| `TreasuryCenterSortSequenceVal` |  | | `_TreasuryCompanyCodeSetting` | `TreasuryCenterSortSequenceVal` | `INT2(5)` | Treasury Center Ranking |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `_CompanyCode` | | ✓ | | | | |
| `_TrsyFinStsCountryGeoPoint` | | ✓ | | | | |
| `_TreasuryCompanyCodeSetting` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_TreasuryValuationClass` | | ✓ | | | | |
| `_TreasuryValuationArea` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Issuer` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_CommitmentBusinessPartner` | | ✓ | | | | |
| `_TransactionType` | | ✓ | | | | |
| `_TreasuryPositionAccount` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_FinancialPosition` | | ✓ | | | | |
| `_FinancialPositionGroup` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_TrsyFinStsCountryGeoPoint` | `I_TrsyFinStsCountryGeoPoint` | [0..1] |
| `_TreasuryCompanyCodeSetting` | `I_TreasuryCompanyCodeSetting` | [1..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_ProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_TreasuryValuationClass` | `I_TreasuryValuationClass` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_Issuer` | `I_BusinessPartner` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [0..1] |
| `_CommitmentBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_TransactionType` | `I_FinancialInstrTransType` | [0..1] |
| `_TreasuryPositionAccount` | `I_TreasuryPositionAccount` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_FinancialPosition` | `I_FinancialPosition` | [0..1] |
| `_FinancialPositionGroup` | `I_FinancialPositionGroup` | [0..1] |
| `_GLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_HouseBank` | `I_HouseBankBasic` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value)*

```abap
@Metadata.allowExtensions:true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@AccessControl.authorizationCheck: #CHECK
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations:true 

--@OData.publish: true
@EndUserText.label: 'Financial Status - Cube'
define view entity I_FinancialPositionCube
  with parameters
//    @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: true }
    P_KeyDate           : vdm_v_key_date


  as select from P_FinancialPositionCubeGrpBy( P_KeyDate: $parameters.P_KeyDate )
  association [0..1] to I_CompanyCode               as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_TrsyFinStsCountryGeoPoint as _TrsyFinStsCountryGeoPoint   on  $projection.country = _TrsyFinStsCountryGeoPoint.Country
  association [1..1] to I_TreasuryCompanyCodeSetting as _TreasuryCompanyCodeSetting on  $projection.CompanyCode = _TreasuryCompanyCodeSetting.CompanyCode
  association [0..1] to I_SecurityAccount           as _SecurityAccount         on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                                and $projection.CompanyCode     = _SecurityAccount.CompanyCode
  association [0..1] to I_SecurityClass             as _SecurityClass           on  $projection.SecurityClass = _SecurityClass.SecurityClass
  association [0..1] to I_FinancialinstrProductType as _ProductType             on  $projection.FinancialInstrumentProductType = _ProductType.FinancialInstrumentProductType
  association [0..1] to I_Currency                  as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency
//  association [0..1] to I_Currency                  as _ReportingCurrency       on  $projection.reportingcurrency = _ReportingCurrency.Currency
  association [0..1] to I_TreasuryValuationClass    as _TreasuryValuationClass  on  $projection.TreasuryValuationClass = _TreasuryValuationClass.TreasuryValuationClass
                                                                                and $projection.TreasuryValuationArea  = _TreasuryValuationClass.TreasuryValuationArea
  association [0..1] to I_TreasuryValuationArea     as _TreasuryValuationArea   on  $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea
  association [0..1] to I_Ledger                    as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_BusinessPartner           as _Issuer         on  $projection.Issuer = _Issuer.BusinessPartner
  association [0..1] to I_BusinessPartner           as _Counterparty   on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [0..1] to I_BusinessPartner           as _CommitmentBusinessPartner on  $projection.CommitmentBusinessPartner = _CommitmentBusinessPartner.BusinessPartner 
 
  association [0..1] to I_FinancialInstrTransType   as _TransactionType         on  $projection.FinancialInstrumentProductType = _TransactionType.FinancialInstrumentProductType
                                                                                and $projection.FinancialInstrTransactionType  = _TransactionType.FinancialInstrTransactionType
  association [0..1] to I_TreasuryPositionAccount   as _TreasuryPositionAccount on  $projection.CompanyCode             = _TreasuryPositionAccount.CompanyCode
                                                                                and $projection.TreasuryPositionAccount = _TreasuryPositionAccount.TreasuryPositionAccount
  association [0..1] to I_BusinessArea              as _BusinessArea            on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_TreasuryPortfolio         as _Portfolio       on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                and $projection.Portfolio   = _Portfolio.Portfolio 
  association [0..1] to I_FinancialPosition         as _FinancialPosition       on  $projection.FinancialPosition = _FinancialPosition.FinancialPosition
  association [0..1] to I_FinancialPositionGroup    as _FinancialPositionGroup  on  $projection.FinancialPositionGroup = _FinancialPositionGroup.FinancialPositionGroup
  association [0..1] to I_GLAccountInCompanyCode    as _GLAccount               on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_HouseBankBasic                 as _HouseBank               on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                                and $projection.HouseBank   = _HouseBank.HouseBank
  /* // not C1 released and not used
  association [0..1] to I_HouseBankAccount          as _HouseBankAccount        on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                                and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                                and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount*/
  association [0..1] to I_AccountingDocumentType    as _AccountingDocumentType  on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType


{  
  @ObjectModel.foreignKey.association: '_FinancialPosition'
  key FinancialPosition,
  @ObjectModel.foreignKey.association: '_FinancialPositionGroup'
  key FinancialPositionGroup,
  key FinancialPositionDataSource,
  key FinPositionAssetLiabilityCode,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  @ObjectModel.foreignKey.association: '_GLAccount'
  key GLAccount,
  @ObjectModel.foreignKey.association: '_HouseBank'
  key HouseBank,
  /*@ObjectModel.foreignKey.association: '_HouseBankAccount'
  key */
  @ObjectModel.foreignKey.association: '_BusinessArea'
  key BusinessArea, 
  @ObjectModel.foreignKey.association: '_Issuer'
  key Issuer,
  @ObjectModel.foreignKey.association: '_Counterparty'
  key Counterparty,
  @ObjectModel.foreignKey.association: '_ProductType'
  key FinancialInstrumentProductType,
  key FinancialTransaction,
  @ObjectModel.foreignKey.association: '_TransactionType'
  key FinancialInstrTransactionType,
  @ObjectModel.foreignKey.association: '_TreasuryValuationClass'
  key TreasuryValuationClass,
  /* instead of DifferentiationPortfolio there is the combined field Portfolio
  @ObjectModel.foreignKey.association: '_Portfolio'
  key Differentiation(?)Portfolio, */
  @ObjectModel.foreignKey.association: '_SecurityAccount'
  key SecurityAccount,
  @ObjectModel.foreignKey.association: '_SecurityClass'
  key SecurityClass,
  @ObjectModel.foreignKey.association: '_TreasuryPositionAccount'
  key TreasuryPositionAccount,
  @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
  key TreasuryValuationArea,
  @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
  key FiscalYear,
  @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  key AccountingDocumentType,
  key AccountingDocument, 

  key NominalCurrency,
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  key TransactionCurrency,
 
  @Semantics.amount.currencyCode: 'NominalCurrency'
  @DefaultAggregation: #SUM
  NominalAmountInNominalCurrency,
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @DefaultAggregation: #SUM
  BookValueAmtInPositionCurrency,  
 
  @ObjectModel.foreignKey.association: '_CommitmentBusinessPartner'
  CommitmentBusinessPartner,
  
  HouseBankAccount,
  @ObjectModel.foreignKey.association: '_Portfolio'
  Portfolio,
  _TreasuryCompanyCodeSetting.CompanyCodeIsTreasuryCenter, 
  _TreasuryCompanyCodeSetting.TreasuryCenterSortSequenceVal,
  
  @ObjectModel.foreignKey.association: '_TrsyFinStsCountryGeoPoint'
  _CompanyCode.Country,

  _CompanyCode,
  _TrsyFinStsCountryGeoPoint,
  _FinancialPosition,
  _FinancialPositionGroup,
  _TreasuryValuationArea,
  _TreasuryValuationClass,
  _SecurityAccount,
  _SecurityClass,
  _ProductType,
  _Issuer,
  _Counterparty, 
  _CommitmentBusinessPartner,  
  _TreasuryPositionAccount,
  _TransactionType,
  _GLAccount,
  _BusinessArea,
  _TransactionCurrency,
  _HouseBank,
  _AccountingDocumentType,
  _Ledger,
  _TreasuryCompanyCodeSetting,
  _Portfolio
}
```
