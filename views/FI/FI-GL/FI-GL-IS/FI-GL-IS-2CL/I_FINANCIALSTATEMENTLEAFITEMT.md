---
name: I_FINANCIALSTATEMENTLEAFITEMT
description: Financialstatementleafitemt
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTLEAFITEMT

**Financialstatementleafitemt**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementLeafItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `FinancialStatementLeafItemName` |  | |  |  |  |  |
| `FinStmntLeafItmLongName` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTMTLFITMT'
@EndUserText.label: 'Financial Statement Leaf - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.representativeKey: 'FinancialStatementLeafItem'
@Metadata.ignorePropagatedAnnotations

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]


define view I_FinancialStatementLeafItemT
  as select from P_FinancialStatementLeafItemT
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
         @ObjectModel.text.element: 'FinStmntLeafItmLongName'
  key    FinancialStatementLeafItem,
         @Semantics.language: true
         @ObjectModel.foreignKey.association: '_Language'
  key    Language,
         @Semantics.text: true
         FinancialStatementLeafItemName,
         @Semantics.text: true
         FinStmntLeafItmLongName,
         _Language
}
```
