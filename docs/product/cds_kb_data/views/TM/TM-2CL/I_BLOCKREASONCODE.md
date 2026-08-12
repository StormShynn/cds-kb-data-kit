---
name: I_BLOCKREASONCODE
description: "Block Reason Code"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODE')/$value
semantic_en: "Block Reason Code"
semantic_vi: "I_BLOCKREASONCODE — CDS view cơ bản dựa trên I_BLOCKREASONCODE."
keywords:
  - "blockreasoncode"
  - "block"
  - "reason"
tags:
  - TM
  - bo:salesorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKREASONCODE

**Block Reason Code**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockReason` | ✓ | |  | `reason_code` | `CHAR(2)` | Block Reason |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BlockReasonCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKREASONCODE')/$value)*

```abap
@EndUserText:   {label:                   'Block Reason Code'}
@Analytics:     {dataCategory:            #DIMENSION,
                 dataExtraction:          {enabled: true},
                 internalName:            #LOCAL }
@ObjectModel:   {representativeKey:       'BlockReason',
                 usageType:               {serviceQuality: #A,
                                           sizeCategory:   #S,
                                           dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY],
                                           sapObjectNodeType.name: 'TransportationBlockReasonCode'}                                           
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {sqlViewName:              'IBLOCKREASONCODE',
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL},
                 compiler:                 {compareFilter: true}}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Search.searchable:                        false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define view I_BlockReasonCode
  as select from /scmtms/c_blrc
  association [0..*] to I_BlockReasonCodeText as _Text on $projection.BlockReason = _Text.BlockReason
{
      @ObjectModel.text.association: '_Text'
  key reason_code as BlockReason,

      /* Associations */
      _Text
}
```
