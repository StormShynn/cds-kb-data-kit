---
name: I_JITPRODNCONFPROFILEDESC
description: "Jitprodnconfprofiledesc"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITPRODNCONFPROFILEDESC

**Jitprodnconfprofiledesc**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `JITProdnConfProfile` | ✓ | |  | `cast( substring( domvalue_l, 1, 4 ) as njit_prodn_conf_profile preserving type )` |  |  |
| `JITProdnConfProfileDesc` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_JITProdnConfProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_JITProdnConfProfile` | `I_JITProdnConfProfile` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck           : #NOT_REQUIRED
@EndUserText.label                          : 'JIT Production Conf Profile - Text'
@Metadata.ignorePropagatedAnnotations       : true
@ObjectModel                                : { dataCategory            : #TEXT,
                                                modelingPattern         : #LANGUAGE_DEPENDENT_TEXT,
                                                representativeKey       : 'JITProdnConfProfile',
                                                supportedCapabilities   : [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                                usageType               : { dataClass       : #META,
                                                                            serviceQuality  : #A,
                                                                            sizeCategory    : #S }
                                              }
@Search.searchable                          : true
@VDM.viewType                               : #BASIC
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
/*+[hideWarning] { "IDS" : [ "KEY_CHECK/code>*/
define view entity I_JITProdnConfProfileDesc
  as select from dd07t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
  association [0..1] to I_JITProdnConfProfile as _JITProdnConfProfile on $projection.JITProdnConfProfile = _JITProdnConfProfile.JITProdnConfProfile
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                as Language,
      @ObjectModel.text.element: ['JITProdnConfProfileDesc']
      @ObjectModel.foreignKey.association: '_JITProdnConfProfile'
  key cast( substring( domvalue_l, 1, 4 ) as njit_prodn_conf_profile preserving type ) as JITProdnConfProfile,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )                                 as JITProdnConfProfileDesc,
      _Language,
      _JITProdnConfProfile
}
where
      domname  = 'NJIT_PRODN_CONF_PROFILE'
  and as4local = 'A'
```
