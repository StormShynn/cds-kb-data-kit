---
name: I_CNSLDTNUNITFORELIMINATIONT_2
description: "Cnsldtnunitforeliminationt 2"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITFORELIMINATIONT_2

**Cnsldtnunitforeliminationt 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConsolidationUnit` | ✓ | |  | `cast(ConsolidationUnit as fincs_elim_unit preserving type )` |  |  |
| `ConsolidationUnitMdmText` |  | |  | `cast(ConsolidationUnitMdmText as fincs_description_text_50 preserving type )` |  |  |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnUnit` | `I_CnsldtnUnitForElimination_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICCUNITFORELIMT2'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'ConsolidationUnit',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnUnitForEliminationText'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Unit for Elimination - Text'
define view entity I_CnsldtnUnitForEliminationT_2
  as select from P_CnsldtnUnitForEliminationT_2

  association [1..1] to I_CnsldtnUnitForElimination_2 as _CnsldtnUnit on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key Language,

      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnUnitForEliminationVH',
          element: 'ConsolidationUnit'
        }
      }]
  key cast(ConsolidationUnit as fincs_elim_unit preserving type )                  as ConsolidationUnit,

      @Semantics.text
      cast(ConsolidationUnitMdmText as fincs_description_text_50 preserving type ) as ConsolidationUnitMdmText,

      
      /* associations */
      _Language,
      _CnsldtnUnit
}
```
