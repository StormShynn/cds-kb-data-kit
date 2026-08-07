---
name: ZI_ITEM_1405.DDLS
description: Interface - Sales Order Item
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/cristinallamasnbx/MasterSAPBTP_FinalProject/blob/97d28fe996c012c278a5acad1b47c66fc642f129/src/zi_item_1405.ddls.asddls
semantic_en: Interface - Sales Order Item — CDS view.
semantic_vi: Interface - Sales Order Item — CDS view dựa trên Interface - Sales Order Item.
keywords:
  - interface
  - sales
  - order
  - item
  - header
  - name
  - description
  - release
  - date
tags:
  - AC
  - component:AC
  - order
  - sales-order
---
# ZI_ITEM_1405.DDLS

**Interface - Sales Order Item**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/cristinallamasnbx/MasterSAPBTP_FinalProject/blob/97d28fe996c012c278a5acad1b47c66fc642f129/src/zi_item_1405.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Id` | ✓ | |  |  |  |  |
| `HeaderId` |  | |  |  |  |  |
| `Name` |  | |  |  |  |  |
| `Description` |  | |  |  |  |  |
| `ReleaseDate` |  | |  |  |  |  |
| `DiscontinuedDate` |  | |  |  |  |  |
| `Price` |  | |  |  |  |  |
| `Height` |  | |  |  |  |  |
| `Width` |  | |  |  |  |  |
| `Depth` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `UnitOfMeasure` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/cristinallamasnbx/MasterSAPBTP_FinalProject/blob/97d28fe996c012c278a5acad1b47c66fc642f129/src/zi_item_1405.ddls.asddls](https://github.com/cristinallamasnbx/MasterSAPBTP_FinalProject/blob/97d28fe996c012c278a5acad1b47c66fc642f129/src/zi_item_1405.ddls.asddls)*

```abap
@EndUserText.label: 'Interface - Sales Order Item'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity ZI_ITEM_1405
  as projection on ZR_ITEM_1405
{
    key Id,
        HeaderId,
        Name,
        Description,
        ReleaseDate,
        DiscontinuedDate,
        Price,
        Height,
        Width,
        Depth,
        Quantity,
        UnitOfMeasure,
        
        /* Associations */
        _Header : redirected to parent ZI_HEADER_1405
}
```
