---
name: ZI_POTEXTVH.DDLS
description: Search help po note
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/antt122/PO_CASPSTONE_BE/blob/dff8585e22b42e0f6a33790f1e479a2d238829aa/src/zi_potextvh.ddls.asddls
semantic_en: Search help po note — CDS view based on ttxid.
semantic_vi: Search help po note — CDS view dựa trên ttxid.
keywords:
  - search
  - help
  - note
  - text
  - description
  - object
tags:
  - bo:purchaseorder
---
# ZI_POTEXTVH.DDLS

**Search help po note**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/antt122/PO_CASPSTONE_BE/blob/dff8585e22b42e0f6a33790f1e479a2d238829aa/src/zi_potextvh.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `TextId` | `ttxid.tdid` |
| `Description` | `ttxit.tdtext` |
| `TextObject` | `ttxid.tdobject` |

## Source Code

*Source: [https://github.com/antt122/PO_CASPSTONE_BE/blob/dff8585e22b42e0f6a33790f1e479a2d238829aa/src/zi_potextvh.ddls.asddls](https://github.com/antt122/PO_CASPSTONE_BE/blob/dff8585e22b42e0f6a33790f1e479a2d238829aa/src/zi_potextvh.ddls.asddls)*

```abap
    @AccessControl.authorizationCheck: #NOT_REQUIRED
    @EndUserText.label: 'Search help po note'
    @Search.searchable: true
    define view entity ZI_PoTextVH
      as select from    ttxid
        left outer join ttxit on  ttxid.tdobject = ttxit.tdobject
                              and ttxid.tdid     = ttxit.tdid
                              and ttxit.tdspras  = $session.system_language
    {
    
          @UI.lineItem:       [ { position: 10, label: 'Text ID' } ]       // 1. Text ID lên đầu
          @UI.selectionField: [ { position: 10 } ]
          @ObjectModel.text.element: ['Description']
          @Search.defaultSearchElement: true
      key ttxid.tdid     as TextId,
    
          @UI.lineItem:       [ { position: 20, label: 'Description' } ]   // 2. Description ở giữa
          @Semantics.text: true
          @Search.defaultSearchElement: true
          ttxit.tdtext   as Description,
    
          @UI.lineItem:       [ { position: 30, label: 'Text Object' } ]   // 3. Text Object xuống cuối
          @UI.selectionField: [ { position: 20 } ]
          @Search.defaultSearchElement: true
          ttxid.tdobject as TextObject
    }
    where
         ttxid.tdobject = 'EKKO'
      or ttxid.tdobject = 'EKPO'
```