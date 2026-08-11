---
name: I_TRANSPORDSTOPROLE
description: "Transportation Order Stop Role"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLE')/$value
semantic_en: "Transportation Order Stop Role"
semantic_vi: "I_TRANSPORDSTOPROLE — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordstoprole"
  - "transp"
  - "stop"
  - "role"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSTOPROLE

**Transportation Order Stop Role**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopRole` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type)` | `CHAR(2)` | Role of the Stop |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdStopRoleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLE')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Stop Role'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdStopRole',
                 usageType:              {serviceQuality: #A,
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
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORSTOPROLE',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdStopRole
  as select from dd07l
  association [0..*] to I_TranspOrdStopRoleText as _Text on $projection.TranspOrdStopRole = _Text.TranspOrdStopRole
{
      //    @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type) as TranspOrdStopRole,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_STOP_ROLE'
  and as4local = 'A';
```
