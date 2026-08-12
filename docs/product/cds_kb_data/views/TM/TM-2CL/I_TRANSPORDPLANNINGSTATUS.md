---
name: I_TRANSPORDPLANNINGSTATUS
description: "Transportation Order Planning Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUS')/$value
semantic_en: "Transportation Order Planning Status"
semantic_vi: "I_TRANSPORDPLANNINGSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordplanningstatus"
  - "transp"
  - "planning"
  - "status"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - plan
  - TM-2CL
---
# I_TRANSPORDPLANNINGSTATUS

**Transportation Order Planning Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdPlanningStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_pln_status preserving type)` | `CHAR(2)` | Planning Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdPlanningStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUS')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Planning Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdPlanningStatus',
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
                 sapObjectNodeType.name: 'TranspOrdPlanningStatus'
                }
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdPlanningStatus_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORPLANSTATUS',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Search.searchable:                  false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdPlanningStatus
  as select from dd07l
  association [0..*] to I_TranspOrdPlanningStatusT as _Text on $projection.TranspOrdPlanningStatus = _Text.TranspOrdPlanningStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_pln_status preserving type) as TranspOrdPlanningStatus,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_PLN_STATUS'
  and as4local = 'A';
```
