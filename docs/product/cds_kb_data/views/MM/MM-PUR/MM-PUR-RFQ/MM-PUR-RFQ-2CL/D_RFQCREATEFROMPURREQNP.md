---
name: D_RFQCREATEFROMPURREQNP
description: "D Rfqcreatefrompurreqnp"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_RFQCREATEFROMPURREQNP

**D Rfqcreatefrompurreqnp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentType` |  | |  | `esart` |  |  |
| `D_RFQCreateFromPurReqnItemP` |  | |  | `_Items : composition[0..*] of D_RFQCreateFromPurReqnItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'RFQ from Purchase Requisition Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_RFQCreateFromPurReqnP {
  
   PurchasingDocumentType : esart;
   _Items  : composition[0..*] of D_RFQCreateFromPurReqnItemP ;
   
}
```
