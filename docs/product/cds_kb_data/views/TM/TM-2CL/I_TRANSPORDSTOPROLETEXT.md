---
name: I_TRANSPORDSTOPROLETEXT
description: "Transportation Order Stop Role - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value
semantic_en: "Transportation Order Stop Role - Text"
semantic_vi: "I_TRANSPORDSTOPROLETEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordstoproletext"
  - "transp"
  - "stop"
  - "role"
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
# I_TRANSPORDSTOPROLETEXT

**Transportation Order Stop Role - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopRole` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type)` | `CHAR(2)` | Role of the Stop |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdStopRoleDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TranspOrdStopRole` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdStopRole` | `I_TranspOrdStopRole` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Stop Role - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TranspOrdStopRole',
                 dataCategory:          #TEXT,
                 usageType:              {serviceQuality: #A,
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
                 sqlViewName:        'ITORSTOPROLETEXT',
                 preserveKey:         true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdStopRoleText
  as select from dd07t
  association [0..1] to I_TranspOrdStopRole as _TranspOrdStopRole on $projection.TranspOrdStopRole = _TranspOrdStopRole.TranspOrdStopRole
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStopRole'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_stop_role preserving type) as TranspOrdStopRole,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      ddtext                                                                     as TranspOrdStopRoleDesc,

      /* Associations */
      _TranspOrdStopRole,
      _Language
}
where
      domname  = '/SCMTMS/TOR_STOP_ROLE'
  and as4local = 'A';
```
