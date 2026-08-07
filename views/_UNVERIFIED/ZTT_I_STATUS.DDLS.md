---
name: ZTT_I_STATUS.DDLS
description: "Status"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_status.ddls.asddls
semantic_en: "Status — CDS view based on dd07l."
semantic_vi: "Status — CDS view dựa trên dd07l."
keywords:
  - "status"
  - "cast"
  - "valpos"
---
# ZTT_I_STATUS.DDLS

**Status**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_status.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `status` | ✓ | |  | `cast( domvalue_l as ZTT_STATUS )` |  |  |
| `valpos` |  | |  |  |  |  |
| `_text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_text` | `ZTT_I_DOMAIN_TEXT` | [0..*] |

## Source Code

*Source: [https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_status.ddls.asddls](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_status.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZTTI_STATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Status'

@Search.searchable: true

@ObjectModel: {
    representativeKey: 'status',
    resultSet.sizeCategory: #XS
}

@UI.headerInfo.typeName: 'Status'
@UI.headerInfo.typeNamePlural: 'Statuses'
@UI.headerInfo.title.value: 'status'

define view ZTT_I_STATUS
    as select from dd07l as status
    association [0..*] to ZTT_I_DOMAIN_TEXT as _text on _text.domainName    = 'ZTT_STATUS'
                                                      and _text.valuePosition = status.valpos
{
    @ObjectModel.text.association: '_text'
    @Search: { defaultSearchElement: true, ranking: #HIGH }
    key cast( domvalue_l as ZTT_STATUS ) as status,
    
    @Consumption.hidden: true
    valpos,
    
    _text
    
} where status.domname = 'ZTT_STATUS'
    and status.as4local = 'A';
```
