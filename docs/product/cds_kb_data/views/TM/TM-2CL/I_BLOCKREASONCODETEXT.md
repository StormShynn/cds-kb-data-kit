---
name: I_BLOCKREASONCODETEXT
description: "Block Reason Code - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODETEXT')/$value
semantic_en: "Block Reason Code - Text"
semantic_vi: "I_BLOCKREASONCODETEXT — CDS view cơ bản dựa trên I_BLOCKREASONCODETEXT."
keywords:
  - "blockreasoncodetext"
  - "block"
  - "reason"
  - "language"
  - "desc"
tags:
  - TM
  - bo:salesorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKREASONCODETEXT

**Block Reason Code - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockReason` | ✓ | |  | `reason_code` | `CHAR(2)` | Block Reason |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BlockReasonDesc` |  | |  | `cast(description as /scmtms/vdm_block_reason_desc preserving type)` | `CHAR(40)` | Block Reason Description |
| `_BlockReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BlockReason` | `I_BlockReasonCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODETEXT')/$value)*

```abap
@EndUserText:   {label:                   'Block Reason Code - Text'}
@Analytics:     {dataExtraction:          {enabled: true},
                 internalName:            #LOCAL}
@ObjectModel:   {representativeKey:       'BlockReason',
                 dataCategory:            #TEXT,
                 usageType:               {serviceQuality: #A,
                                           sizeCategory:   #S,
                                           dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {compiler:                 {compareFilter: true},
                 sqlViewName:              'IBLOCKREASONCDT',
                 preserveKey:               true,
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL}}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_BlockReasonCodeText
  as select from /scmtms/c_blrc_t
  association [0..1] to I_BlockReasonCode as _BlockReason on $projection.BlockReason = _BlockReason.BlockReason
  association [0..1] to I_Language        as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BlockReason'
  key reason_code                                                        as BlockReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                              as Language,
      @Semantics.text: true
      cast(description as /scmtms/vdm_block_reason_desc preserving type) as BlockReasonDesc,

      /* Associations */
      _BlockReason,
      _Language
}
```
