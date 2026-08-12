---
name: I_BR_SIMPLESCLASSCODE
description: "BR Simplesclasscode"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_SIMPLESCLASSCODE

**BR Simplesclasscode**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_SIMPLESClassCode` | ✓ | |  | `cast ( domvalue_l as logbr_simples_class )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_SIMPLESClassCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRSIMPLESCLS'
@EndUserText.label: 'Brazil Simples Nacional Class Code'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BR_SIMPLESClassCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.compositionRoot: true
@Search.searchable: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_SIMPLESClassCode
  as select from dd07l
  association [0..*] to I_BR_SIMPLESClassCodeText as _Text on $projection.BR_SIMPLESClassCode = _Text.BR_SIMPLESClassCode
{

      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as logbr_simples_class ) as BR_SIMPLESClassCode,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                         as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}

where domname  = 'LOGBR_SIMPLES_CLASS'
  and as4local = 'A'
```
