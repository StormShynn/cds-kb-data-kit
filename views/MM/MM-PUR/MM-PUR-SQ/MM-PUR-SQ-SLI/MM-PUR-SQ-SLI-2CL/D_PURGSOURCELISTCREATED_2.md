---
name: D_PURGSOURCELISTCREATED_2
description: "D Purgsourcelistcreated 2"
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# D_PURGSOURCELISTCREATED_2

**D Purgsourcelistcreated 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `dzeord` |  | |  | `key SourceListRecord : dzeord` |  |  |
| `SourceListCreationDate` |  | |  | `erdat` |  |  |
| `SourceListCreatedByUser` |  | |  | `ernam` |  |  |
| `ValidityStartDate` |  | |  | `bdatu` |  |  |
| `ValidityEndDate` |  | |  | `bdatu` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchaseOrderUnit` |  | |  | `meins` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Created'
define abstract entity D_PurgSourceListCreated_2
{
  key SourceListRecord        : dzeord;
      SourceListCreationDate  : erdat;
      SourceListCreatedByUser : ernam;
      ValidityStartDate       : bdatu;
      ValidityEndDate         : bdatu;
      Supplier                : lifnr;
      PurchasingOrganization  : ekorg;
      PurchaseOrderUnit       : meins;
 
}
```
