---
name: I_GLACCOUNTGROUPTEXT
description: GL AccountGROUPTEXT
app_component: FI-GL-GL-A-2CL
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
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTGROUPTEXT

**GL AccountGROUPTEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` |  |  |
| `GLAccountGroup` | ✓ | |  | `ktoks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountGroupName` |  | |  | `txt30` |  |  |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGLACCTGRPTXT'
@EndUserText.label: 'G/L Account Group - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'GLAccountGroup'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_GLAccountGroupText
  as select from t077z
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_ChartOfAccounts as _ChartOfAccounts on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
{
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ktopl as ChartOfAccounts,
  key ktoks as GLAccountGroup,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras as Language,
      @Semantics.text: true
      txt30 as AccountGroupName,
      _Language,
      _ChartOfAccounts
}
```
