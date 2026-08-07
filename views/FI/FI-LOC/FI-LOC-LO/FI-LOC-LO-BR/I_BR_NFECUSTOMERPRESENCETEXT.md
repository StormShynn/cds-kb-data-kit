---
name: I_BR_NFECUSTOMERPRESENCETEXT
description: "BR Nfecustomerpresencetext"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - customer
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Customer
---
# I_BR_NFECUSTOMERPRESENCETEXT

**BR Nfecustomerpresencetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_NFeCustomerPresence` | ✓ | |  | `cast( substring(domvalue_l, 1, 1 ) as logbr_nfe_indpres preserving type)` |  |  |
| `BR_NFeCustomerPresenceDesc` |  | |  | `cast( ddtext as logbr_nfe_indpresdescription preserving type )` |  |  |
| `_BR_NFeCustomerPresence` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeCustomerPresence` | `I_BR_NFeCustomerPresence` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Customer Presence - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFECUSTPREST'
@ObjectModel.representativeKey: 'BR_NFeCustomerPresence'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_NFeCustomerPresenceText
  as select from dd07t
  association [1..1] to I_BR_NFeCustomerPresence as _BR_NFeCustomerPresence on $projection.BR_NFeCustomerPresence = _BR_NFeCustomerPresence.BR_NFeCustomerPresence
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFeCustomerPresence'
  key cast( substring(domvalue_l, 1, 1 ) as logbr_nfe_indpres preserving type) as BR_NFeCustomerPresence,
  @Semantics.text
  cast( ddtext as logbr_nfe_indpresdescription preserving type ) as BR_NFeCustomerPresenceDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFeCustomerPresence,
  _Language
}
where domname  = 'J_1BNFE_INDPRES'
  and as4local = 'A'
```
