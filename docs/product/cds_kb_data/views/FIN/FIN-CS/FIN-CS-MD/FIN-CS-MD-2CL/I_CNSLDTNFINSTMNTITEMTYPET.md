---
name: I_CNSLDTNFINSTMNTITEMTYPET
description: "Cnsldtnfinstmntitemtypet"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSTMNTITEMTYPET

**Cnsldtnfinstmntitemtypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainText.Language as spras preserving type )` |  |  |
| `ConsolidationFSItemType` | ✓ | |  | `cast ( _DomainText.DomainValue as fincs_fsitemtype preserving type )` |  |  |
| `ConsolidationFSItemTypeText` |  | |  | `cast(_DomainText.DomainValueText as fincs_fsitemtype_desc preserving type )` |  |  |
| `_FSItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FSItemType` | `I_CnsldtnFinStmntItemType` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITMTYPT'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationFSItemType',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Financial Statement Item Type - Text'

define view entity I_CnsldtnFinStmntItemTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_ITTYPE') as _DomainText

  association [1..1] to I_CnsldtnFinStmntItemType as _FSItemType on $projection.ConsolidationFSItemType = _FSItemType.ConsolidationFSItemType
{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   cast(_DomainText.Language as spras preserving type )                        as Language,

        @ObjectModel.foreignKey.association: '_FSItemType'
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFinStmntItemTypeVH', element: 'ConsolidationFSItemType' } }]
  key   cast ( _DomainText.DomainValue  as fincs_fsitemtype preserving type )       as ConsolidationFSItemType,

        @Semantics.text
        cast(_DomainText.DomainValueText as fincs_fsitemtype_desc preserving type ) as ConsolidationFSItemTypeText,


        _FSItemType,
        _Language
};
```
