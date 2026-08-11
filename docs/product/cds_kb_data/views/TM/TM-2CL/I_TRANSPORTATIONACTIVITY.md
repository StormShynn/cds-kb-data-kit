---
name: I_TRANSPORTATIONACTIVITY
description: "Transportation Activity"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITY')/$value
semantic_en: "Transportation Activity"
semantic_vi: "I_TRANSPORTATIONACTIVITY — CDS view cơ bản dựa trên I_TRANSPORTATIONACTIVITY."
keywords:
  - "transportationactivity"
  - "transportation"
  - "activity"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_TRANSPORTATIONACTIVITY

**Transportation Activity**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationActivity` | ✓ | |  | `transp_activity` | `CHAR(2)` | Transportation Activity |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TransportationActivityText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONACTIVITY')/$value)*

```abap
@EndUserText:   {label:              'Transportation Activity'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TransportationActivity',
                 usageType:             {serviceQuality: #A,
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
                                           
                 sapObjectNodeType.name: 'TransportationActivity'                           
                }
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITRANSPACTIVITY',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TransportationActivity
  as select from /scmtms/c_trac
  association [0..*] to I_TransportationActivityText as _Text on $projection.TransportationActivity = _Text.TransportationActivity
{
      @ObjectModel.text.association: '_Text'
  key transp_activity as TransportationActivity,

      /* Associations */
      _Text
}
```
