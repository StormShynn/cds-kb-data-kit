---
name: I_TRANSPORDDNGRSGDSSTATUSTEXT
description: Transporddngrsgdsstatustext
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
  - status
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDDNGRSGDSSTATUSTEXT

**Transporddngrsgdsstatustext**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspOrderDngrsGdsSts` | ✓ | |  | `cast(domvalue_l as /scmtms/vdm_tor_dg_status)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `TranspOrderDngrsGdsStsDesc` |  | |  | `cast( ddtext as /scmtms/vdm_tor_dg_status_desc preserving type )` |
| `_Language` | | ✓ | | |
| `_TranspOrdDngrsGdsStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Transp Ord Dangerous Goods Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrderDngrsGdsSts',
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
@Analytics.technicalName: 'ITORDGSTSTXT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdDngrsGdsStatusText

  as select from dd07t
  association        to parent I_TranspOrdDngrsGdsStatus as _TranspOrdDngrsGdsStatus on $projection.TranspOrderDngrsGdsSts = _TranspOrdDngrsGdsStatus.TranspOrderDngrsGdsSts
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdDngrsGdsStatus'
  key cast(domvalue_l as /scmtms/vdm_tor_dg_status)                    as TranspOrderDngrsGdsSts,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                       as Language,
      @Semantics.text
      cast( ddtext as /scmtms/vdm_tor_dg_status_desc preserving type ) as TranspOrderDngrsGdsStsDesc,

      /* Associations */
      _TranspOrdDngrsGdsStatus,
      _Language
}
where
      domname  = '/SCMTMS/DG_STATUS'
  and as4local = 'A';
```
