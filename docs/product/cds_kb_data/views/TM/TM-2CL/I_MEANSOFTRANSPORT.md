---
name: I_MEANSOFTRANSPORT
description: "Means of Transport"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORT')/$value
semantic_en: "Means of Transport"
semantic_vi: "I_MEANSOFTRANSPORT — CDS view cơ bản dựa trên I_MEANSOFTRANSPORT."
keywords:
  - "meansoftransport"
  - "means"
  - "transport"
  - "transportation"
  - "mode"
  - "passive"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_MEANSOFTRANSPORT

**Means of Transport**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeansOfTransport` | ✓ | |  | `ttype` | `CHAR(10)` | Means of Transport |
| `TransportationMode` |  | |  | `trmodcode` | `CHAR(2)` | Transportation Mode |
| `MeansOfTransportIsPassive` |  | |  | `passive` | `CHAR(1)` | Passive |
| `_Text` | | ✓ | | | | |
| `_TransportationMode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MeansOfTransportText` | [0..*] |
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORT')/$value)*

```abap
@EndUserText:   {label:              'Means of Transport'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'MeansOfTransport',
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
                 sapObjectNodeType.name: 'TransportationMeansOfTransport'}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IMEANSOFTRANSP',
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL,
                                      numberOfKeyFields: 000}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@Search.searchable: true                 


define view I_MeansOfTransport
  as select from /sapapo/trtype
  association [0..*] to I_MeansOfTransportText as _Text               on $projection.MeansOfTransport = _Text.MeansOfTransport
  association [0..1] to I_TransportationMode_2 as _TransportationMode on $projection.TransportationMode = _TransportationMode.TransportationMode
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key ttype     as MeansOfTransport,
      @ObjectModel.foreignKey.association: '_TransportationMode'
      trmodcode as TransportationMode,
      passive   as MeansOfTransportIsPassive,

      /* Associations */
      _Text,
      _TransportationMode
}
```
