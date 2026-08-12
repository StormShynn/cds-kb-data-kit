---
name: I_TRANSPORDBLOCKISOVERRULEDT
description: "Transportation Order Block is Overruled - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULEDT')/$value
semantic_en: "Transportation Order Block is Overruled - Text"
semantic_vi: "I_TRANSPORDBLOCKISOVERRULEDT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordblockisoverruledt"
  - "transp"
  - "block"
  - "overruled"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDBLOCKISOVERRULEDT

**Transportation Order Block is Overruled - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULEDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdBlockIsOverruled` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_overruled preserving type)` | `CHAR(1)` | Transportation Order Block Is Overruled |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdBlockIsOverruledDesc` |  | |  | `cast(ddtext as /scmtms/vdm_block_overrld_desc preserving type)` | `CHAR(60)` | Transportation Order Block Is Overruled Description |
| `_TranspOrdBlockIsOverruled` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdBlockIsOverruled` | `I_TranspOrdBlockIsOverruled` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULEDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULEDT')/$value)*

```abap
@EndUserText:   {label:                  'Transportation Order Block is Overruled - Text'}
@ObjectModel:   {representativeKey:       'TranspOrdBlockIsOverruled',
                 dataCategory:            #TEXT,
                 usageType:               {serviceQuality: #A,
                                           sizeCategory:   #S,
                                           dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {compiler:                 {compareFilter: true},
                 sqlViewName:              'ITORBLKOVERRULDT',
                 preserveKey:               true}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdBlockIsOverruledT
  as select from dd07t
  association [0..1] to I_TranspOrdBlockIsOverruled as _TranspOrdBlockIsOverruled on $projection.TranspOrdBlockIsOverruled = _TranspOrdBlockIsOverruled.TranspOrdBlockIsOverruled
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_TranspOrdBlockIsOverruled'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_overruled preserving type) as TranspOrdBlockIsOverruled,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                       as Language,
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_block_overrld_desc preserving type)                   as TranspOrdBlockIsOverruledDesc,

      /* Associations */
      _TranspOrdBlockIsOverruled,
      _Language
}
where
      domname  = '/SCMTMS/VDM_BLOCK_OVERRULED'
  and as4local = 'A';
```
