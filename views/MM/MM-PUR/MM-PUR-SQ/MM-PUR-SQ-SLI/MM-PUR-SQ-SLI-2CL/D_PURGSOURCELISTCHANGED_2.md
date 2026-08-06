---
name: D_PURGSOURCELISTCHANGED_2
description: D Purgsourcelistchanged 2
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
# D_PURGSOURCELISTCHANGED_2

**D Purgsourcelistchanged 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `dzeord` | `key SourceListRecord : dzeord` |
| `SourceListCreationDate` | `erdat` |
| `SourceListCreatedByUser` | `ernam` |
| `NewValueOfValidityStartDate` | `bdatu` |
| `NewValueOfValidityEndDate` | `bdatu` |
| `SupplierNewValue` | `lifnr` |
| `PurchasingOrganizationNewValue` | `ekorg` |
| `PurchaseOrderUnit` | `meins` |
| `OldValueOfValidityStartDate` | `bdatu` |
| `OldValueOfValidityEndDate` | `bdatu` |
| `SupplierOldValue` | `lifnr` |
| `PurchasingOrganizationOldValue` | `ekorg` |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Changed'
define abstract entity D_PurgSourceListChanged_2
{
  key SourceListRecord               : dzeord;
      SourceListCreationDate         : erdat;
      SourceListCreatedByUser        : ernam;
      @Event.previousValue.element   :'OldValueOfValidityStartDate'
      NewValueOfValidityStartDate    : bdatu;
      @Event.previousValue.element   :'OldValueOfValidityEndDate'
      NewValueOfValidityEndDate      : bdatu;
      @Event.previousValue.element   :'SupplierOldValue'
      SupplierNewValue               : lifnr;
      @Event.previousValue.element   :'PurchasingOrganizationOldValue'
      PurchasingOrganizationNewValue : ekorg;
      PurchaseOrderUnit              : meins;
      OldValueOfValidityStartDate    : bdatu;
      OldValueOfValidityEndDate      : bdatu;
      SupplierOldValue               : lifnr;
      PurchasingOrganizationOldValue : ekorg;
 
}
```
