---
name: I_TRANSPORDEVENTCODETEXT
description: "Transp Order Event Code - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODETEXT')/$value
semantic_en: "Transp Order Event Code - Text"
semantic_vi: "I_TRANSPORDEVENTCODETEXT — CDS view cơ bản dựa trên I_TRANSPORDEVENTCODETEXT."
keywords:
  - "transpordeventcodetext"
  - "transp"
  - "event"
  - "code"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDEVENTCODETEXT

**Transp Order Event Code - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventCode` | ✓ | |  | `tor_event` | `CHAR(20)` | Event Occurring for a Transportation Activity |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TranspOrdEventCodeDesc` |  | |  | `cast ( description_s as /scmtms/vdm_eventcode_desc preserving type )` | `CHAR(40)` | Transportation Order Event Code Description |
| `_TranspOrdEventCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdEventCode` | `I_TranspOrdEventCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODETEXT')/$value)*

```abap
@EndUserText:   {label:              'Transp Order Event Code - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdEventCode',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IEVENTCODETEXT',
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL},
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdEventCodeText
  as select from /scmtms/c_ev_tyt
  association [0..1] to I_TranspOrdEventCode as _TranspOrdEventCode on $projection.TranspOrdEventCode = _TranspOrdEventCode.TranspOrdEventCode
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdEventCode'
  key tor_event                                                            as TranspOrdEventCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                as Language,
      @Semantics.text
      cast ( description_s as /scmtms/vdm_eventcode_desc preserving type ) as TranspOrdEventCodeDesc,

      /* Associations */
      _TranspOrdEventCode,
      _Language
}
```
