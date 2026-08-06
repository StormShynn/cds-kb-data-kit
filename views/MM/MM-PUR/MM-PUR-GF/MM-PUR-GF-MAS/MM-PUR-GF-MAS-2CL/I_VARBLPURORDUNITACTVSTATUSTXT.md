---
name: I_VARBLPURORDUNITACTVSTATUSTXT
description: Varblpurordunitactvstatustxt
app_component: MM-PUR-GF-MAS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - status
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_VARBLPURORDUNITACTVSTATUSTXT

**Varblpurordunitactvstatustxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `dd07t.ddlanguage` |
| key `VarblPurOrdUnitIsActive` | `cast( dd07t.domvalue_l as vabme )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `VarblPurOrdUnitStatus` | `dd07t.ddtext` |
| `_Language` | *Association* |
| `_VarblPurOrdUnitActvStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPOUNITACTVSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'VarblPurOrdUnitIsActive'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Variable PO Unit Active Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]                                   
define view I_VarblPurOrdUnitActvStatusTxt
  as select from dd07t

  association        to parent I_VarblPurOrdUnitActvStatus as _VarblPurOrdUnitActvStatus on $projection.VarblPurOrdUnitIsActive = _VarblPurOrdUnitActvStatus.VarblPurOrdUnitIsActive

  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  dd07t.ddlanguage                  as Language,
       @ObjectModel.foreignKey.association: '_VarblPurOrdUnitActvStatus'
       @ObjectModel.text.element: ['VarblPurOrdUnitStatus']
  key  cast( dd07t.domvalue_l as vabme ) as VarblPurOrdUnitIsActive,
       @Consumption.hidden: true
       dd07t.domvalue_l                  as DomainValue,
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       @Semantics.text: true
       dd07t.ddtext                      as VarblPurOrdUnitStatus,
       _VarblPurOrdUnitActvStatus,
       _Language
}
where
      dd07t.domname    = 'VABME'
  and dd07t.as4local   = 'A'
  and dd07t.as4vers    = '0000'
  and dd07t.ddlanguage = $session.system_language
```
