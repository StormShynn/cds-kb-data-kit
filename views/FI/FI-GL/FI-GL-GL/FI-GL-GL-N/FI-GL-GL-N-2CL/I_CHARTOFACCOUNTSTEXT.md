---
name: I_CHARTOFACCOUNTSTEXT
description: Chartofaccountstext
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
  - text-view
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_CHARTOFACCOUNTSTEXT

**Chartofaccountstext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` |
| `Language` | ✓ | |  | `spras` |
| `ChartOfAccountsName` |  | |  | `ktplt` |
| `_ChartOfAccountsText` | | ✓ | | |
| `_ChartOfAccounts` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Chart Of Accounts - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ChartOfAccounts'
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICHOFACCT'
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
@Search.searchable: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
// ]--GENERATED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_ChartOfAccountsText as select from t004t
  
  
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association[0..1]    to I_ChartOfAccounts      as _ChartOfAccounts    on $projection.ChartOfAccounts   = _ChartOfAccounts.ChartOfAccounts
  association[0..1]    to I_Language             as _Language           on $projection.Language          = _Language.Language

{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ktopl as ChartOfAccounts,

  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language
  key spras as Language,

  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW  
  @EndUserText.label: 'Chart of Accounts Description'
  ktplt as ChartOfAccountsName,

  _ChartOfAccounts,  
  _Language,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ChartOfAccountsText
      // ]--GENERATED

};
```
