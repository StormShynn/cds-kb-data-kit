---
name: I_TRANSPORDLIFECYCLESTATUS
description: "Transportation Order Life Cycle Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUS')/$value
semantic_en: "Transportation Order Life Cycle Status"
semantic_vi: "I_TRANSPORDLIFECYCLESTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordlifecyclestatus"
  - "transp"
  - "life"
  - "cycle"
  - "status"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDLIFECYCLESTATUS

**Transportation Order Life Cycle Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdLifeCycleStatus` | ✓ | |  | `cast(domvalue_l as /scmtms/tor_lc_status)` | `CHAR(2)` | Life Cycle Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdLifeCycleStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUS')/$value)*

```abap
@EndUserText:   {label:                    'Transportation Order Life Cycle Status'}
@Analytics:     {dataCategory:             #DIMENSION,
                 dataExtraction:           {enabled: true},
                 internalName:             #LOCAL}
@ObjectModel:   {representativeKey:        'TranspOrdLifeCycleStatus',
                 usageType:                {serviceQuality: #A,
                                            sizeCategory:   #S,
                                            dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {compiler:                 {compareFilter: true},
                 sqlViewName:              'ITORLIFECYCSTS'}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@ObjectModel.resultSet.sizeCategory:       #XS
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdLifeCycleStatus

  as select from dd07l
  association [0..*] to I_TranspOrdLifeCycleStatusText as _Text on $projection.TranspOrdLifeCycleStatus = _Text.TranspOrdLifeCycleStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as /scmtms/tor_lc_status) as TranspOrdLifeCycleStatus,
      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_LC_STATUS'
  and as4local = 'A';
```
