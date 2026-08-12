---
name: I_CNSLDTNFINSTMNTITEMTYPEVH
description: "Cnsldtnfinstmntitemtypevh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSTMNTITEMTYPEVH

**Cnsldtnfinstmntitemtypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationFSItemType` | ✓ | |  |  |  |  |
| `ConsolidationFSItemTypeText` |  | |  | `cast(_Text[1: Language=$session.system_language].ConsolidationFSItemTypeText as fincs_description_text_60 preserving type )` |  |  |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'ConsolidationFSItemType',
  semanticKey: ['ConsolidationFSItemType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Financial Statement Item Type'

define view entity I_CnsldtnFinStmntItemTypeVH
  as select from I_CnsldtnFinStmntItemType as _FSItemType
{
      @ObjectModel.text.element: ['ConsolidationFSItemTypeText']
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ConsolidationFSItemType,


      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_Text[1: Language=$session.system_language].ConsolidationFSItemTypeText as fincs_description_text_60 preserving type ) as ConsolidationFSItemTypeText  
}
```
