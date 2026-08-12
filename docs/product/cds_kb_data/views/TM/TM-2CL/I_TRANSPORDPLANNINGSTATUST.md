---
name: I_TRANSPORDPLANNINGSTATUST
description: "Transportation Order Planning Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value
semantic_en: "Transportation Order Planning Status - Text"
semantic_vi: "I_TRANSPORDPLANNINGSTATUST — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordplanningstatust"
  - "transp"
  - "planning"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - plan
  - TM-2CL
---
# I_TRANSPORDPLANNINGSTATUST

**Transportation Order Planning Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdPlanningStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_pln_status preserving type)` | `CHAR(2)` | Planning Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdPlanningStatusDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TranspOrdPlanningStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdPlanningStatus` | `I_TranspOrdPlanningStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Planning Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdPlanningStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdPlanningStatusT_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORPLANSTATUST',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Search.searchable:                  false
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdPlanningStatusT
  as select from dd07t
  association [0..1] to I_TranspOrdPlanningStatus as _TranspOrdPlanningStatus on $projection.TranspOrdPlanningStatus = _TranspOrdPlanningStatus.TranspOrdPlanningStatus
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdPlanningStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_pln_status preserving type) as TranspOrdPlanningStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                  as Language,
      @Semantics.text: true
      ddtext                                                                      as TranspOrdPlanningStatusDesc,

      /* Associations */
      _TranspOrdPlanningStatus,
      _Language
}
where
      domname  = '/SCMTMS/TOR_PLN_STATUS'
  and as4local = 'A';
```
