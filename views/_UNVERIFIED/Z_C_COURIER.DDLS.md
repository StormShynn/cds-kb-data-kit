---
name: Z_C_COURIER.DDLS
description: "Projection View for Courier"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/msmohanan25022005-ship-it/sap-project-courier-system/blob/d57d98e2175b4f407f7d958842ae8b3931e1cb13/src/z_c_courier.ddls.asddls
semantic_en: "Projection View for Courier — CDS view."
semantic_vi: "Projection View for Courier — CDS view dựa trên Projection View for Courier."
keywords:
  - "projection"
  - "for"
  - "courier"
  - "parcel"
  - "item"
  - "name"
  - "sender"
  - "receiver"
  - "status"
tags:
  - CO
  - bo:project
  - component:CO
  - lob:controlling
  - project
---
# Z_C_COURIER.DDLS

**Projection View for Courier**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/msmohanan25022005-ship-it/sap-project-courier-system/blob/d57d98e2175b4f407f7d958842ae8b3931e1cb13/src/z_c_courier.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ParcelId` | ✓ | |  |  |  |  |
| `ItemName` |  | |  |  |  |  |
| `Sender` |  | |  |  |  |  |
| `Receiver` |  | |  |  |  |  |
| `Status` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `CreatedAt` |  | |  |  |  |  |
| `LastUpdatedBy` |  | |  |  |  |  |
| `LastUpdatedAt` |  | |  |  |  |  |
| `LocalLastUpdatedAt` |  | |  |  |  |  |

## Source Code

*Source: [https://github.com/msmohanan25022005-ship-it/sap-project-courier-system/blob/d57d98e2175b4f407f7d958842ae8b3931e1cb13/src/z_c_courier.ddls.asddls](https://github.com/msmohanan25022005-ship-it/sap-project-courier-system/blob/d57d98e2175b4f407f7d958842ae8b3931e1cb13/src/z_c_courier.ddls.asddls)*

```abap
@EndUserText.label: 'Projection View for Courier'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity Z_C_COURIER
  provider contract transactional_query
  as projection on Z_I_COURIER
{
  @Search.defaultSearchElement: true
  key ParcelId,
  @Search.defaultSearchElement: true
  ItemName,
  Sender,
  Receiver,
  Status,
  
  CreatedBy,
  CreatedAt,
  LastUpdatedBy,
  LastUpdatedAt,
  LocalLastUpdatedAt
}
```
