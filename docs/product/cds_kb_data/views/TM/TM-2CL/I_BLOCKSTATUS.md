---
name: I_BLOCKSTATUS
description: "Block Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUS')/$value
semantic_en: "Block Status"
semantic_vi: "I_BLOCKSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "blockstatus"
  - "block"
  - "status"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKSTATUS

**Block Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/block_status preserving type)` | `CHAR(2)` | Block Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BlockStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKSTATUS')/$value)*

```abap
@EndUserText:   {label:                  'Block Status'}
@Analytics:     {dataCategory:           #DIMENSION,
                 dataExtraction.enabled: true,
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'BlockStatus',
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
                                           #SEARCHABLE_ENTITY],
                                           sapObjectNodeType.name: 'TransportationBlockStatus'}
@VDM:           {viewType:               #BASIC}
@AbapCatalog:   {sqlViewName:            'IBLOCKSTATUS',
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL},
                 compiler:               {compareFilter: true}}
@AccessControl: {authorizationCheck:     #NOT_REQUIRED}
@ClientHandling.algorithm:               #SESSION_VARIABLE
@Search.searchable:                      false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_BlockStatus
  as select from dd07l
  association [0..*] to I_BlockStatusText as _Text on $projection.BlockStatus = _Text.BlockStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/block_status preserving type) as BlockStatus,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/BLOCK_STATUS'
  and as4local = 'A';
```
