---
name: I_TRSYFINANCIALOBJECT
description: "This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?"
app_component: FIN-FSCM-TRM-AN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value
semantic_en: "This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?"
semantic_vi: "Treasury Financial Object — CDS view giao diện dựa trên jbdobj1."
keywords:
  - "treasury"
  - "financial"
  - "object"
  - "company"
  - "code"
  - "trsy"
  - "validity"
  - "start"
  - "date"
  - "contract"
  - "type"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-AN-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-AN
  - FIN-FSCM-TRM-AN-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_TRSYFINANCIALOBJECT

**This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-AN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryFinancialObject` | ✓ | |  | `objnr` | `CHAR(22)` | Object Number for Financial Transactions |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `TrsyFinObjValidityStartDate` |  | |  | `drmbeg` | `DATS(8)` | Transaction Start for Risk Management |
| `TrsyFinObjValidityEndDate` |  | |  | `drmend` | `DATS(8)` | Transaction End for Risk Management |
| `TreasuryContractType` |  | |  | `contract_type` | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  | `product_category` | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  | `product_type` | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  | `portfolio` | `CHAR(10)` | Portfolio |
| `FinancialTransaction` |  | |  | `financial_transaction` | `CHAR(13)` | Financial Transaction |
| `SecurityClass` |  | |  | `security_id` | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  | `security_account` | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | |  | `futures_account` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | |  | `exposure_position` | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | |  | `loan_contract` | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | |  | `business_partner` | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | |  | `pos_currency` | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | |  | `characteristics` | `CHAR(25)` | Characteristics |
| `_ProductCategory` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CharacteristicCurrency` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_ProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CharacteristicCurrency` | `I_Currency` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'ITRSYFINOBJ',
                compiler.compareFilter: true,
                preserveKey:            true,
                buffering: { status:    #NOT_ALLOWED } }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED } -- omitting column Trader for DPP reasons

@Metadata.ignorePropagatedAnnotations:true

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { representativeKey: 'TreasuryFinancialObject',
                usageType.dataClass:      #TRANSACTIONAL,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #M,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ] }

@VDM.viewType: #BASIC

@EndUserText.label: 'Treasury Financial Object'

define view I_TrsyFinancialObject
  as select from jbdobj1        as FinObjBase
    inner join   ftb_i73_static as FinObjChars on FinObjChars.objnr = FinObjBase.objnr
  association [0..1] to I_FinancialInstrProdCat as _ProductCategory on  $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_CompanyCode           as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_TreasuryPortfolio     as _Portfolio       on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                    and $projection.Portfolio   = _Portfolio.Portfolio
  association [0..1] to I_TreasuryContractType  as _ContractType    on  $projection.TreasuryContractType = _ContractType.TreasuryContractType                                                                  
  association [0..1] to I_FinancialinstrProductType as _ProductType on  $projection.FinancialInstrumentProductType = _ProductType.FinancialInstrumentProductType         
  association [0..1] to I_SecurityClass         as _SecurityClass   on  $projection.SecurityClass = _SecurityClass.SecurityClass      
  association [0..1] to I_SecurityAccount       as _SecurityAccount on  $projection.CompanyCode = _SecurityAccount.CompanyCode
                                                                    and $projection.SecurityAccount = _SecurityAccount.SecurityAccount   
  association [0..1] to I_BusinessPartner       as _BusinessPartner on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner 
  association [0..1] to I_Currency              as _CharacteristicCurrency on $projection.MktRiskCharacteristicCurrency = _CharacteristicCurrency.Currency  
  association [0..1] to I_Country               as _Country         on  $projection.Country = _Country.Country                                                                                                             
{
      //FinObjBase
  key FinObjBase.objnr                  as TreasuryFinancialObject,
      FinObjBase.bukrs                  as CompanyCode,
      FinObjBase.drmbeg                 as TrsyFinObjValidityStartDate,
      FinObjBase.drmend                 as TrsyFinObjValidityEndDate,
      //FinObjChars
      FinObjChars.contract_type         as TreasuryContractType,
      FinObjChars.product_category      as FinancialInstrProductCategory,
      FinObjChars.product_type          as FinancialInstrumentProductType,
      FinObjChars.portfolio             as Portfolio,
      FinObjChars.financial_transaction as FinancialTransaction,
      FinObjChars.security_id           as SecurityClass,
      FinObjChars.security_account      as SecurityAccount,
      FinObjChars.futures_account       as TreasuryPositionAccount,
      FinObjChars.exposure_position     as FinancialExposurePosition,
      FinObjChars.loan_contract         as LoanContract,
      FinObjChars.business_partner      as BusinessPartner,
      FinObjChars.pos_currency          as MktRiskCharacteristicCurrency,
      FinObjChars.country               as Country,
      FinObjChars.characteristics       as FinancialInstrCharacteristic,
      _ProductCategory,
      _CompanyCode,
      _Portfolio,
      _ContractType,
      _ProductType,
      _SecurityClass,
      _SecurityAccount,
      _BusinessPartner,
      _CharacteristicCurrency,
      _Country
}
where
      sgstat <> '3' -- deactivated
  and sgstat <> '4' -- reversed
```
