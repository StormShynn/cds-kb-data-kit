---
name: I_GLACCOUNTTEXTRAWDATA
description: "GL AccountTEXTRAWDATA"
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
  - gl-account
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTTEXTRAWDATA

**GL AccountTEXTRAWDATA**

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
@AbapCatalog.compiler.compareFilter:true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIGLACCTTRD'
@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.representativeKey: 'GLAccount'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
// ]--GENERATED
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_GLAccountTextRawData
  as select from skat

  
  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language

  association [0..1] to I_ChartOfAccounts as _ChartOfAccounts on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

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
  key saknr           as GLAccount,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key spras           as Language,
      @Semantics.text: true
      cast( txt20 as fis_txt20_skat_20 preserving type ) as GLAccountName,
      @Semantics.text: true
      cast( txt50 as fis_txt50_skat preserving type ) as GLAccountLongName,
      last_changed_ts as LastChangeDateTime,
      _Language,
      _ChartOfAccounts,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.hidden: true
      _ChartOfAccountsText
      // ]--GENERATED

};
```
