---
name: I_TRANSPORDEVENTCODE
description: "Transp Order Event Code"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value
semantic_en: "Transp Order Event Code"
semantic_vi: "I_TRANSPORDEVENTCODE — CDS view cơ bản dựa trên I_TRANSPORDEVENTCODE."
keywords:
  - "transpordeventcode"
  - "transp"
  - "event"
  - "code"
  - "transportation"
  - "activity"
  - "stop"
  - "category"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDEVENTCODE

**Transp Order Event Code**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventCode` | ✓ | |  | `tor_event` | `CHAR(20)` | Event Occurring for a Transportation Activity |
| `TransportationActivity` |  | |  | `transp_activity` | `CHAR(2)` | Transportation Activity |
| `TranspOrdStopCategory` |  | |  | `stop_cat` | `CHAR(1)` | Stop Category |
| `_Text` | | ✓ | | | | |
| `_TransportationActivity` | | ✓ | | | | |
| `_TranspOrdStopCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdEventCodeText` | [0..*] |
| `_TransportationActivity` | `I_TransportationActivity` | [0..1] |
| `_TranspOrdStopCategory` | `I_TranspOrdStopCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText:   {label:              'Transp Order Event Code'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'IEVENTCODE'
@ObjectModel:   {representativeKey:  'TranspOrdEventCode',
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
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view entity I_TranspOrdEventCode
  as select from /scmtms/c_ev_ty
  association [0..*] to I_TranspOrdEventCodeText as _Text                   on $projection.TranspOrdEventCode = _Text.TranspOrdEventCode
  association [0..1] to I_TransportationActivity as _TransportationActivity on $projection.TransportationActivity = _TransportationActivity.TransportationActivity
  association [0..1] to I_TranspOrdStopCategory  as _TranspOrdStopCategory  on $projection.TranspOrdStopCategory = _TranspOrdStopCategory.TranspOrdStopCategory
{
      @ObjectModel.text.association: '_Text'
  key tor_event       as TranspOrdEventCode,
      @ObjectModel.foreignKey.association: '_TransportationActivity'
      transp_activity as TransportationActivity,
      @ObjectModel.foreignKey.association: '_TranspOrdStopCategory'
      stop_cat        as TranspOrdStopCategory,

      /* Associations */
      _Text,
      _TransportationActivity,
      _TranspOrdStopCategory
}
where
  event_visibility = ' ';
```
