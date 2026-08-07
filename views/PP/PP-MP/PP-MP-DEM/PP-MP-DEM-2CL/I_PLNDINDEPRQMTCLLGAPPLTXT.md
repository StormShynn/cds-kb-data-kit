---
name: I_PLNDINDEPRQMTCLLGAPPLTXT
description: Plndindeprqmtcllgappltxt
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - interface-view
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTCLLGAPPLTXT

**Plndindeprqmtcllgappltxt**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `PlndIndepRqmtCllgAppl` | ✓ | |  | `cast( dd07t.domvalue_l as pph_pir_calling_appl )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `PlndIndepRqmtCllgApplTxt` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | | ✓ | | |
| `_PlndIndepRqmtCllgAppl` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'PIR Calling Application Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'PlndIndepRqmtCllgAppl',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                       #SQL_DATA_SOURCE],
               usageType:{ serviceQuality: #A,
                          sizeCategory: #S,
                          dataClass: #META } }
@Search.searchable: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_PlndIndepRqmtCllgApplTxt
  as select from dd07t
  association        to parent I_PlndIndepRqmtCllgAppl as _PlndIndepRqmtCllgAppl on $projection.PlndIndepRqmtCllgAppl = _PlndIndepRqmtCllgAppl.PlndIndepRqmtCllgAppl
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                   as Language,
      @ObjectModel.foreignKey.association: '_PlndIndepRqmtCllgAppl'
      @ObjectModel.text.element: ['PlndIndepRqmtCllgApplTxt']
  key cast( dd07t.domvalue_l as pph_pir_calling_appl )                    as PlndIndepRqmtCllgAppl,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type ) as PlndIndepRqmtCllgApplTxt,

      _PlndIndepRqmtCllgAppl,
      _Language
}
where
      dd07t.domname  = 'PPH_PIR_CALLING_APPL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
