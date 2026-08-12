---
name: I_TRANSPORDEVENTSTATUSTEXT
description: "Transportation Order Event Status - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value
semantic_en: "Transportation Order Event Status - Text"
semantic_vi: "I_TRANSPORDEVENTSTATUSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordeventstatustext"
  - "transp"
  - "event"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDEVENTSTATUSTEXT

**Transportation Order Event Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/tor_event_status preserving type)` | `CHAR(1)` | Event Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdEventStatusDesc` |  | |  | `cast( ddtext as /scmtms/vdm_eventstatus_desc preserving type )` | `CHAR(60)` | Transportation Order Event Status Description |
| `_TranspOrdEventStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdEventStatus` | `I_TranspOrdEventStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Event Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdEventStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IEVENTSTATUST'
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdEventStatusText
  as select from dd07t
  association [0..1] to I_TranspOrdEventStatus as _TranspOrdEventStatus on $projection.TranspOrdEventStatus = _TranspOrdEventStatus.TranspOrdEventStatus
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdEventStatus'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/tor_event_status preserving type) as TranspOrdEventStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                    as Language,
      @Semantics.text
      cast( ddtext as /scmtms/vdm_eventstatus_desc preserving type )                as TranspOrdEventStatusDesc,

      /* Associations */
      _TranspOrdEventStatus,
      _Language
}
where
      domname  = '/SCMTMS/TOR_EVENT_STATUS'
  and as4local = 'A';
```
