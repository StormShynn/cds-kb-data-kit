---
name: I_GLACCOUNTTEXT
description: GL AccountTEXT
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
  - gl-account
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTTEXT

**GL AccountTEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` |  |  |
| `GLAccount` | ✓ | |  | `saknr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `GLAccountName` |  | |  | `cast( txt20 as fis_txt20_skat_20 preserving type )` |  |  |
| `GLAccountLongName` |  | |  | `cast( txt50 as fis_txt50_skat preserving type )` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_ts` |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'General Ledger Account - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIGLACCOUNTT'
@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.representativeKey: 'GLAccount'
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
//@AbapCatalog.buffering.status: #ACTIVE
//@AbapCatalog.buffering.type: #FULL
//@AbapCatalog.buffering.numberOfKeyFields: 1
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
// ]--GENERATED
@AbapCatalog.preserveKey:true
@Search.searchable: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_GLAccountText
  as select from skat //P_GLAcctInDefaultLanguageText

  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
  association [0..*] to I_ChartOfAccountsText as _ChartOfAccountsText on $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language

  association [0..1] to I_ChartOfAccounts     as _ChartOfAccounts     on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

{
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ChartOfAccounts' //Inserted by VDM CDS Suite Plugin
  key ktopl           as ChartOfAccounts,
      @ObjectModel.text.element: 'GLAccountLongName'
  key saknr           as GLAccount,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key spras           as Language, //as Language
      @Semantics.text: true
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      cast( txt20 as fis_txt20_skat_20 preserving type ) as GLAccountName,
      @Semantics.text: true
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      cast( txt50 as fis_txt50_skat preserving type ) as GLAccountLongName,

      last_changed_ts as LastChangeDateTime,

      _Language,
      _ChartOfAccounts,
      
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.hidden: true
      _ChartOfAccountsText
      // ]--GENERATED

}
```
