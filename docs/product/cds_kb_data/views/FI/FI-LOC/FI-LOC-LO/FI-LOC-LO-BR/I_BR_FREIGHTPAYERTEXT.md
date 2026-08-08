---
name: I_BR_FREIGHTPAYERTEXT
description: "BR Freightpayertext"
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
  - freight
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_FREIGHTPAYERTEXT

**BR Freightpayertext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `FreightPayer` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type )` |  |  |
| `FreightPayerDesc` |  | |  | `cast(ddtext as logbr_freightmode preserving type)` |  |  |
| `_FreightPayer` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FreightPayer` | `I_BR_FreightPayer` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Freight in Nota Fiscal - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRFREIGHTPAYERT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FreightPayer'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_FreightPayerText as select from dd07t
  association [1..1] to I_BR_FreightPayer as _FreightPayer on $projection.FreightPayer = _FreightPayer.FreightPayer
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_FreightPayer'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type ) as FreightPayer,  
  @Semantics.text
  cast(ddtext as logbr_freightmode preserving type) as FreightPayerDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _FreightPayer, 
  _Language 
}
where domname = 'J_1B_FREIGHT_MODE' 
  and as4local = 'A'
```
