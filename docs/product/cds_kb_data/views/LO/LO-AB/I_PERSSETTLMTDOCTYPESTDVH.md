---
name: I_PERSSETTLMTDOCTYPESTDVH
description: "Perssettlmtdoctypestdvh"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOCTYPESTDVH

**Perssettlmtdoctypestdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Settlement Doc Type for Personnel Settlements'
@AccessControl: { 
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_Text' ],
  personalData.blocking: #('TRANSACTIONAL_DATA') 
}
@ObjectModel: {
   dataCategory:          #VALUE_HELP,
   representativeKey:     'SettlmtDocType',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@Analytics: {
   internalName: #LOCAL
}
@UI.headerInfo:{
   typeName:       'Settlement Document Type',
   typeNamePlural: 'Settlement Document Types'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true

define view entity I_PersSettlmtDocTypeStdVH
  as select from I_SettlmtDocType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI.textArrangement: #TEXT_FIRST
  key SettlmtDocType,

      /* Associations */
      _Text
}
where
  SAPObjectType = 'PersonnelSettlementDocument'
```
