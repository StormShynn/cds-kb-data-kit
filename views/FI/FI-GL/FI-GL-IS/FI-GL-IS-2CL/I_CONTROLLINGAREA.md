---
name: I_CONTROLLINGAREA
description: "Controllingarea"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGAREA

**Controllingarea**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( tka01.kokrs as fis_kokrs preserving type )` |  |  |
| `FiscalYearVariant` |  | |  | `cast( tka01.lmona as fis_periv preserving type )` |  |  |
| `ControllingAreaName` |  | |  | `cast( tka01.bezei as fis_kokrs_name preserving type )` |  |  |
| `ControllingAreaCurrency` |  | |  | `cast( tka01.waers as fis_kwaer preserving type )` |  |  |
| `ChartOfAccounts` |  | |  | `cast( tka01.ktopl as fis_ktopl preserving type )` |  |  |
| `CostCenterStandardHierarchy` |  | |  | `cast( tka01.khinr as fis_ksthi preserving type )` |  |  |
| `OperatingConcern` |  | |  | `erkrs` |  |  |
| `ProfitCenterStandardHierarchy` |  | |  | `cast( tka01.phinr as fis_prctr_std_hier preserving type )` |  |  |
| `BusinessProcessStandardHier` |  | |  | `cast( tka01.bphinr as fis_co_bphinr preserving type )` |  |  |
| `CreditDownPaymentDefaultGLAcct` |  | |  | `cast( tka01.kstar_fin as fis_kstar_fin preserving type )` |  |  |
| `DebitDownPaymentDefaultGLAcct` |  | |  | `cast( tka01.kstar_fid as fis_kstar_fid preserving type )` |  |  |
| `ControllingAreaCurrencyRole` |  | |  | `cast( tka01.ctyp as fis_co_ctyp preserving type )` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `ControllingAreaResponsibleUser` |  | |  | `cast( tka01.vname as fis_co_vname preserving type )` |  |  |
| `DefaultProfitCenter` |  | |  | `cast( tka01.defprctr as fis_defprctr preserving type )` |  |  |
| `CtrlgStdFinStatementVersion` |  | |  | `cast( tka01.leading_fsv as fis_leading_fsv preserving type )` |  |  |
| `ProfitCenterAccountingCurrency` |  | |  | `case tka01.pcacurtp when '20' then cast( tka01.waers as fis_pcacur preserving type ) when '30' then cast( I_SAPClient.GroupCurrency as fis_pcacur preserving type ) else cast( tka01.pcacur as fis_pcacur preserving type ) end` |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_FinancialStatementVersion` | | ✓ | | | | |
| `_FinancialStatementVersionText` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_FinancialStatementVersion` | `I_FinancialStatementHier` | [0..*] |
| `_FinancialStatementVersionText` | `I_FinancialStatementHierT` | [0..*] |
| `_Currency` | `I_Currency` | [1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |

## Source Code

```abap
@EndUserText.label: 'Controlling Area'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Analytics.technicalName: 'IFICONTAREA'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ControllingArea'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ControllingArea'

@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}

@Search.searchable: true

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
// ]--GENERATED

define view entity I_ControllingArea
  as select from    tka01
    cross join I_SAPClient as I_SAPClient //on tka01.mandt = I_SAPClient.sapclient


  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_ChartOfAccountsText    as _ChartOfAccountsText       on $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association [0..*] to I_FinancialStatementHier as _FinancialStatementVersion on $projection.CtrlgStdFinStatementVersion = _FinancialStatementVersion.FinancialStatementHierarchy
  association [0..*] to I_FinancialStatementHierT as _FinancialStatementVersionText  on $projection.CtrlgStdFinStatementVersion = _FinancialStatementVersionText.FinancialStatementHierarchy
  
  association [1]    to I_Currency               as _Currency                  on $projection.ControllingAreaCurrency = _Currency.Currency
  association [1]    to I_ChartOfAccounts        as _ChartOfAccounts           on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

{

      @Search.defaultSearchElement: true
      @ObjectModel.text.element: ['ControllingAreaName']
  key cast( tka01.kokrs as fis_kokrs preserving type )              as ControllingArea,
      cast( tka01.lmona as fis_periv preserving type )              as FiscalYearVariant,
      @Semantics.text: true
      cast( tka01.bezei as fis_kokrs_name preserving type )         as ControllingAreaName,
      @ObjectModel.foreignKey.association: '_Currency'
      cast( tka01.waers as fis_kwaer preserving type )              as ControllingAreaCurrency,
      _Currency,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( tka01.ktopl as fis_ktopl preserving type )              as ChartOfAccounts,
      _ChartOfAccounts,
      cast( tka01.khinr as fis_ksthi preserving type )              as CostCenterStandardHierarchy,
      tka01.erkrs                                                   as OperatingConcern,
      cast( tka01.phinr as fis_prctr_std_hier preserving type )     as ProfitCenterStandardHierarchy,
      cast( tka01.bphinr as fis_co_bphinr preserving type )         as BusinessProcessStandardHier,
      cast( tka01.kstar_fin as fis_kstar_fin preserving type )      as CreditDownPaymentDefaultGLAcct,
      cast( tka01.kstar_fid as fis_kstar_fid preserving type )      as DebitDownPaymentDefaultGLAcct,
      cast( tka01.ctyp as fis_co_ctyp preserving type )             as ControllingAreaCurrencyRole,
      tka01.fikrs                                                   as FinancialManagementArea,
      cast( tka01.vname as fis_co_vname preserving type )           as ControllingAreaResponsibleUser,
      cast( tka01.defprctr as fis_defprctr preserving type )        as DefaultProfitCenter,
      @ObjectModel.text.association: '_FinancialStatementVersionText'
      @ObjectModel.foreignKey.association: '_FinancialStatementVersion'
      cast( tka01.leading_fsv as fis_leading_fsv preserving type )  as CtrlgStdFinStatementVersion,
      @Consumption.filter.businessDate.at: true
      _FinancialStatementVersion,
      @Consumption.filter.businessDate.at: true
      _FinancialStatementVersionText,
      //tka01.xwbuk as CoCodeCrcyIsDifferent,

      //t000.mwaer as PCACUR30,
      //tka01.pcacur as PCACUR90,
      //tka01.waers as PCACUR20,
      //tka01.pcacurtp as CurrencyRole

      case
      tka01.pcacurtp
      when '20' then
        cast( tka01.waers as fis_pcacur preserving type )
      when '30' then
        cast( I_SAPClient.GroupCurrency as fis_pcacur preserving type )
      else
        cast( tka01.pcacur as fis_pcacur preserving type )
      end                                                        as ProfitCenterAccountingCurrency,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ChartOfAccountsText
      // ]--GENERATED


};
```
