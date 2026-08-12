---
name: I_LEDGERGROUP
description: "Ledgergroup"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_LEDGERGROUP

**Ledgergroup**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LedgerGroup` | ✓ | |  | `ldgrp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LedgerGroupText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Ledger Group'
@Analytics: { 
  dataCategory: #DIMENSION
  //dataExtraction.enabled: true 
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFILEDGERGROUP'
@ObjectModel.representativeKey: 'LedgerGroup'
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
@Search.searchable: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
define view I_LedgerGroup
as select from
fagl_tldgrp
association [0..*] to I_LedgerGroupText as _Text on $projection.LedgerGroup = _Text.LedgerGroup
{
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   @ObjectModel.text.association: '_Text'
   key ldgrp as LedgerGroup,
   _Text
};
```
