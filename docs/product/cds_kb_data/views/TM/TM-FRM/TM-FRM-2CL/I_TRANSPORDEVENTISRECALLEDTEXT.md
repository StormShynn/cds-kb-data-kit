---
name: I_TRANSPORDEVENTISRECALLEDTEXT
description: "Transpordeventisrecalledtext"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - text-view
  - text
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDEVENTISRECALLEDTEXT

**Transpordeventisrecalledtext**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventIsRecalled` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/event_revoked preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdEventIsRecalledDesc` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdEventIsRecalled` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Transp Order Event is Recalled - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdEventIsRecalled',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IEVENTREVOKEDT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdEventIsRecalledText
  as select from dd07t
  association        to parent I_TranspOrdEventIsRecalled as _TranspOrdEventIsRecalled on $projection.TranspOrdEventIsRecalled = _TranspOrdEventIsRecalled.TranspOrdEventIsRecalled
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdEventIsRecalled'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/event_revoked preserving type) as TranspOrdEventIsRecalled,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      ddtext                                                                     as TranspOrdEventIsRecalledDesc,

      /* Associations */
      _TranspOrdEventIsRecalled,
      _Language
}
where
      domname  = '/SCMTMS/EVENT_REVOKED'
  and as4local = 'A';
```
