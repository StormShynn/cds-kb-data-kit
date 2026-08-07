---
name: I_CHARTOFACCOUNTS
description: "Chartofaccounts"
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
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_CHARTOFACCOUNTS

**Chartofaccounts**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `cast( ktopl as fis_ktopl preserving type)` |  |  |
| `CorporateGroupChartOfAccounts` |  | |  | `kktpl` |  |  |
| `ChartOfAcctsIsBlocked` |  | |  | `xsper` |  |  |
| `MaintenanceLanguage` |  | |  | `dspra` |  |  |
| `_CorpGroupChartOfAccountsText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_CorpGroupChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CorpGroupChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_Text` | `I_ChartOfAccountsText` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_CorpGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Chart Of Accounts'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICHOFACC'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'ChartOfAccounts'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_CorpGroupChartOfAccountsText']
// ]--GENERATED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ChartOfAccounts'
define view I_ChartOfAccounts as select from t004


  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_ChartOfAccountsText      as _CorpGroupChartOfAccountsText on   $projection.CorporateGroupChartOfAccounts = _CorpGroupChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association [0..*] to I_ChartOfAccountsText as _Text       on $projection.ChartOfAccounts = _Text.ChartOfAccounts
association [0..1] to I_Language            as _Language   on  $projection.MaintenanceLanguage = _Language.Language
association [0..1] to I_ChartOfAccounts     as _CorpGroupChartOfAccounts
  on $projection.CorporateGroupChartOfAccounts = _CorpGroupChartOfAccounts.ChartOfAccounts
{
  @ObjectModel.text.association: '_Text'
  key cast( ktopl as fis_ktopl preserving type) as ChartOfAccounts,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_CorpGroupChartOfAccountsText'
      // ]--GENERATED
  @ObjectModel.foreignKey.association: '_CorpGroupChartOfAccounts'
  kktpl as CorporateGroupChartOfAccounts,
  xsper as ChartOfAcctsIsBlocked,

  @ObjectModel.foreignKey.association: '_Language'  
  dspra as MaintenanceLanguage,

  _Language,
  _Text,
  _CorpGroupChartOfAccounts,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _CorpGroupChartOfAccountsText
      // ]--GENERATED

};
```
