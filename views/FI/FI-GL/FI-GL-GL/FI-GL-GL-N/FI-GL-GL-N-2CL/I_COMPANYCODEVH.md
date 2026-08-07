---
name: I_COMPANYCODEVH
description: "Company CodeVH"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODEVH

**Company CodeVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CompanyCodeName` |  | |  | `butxt` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CityName` |  | |  | `ort01` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `FiscalYearVariant` |  | |  | `periv` |  |  |
| `Company` |  | |  | `rcomp` |  |  |
| `CreditControlArea` |  | |  | `kkber` |  |  |
| `CountryChartOfAccounts` |  | |  | `cast(t001.ktop2 as fis_ktop2 preserving type)` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `_Currency` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CreditControlArea` | `I_CreditControlArea` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'CompanyCode',
                usageType.sizeCategory: #S,
                usageType.dataClass: #ORGANIZATIONAL,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Analytics.technicalName: 'IFICC__VH1'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Company Code'
define view entity I_CompanyCodeVH as select from t001  // direct select from T001 as field f_obsolete to be used in where condition
left outer to one join tka02 on tka02.bukrs = t001.bukrs
left outer to one join P_UserParameter
//  on t001.mandt = P_UserParameter.mandt 
  on P_UserParameter.UserParameter = 'F_SHOW_OBSOLETE_T001'
  
//  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
//  association [0..*] to I_ChartOfAccountsText      as _CountryChartOfAccountsText on   $projection.CountryChartOfAccounts = _CountryChartOfAccountsText.ChartOfAccounts
//  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
//  association [0..*] to I_CreditControlAreaText      as _CreditControlAreaText on   $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..1] to I_Currency            as _Currency               on $projection.Currency = _Currency.Currency
  association [0..1] to I_Country             as _Country                on $projection.Country = _Country.Country
//  association [0..1] to I_Address             as _Address                on $projection.addressid = _Address.AddressID
  association [0..1] to I_Language            as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_ChartOfAccounts     as _ChartOfAccounts        on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_FiscalYearVariant   as _FiscalYearVariant      on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_ChartOfAccounts     as _CountryChartOfAccounts on $projection.CountryChartOfAccounts = _CountryChartOfAccounts.ChartOfAccounts
  association [0..1] to I_ControllingArea     as _ControllingArea        on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_CreditControlArea   as _CreditControlArea      on $projection.CreditControlArea = _CreditControlArea.CreditControlArea
//  association [0..1] to I_FieldStatusVariant  as _FieldStatusVariant     on $projection.fieldstatusvariant = _FieldStatusVariant.FieldStatusVariant
//  association [0..1] to I_Globalcompany       as _GlobalCompany          on $projection.Company = _GlobalCompany.Company
//  association [0..*] to I_CompanyCodeHierNode as _CompanyCodeHierNode    on $projection.CompanyCode = _CompanyCodeHierNode.CompanyCode  
 {
  @ObjectModel.text.element: ['CompanyCodeName']
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key t001.bukrs    as CompanyCode,
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @Search.fuzzinessThreshold: 0.8  
  t001.butxt    as CompanyCodeName,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_ControllingAreaStdVH', element: 'ControllingArea' }
                                        }]
  @Search: { defaultSearchElement: true, ranking: #LOW }
  tka02.kokrs   as ControllingArea,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  t001.ort01    as CityName,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @ObjectModel.foreignKey.association: '_Country'
  t001.land1    as Country,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @ObjectModel.foreignKey.association: '_Currency'
  t001.waers    as Currency,
  @ObjectModel.foreignKey.association: '_Language'
  t001.spras    as Language,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  t001.ktopl    as ChartOfAccounts,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  t001.periv    as FiscalYearVariant,
  @Search: { defaultSearchElement: true, ranking: #LOW }
  t001.rcomp    as Company,
  @ObjectModel.foreignKey.association: '_CreditControlArea'
  t001.kkber    as CreditControlArea,
  @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
  cast(t001.ktop2   as fis_ktop2 preserving type) as CountryChartOfAccounts,
  t001.fikrs    as FinancialManagementArea,
 
  @Consumption.hidden: true 
  _ControllingArea,
  @Consumption.hidden: true  
  _Country,
  @Consumption.hidden: true
  _Currency,
  @Consumption.hidden: true
  _Language,
  @Consumption.hidden: true
  _ChartOfAccounts,
  @Consumption.hidden: true
  _FiscalYearVariant,
  @Consumption.hidden: true
  _CreditControlArea,
  @Consumption.hidden: true
  _CountryChartOfAccounts
  
} where P_UserParameter.UserParameterValue = 'X' or t001.f_obsolete <> 'X'
```
