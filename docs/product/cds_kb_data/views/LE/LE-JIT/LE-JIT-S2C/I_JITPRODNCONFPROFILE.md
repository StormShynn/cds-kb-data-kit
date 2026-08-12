---
name: I_JITPRODNCONFPROFILE
description: "Jitprodnconfprofile"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_JITPRODNCONFPROFILE

**Jitprodnconfprofile**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITProdnConfProfile` | ✓ | |  | `cast( substring( domvalue_l,1,4 ) as njit_prodn_conf_profile preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_JITProdnConfProfileDesc` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck           : #NOT_REQUIRED
@AccessControl.personalData.blocking        : #NOT_REQUIRED
@Analytics.dataCategory                     : #DIMENSION
@Analytics.internalName                     : #LOCAL
@Consumption.ranked                         : true
@EndUserText.label                          : 'JIT Production Confirmation Profile'
@Metadata.ignorePropagatedAnnotations       : true

@ObjectModel                                : { modelingPattern        : #ANALYTICAL_DIMENSION,
                                                representativeKey      : 'JITProdnConfProfile',
                                                resultSet.sizeCategory : #XS,
                                                supportedCapabilities  : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                                usageType              : { dataClass       : #META,
                                                                           serviceQuality  : #A,
                                                                           sizeCategory    : #S }
                                              }

@ObjectModel.dataCategory                   : #VALUE_HELP
@Search.searchable                          : true
@VDM.viewType                               : #BASIC
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
/*+[hideWarning] { "IDS" : [ "KEY_CHECK/code>*/
define view entity I_JITProdnConfProfile
  as select from dd07l
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
  association [0..*] to I_JITProdnConfProfileDesc as _Text on $projection.JITProdnConfProfile = _Text.JITProdnConfProfile
{
      @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l,1,4 ) as njit_prodn_conf_profile preserving type ) as JITProdnConfProfile,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                                     as DomainValue,
      _Text
}
where
      dd07l.domname  = 'NJIT_PRODN_CONF_PROFILE'
  and dd07l.as4local = 'A'
```
