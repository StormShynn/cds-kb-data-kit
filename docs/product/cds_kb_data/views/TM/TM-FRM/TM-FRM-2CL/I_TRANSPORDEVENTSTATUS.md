---
name: I_TRANSPORDEVENTSTATUS
description: "Transportation Order Event Status"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUS')/$value
semantic_en: "Transportation Order Event Status"
semantic_vi: "I_TRANSPORDEVENTSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordeventstatus"
  - "transp"
  - "event"
  - "status"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDEVENTSTATUS

**Transportation Order Event Status**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/tor_event_status preserving type)` | `CHAR(1)` | Event Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdEventStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUS')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Event Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:        #LOCAL}
@Analytics.technicalName: 'IEVENTSTATUS'
@ObjectModel:   {representativeKey:  'TranspOrdEventStatus',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TransportationOrderEventStatus'                                           
                                           }                                      
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define root view entity I_TranspOrdEventStatus
  as select from dd07l
  association [0..*] to I_TranspOrdEventStatusText as _Text on $projection.TranspOrdEventStatus = _Text.TranspOrdEventStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/tor_event_status preserving type) as TranspOrdEventStatus,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_EVENT_STATUS'
  and as4local = 'A';
```
