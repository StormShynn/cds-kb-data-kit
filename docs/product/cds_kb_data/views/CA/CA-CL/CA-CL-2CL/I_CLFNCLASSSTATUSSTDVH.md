---
name: I_CLFNCLASSSTATUSSTDVH
description: "Clfnclassstatusstdvh"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - value-help
  - standard-value-help
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSSTATUSSTDVH

**Clfnclassstatusstdvh**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  |  | `CHAR(3)` | Class Type |
| `ClassStatus` | ✓ | |  |  | `CHAR(1)` | Class status |
| `_Text` |  | |  | `_ClassStatusText` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLC9VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ClassStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities:
  [  #VALUE_HELP_PROVIDER,
     #SEARCHABLE_ENTITY                ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view I_ClfnClassStatusStdVH 
  as select from I_ClfnClassStatus
{
  key ClassType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key ClassStatus,

      _ClassStatusText as _Text
}
```
