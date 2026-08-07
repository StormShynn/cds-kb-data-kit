---
name: D_PURGSOURCELISTDELETED_2
description: D Purgsourcelistdeleted 2
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
# D_PURGSOURCELISTDELETED_2

**D Purgsourcelistdeleted 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `dzeord` |  | |  | `key SourceListRecord : dzeord` |
| `SourceListCreationDate` |  | |  | `erdat` |
| `SourceListCreatedByUser` |  | |  | `ernam` |
| `ValidityStartDate` |  | |  | `bdatu` |
| `ValidityEndDate` |  | |  | `bdatu` |
| `Supplier` |  | |  | `lifnr` |
| `PurchasingOrganization` |  | |  | `ekorg` |
| `PurchaseOrderUnit` |  | |  | `meins` |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Deleted'
define abstract entity D_PurgSourceListDeleted_2
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
