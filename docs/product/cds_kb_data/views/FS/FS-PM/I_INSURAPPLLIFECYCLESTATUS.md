---
name: I_INSURAPPLLIFECYCLESTATUS
description: "Appl Life Cycle Status in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLLIFECYCLESTATUS')/$value
semantic_en: "Appl Life Cycle Status in Insur Plcy"
semantic_vi: "Appl Life Cycle Status in Insur Plcy — CDS view cơ bản dựa trên Appl Life Cycle Status in Insur Plcy."
keywords:
  - "appl"
  - "life"
  - "cycle"
  - "status"
  - "insur"
  - "plcy"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURAPPLLIFECYCLESTATUS

**Appl Life Cycle Status in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLLIFECYCLESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurApplLifeCycSts` | ✓ | |  | `appstat_id` | `NUMC(3)` | Status of Policy |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLLIFECYCLESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLLIFECYCLESTATUS')/$value)*

```abap
@EndUserText.label: 'Appl Life Cycle Status in Insur Plcy'
@ObjectModel:{
    representativeKey: 'InsurApplLifeCycSts',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },    
    sapObjectNodeType.name: 'InsurApplLifeCycleStatus',
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPApplLifeCycSts'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurApplLifeCycleStatus
  as select from /pm0/abuappstat
  composition [0..*] of I_InsurApplLifeCycleStatusT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key appstat_id as InsurApplLifeCycSts,

      _Text
}
```
