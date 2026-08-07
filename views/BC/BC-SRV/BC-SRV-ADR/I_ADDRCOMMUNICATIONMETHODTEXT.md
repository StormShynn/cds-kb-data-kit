---
name: I_ADDRCOMMUNICATIONMETHODTEXT
description: Addrcommunicationmethodtext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCOMMUNICATIONMETHODTEXT

**Addrcommunicationmethodtext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CommunicationMediumType` | ✓ | |  | `comm_type` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CommunicationMediumTypeName` |  | |  | `comm_text` | `CHAR(20)` | Communication type description |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Communication Method'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADCOMMMETHODTXT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
 
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddrCommunicationMethodText 
  as select from tsact {
    @Semantics.language: true
    key langu     as Language,
    key comm_type as CommunicationMediumType,
    @Semantics.text: true
    @Search.defaultSearchElement: true
    comm_text as CommunicationMediumTypeName
}
```
