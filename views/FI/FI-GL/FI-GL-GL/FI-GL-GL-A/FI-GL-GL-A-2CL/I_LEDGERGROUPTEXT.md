---
name: I_LEDGERGROUPTEXT
description: Ledgergrouptext
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
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_LEDGERGROUPTEXT

**Ledgergrouptext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LedgerGroup` | `ldgrp` |
| key `Language` | `langu` |
| `LedgerGroupName` | `name` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Ledger Group - Text'
//@Analytics: { dataExtraction.enabled: true  }
@ObjectModel.dataCategory: #TEXT 
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFILEDGERGROUPT'
@ObjectModel.representativeKey: 'LedgerGroup'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_LedgerGroupText
as
select from fagl_tldgrpt
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key ldgrp as LedgerGroup,
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language
  key langu as Language,
  
  @Semantics.text
  name as LedgerGroupName,
  
  _Language
};
```
