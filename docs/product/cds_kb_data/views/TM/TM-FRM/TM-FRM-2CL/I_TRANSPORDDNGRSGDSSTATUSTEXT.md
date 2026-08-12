---
name: I_TRANSPORDDNGRSGDSSTATUSTEXT
description: "Transporddngrsgdsstatustext"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrderDngrsGdsSts` | ✓ | |  | `cast(domvalue_l as /scmtms/vdm_tor_dg_status)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrderDngrsGdsStsDesc` |  | |  | `cast( ddtext as /scmtms/vdm_tor_dg_status_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdDngrsGdsStatus` | | ✓ | | | | |

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
