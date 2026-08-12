---
name: I_TRANSPORTATIONACTIVITYTEXT
description: "Transportation Activity - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITYTEXT')/$value
semantic_en: "Transportation Activity - Text"
semantic_vi: "I_TRANSPORTATIONACTIVITYTEXT — CDS view cơ bản dựa trên I_TRANSPORTATIONACTIVITYTEXT."
keywords:
  - "transportationactivitytext"
  - "transportation"
  - "activity"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_TRANSPORTATIONACTIVITYTEXT

**Transportation Activity - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationActivity` | ✓ | |  | `transp_activity` | `CHAR(2)` | Transportation Activity |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TransportationActivityDesc` |  | |  | `cast ( description_s as /scmtms/vdm_activity_desc preserving type )` | `CHAR(40)` | Transportation Activity Description |
| `_TransportationActivity` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationActivity` | `I_TransportationActivity` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITYTEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Activity - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TransportationActivity',
                 dataCategory:          #TEXT,
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITRANSPACTIVITYT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TransportationActivityText
  as select from /scmtms/c_tract
  association [0..1] to I_TransportationActivity as _TransportationActivity on $projection.TransportationActivity = _TransportationActivity.TransportationActivity
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationActivity'
  key transp_activity                                                     as TransportationActivity,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                               as Language,
      @Semantics.text
      cast ( description_s as /scmtms/vdm_activity_desc preserving type ) as TransportationActivityDesc,

      /* Associations */
      _TransportationActivity,
      _Language
}
```
