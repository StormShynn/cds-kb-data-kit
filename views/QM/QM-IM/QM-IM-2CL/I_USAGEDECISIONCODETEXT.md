---
name: I_USAGEDECISIONCODETEXT
description: "Usagedecisioncodetext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_USAGEDECISIONCODETEXT

**Usagedecisioncodetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UsageDecisionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `UsageDecisionCode` | ✓ | |  | `code` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `UsageDecisionCodeText` |  | |  | `cast( kurztext as vdm_qtxt_code preserving type )` |  |  |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageDecisionCodeGroup` | `I_UsageDecisionCodeGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSGDECCODET'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Decision Code - Text'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel:{
     usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A 
},
     dataCategory: #TEXT,
     representativeKey: 'UsageDecisionCode'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_UsageDecisionCodeText as select from qpct
    association [0..1] to I_UsageDecisionCodeGroup as _UsageDecisionCodeGroup
      on $projection.UsageDecisionCodeGroup = _UsageDecisionCodeGroup.UsageDecisionCodeGroup
{
   @Consumption.valueHelpDefinition: [ 
     { entity:  { name:    'I_UsageDecisionCodeGroupStdVH',
                  element: 'UsageDecisionCodeGroup' }
     }]
   @ObjectModel.foreignKey.association: '_UsageDecisionCodeGroup'
   key qpct.codegruppe as UsageDecisionCodeGroup,
   key qpct.code as UsageDecisionCode,
   @Semantics.language: true
   key sprache as Language,
   @Semantics.text: true
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
   cast( kurztext as vdm_qtxt_code preserving type ) as UsageDecisionCodeText,
   
   _UsageDecisionCodeGroup
   
}
where qpct.katalogart = '3' // Usage Decision
  and qpct.version = '000001'
```
