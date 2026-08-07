---
name: I_COMPANYCODE
description: Company Code
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
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODE

**Company Code**

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
| `CityName` |  | |  | `ort01` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `FiscalYearVariant` |  | |  | `periv` |  |  |
| `Company` |  | |  | `rcomp` |  |  |
| `CreditControlArea` |  | |  | `kkber` |  |  |
| `CountryChartOfAccounts` |  | |  | `ktop2` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `TaxableEntity` |  | |  | `umkrs` |  |  |
| `VATRegistration` |  | |  | `stceg` |  |  |
| `ExtendedWhldgTaxIsActive` |  | |  | `wt_newwt` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `FieldStatusVariant` |  | |  | `fstva` |  |  |
| `NonTaxableTransactionTaxCode` |  | |  | `mwska` |  |  |
| `DocDateIsUsedForTaxDetn` |  | |  | `xstdt` |  |  |
| `TaxRptgDateIsActive` |  | |  | `xvatdate` |  |  |
| `CashDiscountBaseAmtIsNetAmt` |  | |  | `xskfn` |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_CountryChartOfAccountsText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_OrgAddressDefaultRprstn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_FieldStatusVariant` | | ✓ | | | | |
| `_GlobalCompany` | | ✓ | | | | |
| `_CompanyCodeHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_CountryChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_Currency` | `I_Currency` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_OrgAddressDefaultRprstn` | `I_OrgAddressDefaultRprstn` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CreditControlArea` | `I_CreditControlArea` | [0..1] |
| `_FieldStatusVariant` | `I_FieldStatusVariant` | [0..1] |
| `_GlobalCompany` | `I_Globalcompany` | [0..1] |
| `_CompanyCodeHierNode` | `I_CompanyCodeHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Company Code'

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:
            [ { table: 'T001', 
                role: #MAIN,
                viewElement: ['CompanyCode'],
                tableElement: ['bukrs']
              },
              { table: 'tka02', 
                role: #LEFT_OUTER_TO_ONE_JOIN,
                viewElement: ['CompanyCode'],
                tableElement: ['bukrs']
              }
            ]
        }
    }
}

@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOMPANYCODE'
@AbapCatalog.preserveKey:true
//@AbapCatalog.compiler.compareFilter: true // Not possible as it will register as incompatible change
@ObjectModel.representativeKey: 'CompanyCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #ORGANIZATIONAL,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'CompanyCode'  }                   
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

//@Consumption.valueHelpDefinition: [ { entity: { name:'I_CompanyCodeStdVH' } }]     
//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//@AccessControl.privilegedAssociations: ['_ChartOfAccountsText','_CountryChartOfAccountsText']
// ]--GENERATED

@AccessControl.privilegedAssociations: ['_Address','_OrgAddressDefaultRprstn']

define view I_CompanyCode 
  as select from           t001
    left outer to one join tka02 on tka02.bukrs  = t001.bukrs
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..*] to I_ChartOfAccountsText      as _CountryChartOfAccountsText on   $projection.CountryChartOfAccounts = _CountryChartOfAccountsText.ChartOfAccounts
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_CreditControlAreaText      as _CreditControlAreaText on   $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea
  // ]--GENERATED
  association [0..1] to I_Currency            as _Currency               on $projection.Currency = _Currency.Currency
  association [0..1] to I_Country             as _Country                on $projection.Country = _Country.Country
  association [0..1] to I_Address             as _Address                on $projection.AddressID = _Address.AddressID
  association [0..1] to I_OrgAddressDefaultRprstn  as _OrgAddressDefaultRprstn on $projection.AddressID = _OrgAddressDefaultRprstn.AddressID
  association [0..1] to I_Language            as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_ChartOfAccounts     as _ChartOfAccounts        on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_FiscalYearVariant   as _FiscalYearVariant      on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_ChartOfAccounts     as _CountryChartOfAccounts on $projection.CountryChartOfAccounts = _CountryChartOfAccounts.ChartOfAccounts
  association [0..1] to I_ControllingArea     as _ControllingArea        on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_CreditControlArea   as _CreditControlArea      on $projection.CreditControlArea = _CreditControlArea.CreditControlArea
  association [0..1] to I_FieldStatusVariant  as _FieldStatusVariant     on $projection.FieldStatusVariant = _FieldStatusVariant.FieldStatusVariant
  association [0..1] to I_Globalcompany       as _GlobalCompany          on $projection.Company = _GlobalCompany.Company
  association [0..*] to I_CompanyCodeHierNode as _CompanyCodeHierNode    on $projection.CompanyCode = _CompanyCodeHierNode.CompanyCode
{
      @ObjectModel.text.element: ['CompanyCodeName']
      @ObjectModel.hierarchy.association: '_CompanyCodeHierNode'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]      
  key t001.bukrs    as CompanyCode,
      @Semantics.text: true
      t001.butxt    as CompanyCodeName,
      t001.ort01    as CityName,
      @ObjectModel.foreignKey.association: '_Country'
      t001.land1    as Country,
      @ObjectModel.foreignKey.association: '_Currency'
      t001.waers    as Currency,
      @ObjectModel.foreignKey.association: '_Language'
      t001.spras    as Language,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//      @Consumption.valueHelpDefinition: [ 
//        { entity:  { name:    'I_ChartOfAccountsStdVH',
//                     element: 'ChartOfAccounts' }
//        }]
//      @ObjectModel.text.association: '_ChartOfAccountsText'
//      // ]--GENERATED
//      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      t001.ktopl    as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      t001.periv    as FiscalYearVariant,
      t001.rcomp    as Company,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CreditControlAreaStdVH',
                     element: 'CreditControlArea' }
        }]
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      t001.kkber    as CreditControlArea,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//      @Consumption.valueHelpDefinition: [ 
//        { entity:  { name:    'I_ChartOfAccountsStdVH',
//                     element: 'ChartOfAccounts' }
//        }]
//      @ObjectModel.text.association: '_CountryChartOfAccountsText'
//      // ]--GENERATED
//      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      t001.ktop2    as CountryChartOfAccounts,
      t001.fikrs    as FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_OrgAddressDefaultRprstn'
      t001.adrnr    as AddressID,
      t001.umkrs    as TaxableEntity,
      t001.stceg    as VATRegistration,
      t001.wt_newwt as ExtendedWhldgTaxIsActive,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      tka02.kokrs   as ControllingArea,
      @ObjectModel.foreignKey.association: '_FieldStatusVariant'
      t001.fstva    as FieldStatusVariant,
      t001.mwska    as NonTaxableTransactionTaxCode,
      t001.xstdt    as DocDateIsUsedForTaxDetn,
      t001.xvatdate as TaxRptgDateIsActive,
      t001.xskfn as CashDiscountBaseAmtIsNetAmt,
      _Currency,
      _Country, 
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_OrgAddressDefaultRprstn'
      _Address,
      _OrgAddressDefaultRprstn,
      _Language,
      _ChartOfAccounts,
      _CountryChartOfAccounts,
      _FiscalYearVariant,
      _ControllingArea,
      _CreditControlArea,
      _FieldStatusVariant,
      _GlobalCompany,
      _CompanyCodeHierNode,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ChartOfAccountsText,
      @Consumption.hidden: true
      _CountryChartOfAccountsText,
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _CreditControlAreaText
      // ]--GENERATED

};
```
