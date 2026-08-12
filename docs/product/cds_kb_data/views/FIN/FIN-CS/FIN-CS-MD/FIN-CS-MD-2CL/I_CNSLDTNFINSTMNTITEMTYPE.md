---
name: I_CNSLDTNFINSTMNTITEMTYPE
description: "Cnsldtnfinstmntitemtype"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSTMNTITEMTYPE

**Cnsldtnfinstmntitemtype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationFSItemType` | ✓ | |  | `cast ( _Domain.DomainValue as fincs_fsitemtype preserving type )` |  |  |
| `_FSItemTypeSignLogic` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FSItemTypeSignLogic` | `I_CnsldtnFSItemTypeSignLogic` | [0..1] |
| `_Text` | `I_CnsldtnFinStmntItemTypeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICNSLDTNFSITMTYP'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #S},
    resultSet.sizeCategory: #XS,
  representativeKey: 'ConsolidationFSItemType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFinStatementItemType'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Financial Statement Item Type'
define view entity I_CnsldtnFinStmntItemType
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_ITTYPE') as _Domain

  association [0..1] to I_CnsldtnFSItemTypeSignLogic as _FSItemTypeSignLogic on $projection.ConsolidationFSItemType = _FSItemTypeSignLogic.ConsolidationFSItemType

  association [0..*] to I_CnsldtnFinStmntItemTypeT   as _Text                on $projection.ConsolidationFSItemType = _Text.ConsolidationFSItemType

{
           @ObjectModel.text.association: '_Text'
           @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFinStmntItemTypeVH', element: 'ConsolidationFSItemType' } }]
  key      cast ( _Domain.DomainValue  as fincs_fsitemtype preserving type ) as ConsolidationFSItemType,

           /* associations */
           _Text,
           _FSItemTypeSignLogic
}
```
