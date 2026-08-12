---
name: I_CNSLDTNFINSTMNTITEMTYPE
description: "Cnsldtnfinstmntitemtype"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
