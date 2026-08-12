---
name: I_BLOCKSTATUSTEXT
description: "Block Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUSTEXT')/$value
semantic_en: "Block Status - Text"
semantic_vi: "I_BLOCKSTATUSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "blockstatustext"
  - "block"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKSTATUSTEXT

**Block Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/block_status preserving type)` | `CHAR(2)` | Block Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BlockStatusDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BlockStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BlockStatus` | `I_BlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUSTEXT')/$value)*

```abap
@EndUserText:   {label:              'Block Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'BlockStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
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
                 sqlViewName:        'IBLOCKSTATUSTEXT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_BlockStatusText
  as select from dd07t
  association [0..1] to I_BlockStatus as _BlockStatus on $projection.BlockStatus = _BlockStatus.BlockStatus
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BlockStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/block_status preserving type) as BlockStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                as Language,
      @Semantics.text
      ddtext                                                                    as BlockStatusDesc,

      /* Associations */
      _BlockStatus,
      _Language
}
where
      domname  = '/SCMTMS/BLOCK_STATUS'
  and as4local = 'A';
```
