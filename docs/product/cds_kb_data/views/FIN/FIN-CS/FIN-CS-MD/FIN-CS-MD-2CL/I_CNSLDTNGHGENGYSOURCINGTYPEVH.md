---
name: I_CNSLDTNGHGENGYSOURCINGTYPEVH
description: "Cnsldtnghgengysourcingtypevh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGENGYSOURCINGTYPEVH

**Cnsldtnghgengysourcingtypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGEnergySourcingType` | ✓ | | `_Source` | `GHGEnergySourcingType` |  |  |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICSGHGENGYSOURCINGTYPEVH'
}

@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGEnergySourcingType',
  semanticKey: ['GHGEnergySourcingType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation GHG Energy Sourcing Type'
define view entity I_CnsldtnGHGEngySourcingTypeVH
  as select from I_CnsldtnGHGEnergySourcingType as _Source
{
      @ObjectModel.text.element: ['GHGEnergySourcingTypeName']
  key _Source.GHGEnergySourcingType,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].GHGEnergySourcingTypeName
}
```
