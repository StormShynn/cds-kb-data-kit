---
name: I_PLNDINDEPRQMTCLLGAPPL
description: Plndindeprqmtcllgappl
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
# I_PLNDINDEPRQMTCLLGAPPL

**Plndindeprqmtcllgappl**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlndIndepRqmtCllgAppl` | ✓ | |  | `cast( dd07l.domvalue_l as pph_pir_calling_appl )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'PlndIndepRqmtCllgAppl',
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
                usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #META } }
@Search.searchable: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
@EndUserText.label: 'PIR Calling Application Code'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define root view entity I_PlndIndepRqmtCllgAppl
  as select from dd07l
  composition [0..*] of I_PlndIndepRqmtCllgApplTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as pph_pir_calling_appl ) as PlndIndepRqmtCllgAppl,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                 as DomainValue,
      _Text
}
where
      dd07l.domname  = 'PPH_PIR_CALLING_APPL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
