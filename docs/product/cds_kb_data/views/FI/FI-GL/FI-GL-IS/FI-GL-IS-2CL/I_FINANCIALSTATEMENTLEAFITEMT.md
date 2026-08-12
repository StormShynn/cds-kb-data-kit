---
name: I_FINANCIALSTATEMENTLEAFITEMT
description: "Financialstatementleafitemt"
app_component: FI-GL-IS-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
