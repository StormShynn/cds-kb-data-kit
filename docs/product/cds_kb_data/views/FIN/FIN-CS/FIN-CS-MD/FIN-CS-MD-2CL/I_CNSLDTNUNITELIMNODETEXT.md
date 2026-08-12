---
name: I_CNSLDTNUNITELIMNODETEXT
description: "Cnsldtnunitelimnodetext"
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
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITELIMNODETEXT

**Cnsldtnunitelimnodetext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_nodet` | `spras` |  |  |
| `ConsolidationUnit` | ✓ | |  | `cast(left(_nodet.nodevalue, 25) as fincs_elim_unit preserving type )` |  |  |
| `ConsolidationUnitMdmText` |  | |  | `cast(left(_nodet.nodetxt, 50) as fincs_description_text_50 preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnitElimNode` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSUNITELIMNODT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'ConsolidationUnit',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Unit Mgmt Elim Node - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnUnitElimNodeText
  as select from P_CnsldtnUnitElimNodeText as _nodet

  association [1..1] to I_Language            as _Language    on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnUnitElimNode as _CnsldtnUnit on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _nodet.spras                                                                 as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnUnitForEliminationVH',
          element: 'ConsolidationUnit'
        }
      }]
  key cast(left(_nodet.nodevalue, 25) as fincs_elim_unit preserving type )         as ConsolidationUnit,

      @Semantics.text
      cast(left(_nodet.nodetxt, 50) as fincs_description_text_50 preserving type ) as ConsolidationUnitMdmText,


      _Language,
      _CnsldtnUnit
}
```
