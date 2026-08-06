---
name: I_CLFNCLASSTYPESTDVH
description: Clfnclasstypestdvh
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - value-help
  - standard-value-help
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSTYPESTDVH

**Clfnclasstypestdvh**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ClassType` | `ClassType` |
| `_Text` | `_ClassTypeText` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLSC4VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Class Type of Classification'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ClassType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities:
  [  #VALUE_HELP_PROVIDER,
     #SEARCHABLE_ENTITY                ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view I_ClfnClassTypeStdVH 
  as select from I_ClfnClassTypeBasic
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key ClassType,
  
      _ClassTypeText as _Text
}
where ClassTypeIsInternal <> 'X'
```
