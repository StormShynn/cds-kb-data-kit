---
name: I_FINSERVICESPRODUCTGROUPSTDVH
description: "Finservicesproductgroupstdvh"
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - value-help
  - standard-value-help
  - product
  - service
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSERVICESPRODUCTGROUPSTDVH

**Finservicesproductgroupstdvh**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialServicesProductGroup` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Financial Services Product Group'
@ObjectModel:{
    representativeKey: 'FinancialServicesProductGroup',
    dataCategory: #VALUE_HELP,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    sapObjectNodeType.name: 'FinancialServicesProductGroup',
    resultSet.sizeCategory: #XS,
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#SEARCHABLE_ENTITY,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#COMPOSITE,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Analytics.technicalName: 'IFINSRVCSPRODGRP'
@AccessControl.authorizationCheck: #MANDATORY
@Search.searchable: true
@Consumption.ranked:true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinServicesProductGroupStdVH
  as select from I_FinServicesProductGroup
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key FinancialServicesProductGroup as FinancialServicesProductGroup,

      _Text
}
```
