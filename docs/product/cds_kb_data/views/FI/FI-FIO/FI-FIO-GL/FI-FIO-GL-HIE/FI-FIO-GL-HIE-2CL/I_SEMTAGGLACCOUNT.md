---
name: I_SEMTAGGLACCOUNT
description: "Semtaggl Account"
app_component: FI-FIO-GL-HIE-2CL
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
  - interface-view
  - gl-account
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_SEMTAGGLACCOUNT

**Semtaggl Account**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
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
| `GLAccountHierarchy` |  | |  |  |  |  |
| `HierarchyNode` |  | |  | `cast ( '' as hrynode )` |  |  |
| `SemanticTag` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `FunctionalAreaIsUsed` |  | |  |  |  |  |
| `IsFunctionalAreaPermitted` |  | |  | `cast( case when SemanticTag = 'NTINC_ALAC' then '' else FunctionalAreaIsUsed end as xfber_011 )` |  |  |
| `_GLAccountHierarchyNode` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountHierarchyNode` | `I_GLAccountHierarchyNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'G/L Account with Semantic Tag'
@AbapCatalog.sqlViewName: 'IFISEMTAGGLACCT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #CUBE,
              dataExtraction.enabled: true
            }
//@ObjectModel.representativeKey: 'SemanticTag'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name:'SemanticTagGeneralLedger'

define view I_SemTagGLAccount
  as select distinct from P_SemTagGLAccount

  association [0..*] to I_GLAccountHierarchyNode as _GLAccountHierarchyNode on  $projection.GLAccountHierarchy = _GLAccountHierarchyNode.GLAccountHierarchy
                                                                            and $projection.HierarchyNode      = _GLAccountHierarchyNode.HierarchyNode

{
  @ObjectModel.foreignKey.association: '_Hierarchy'
  GLAccountHierarchy,
  cast ( '' as hrynode )                                                                          as HierarchyNode,
  @ObjectModel.foreignKey.association: '_SemanticTag'
  SemanticTag,
  @Semantics.businessDate.to: true
  ValidityEndDate,
  @Semantics.businessDate.from: true
  ValidityStartDate,
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  ChartOfAccounts,
  @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  GLAccount,
  FunctionalAreaIsUsed,
  cast( case when SemanticTag = 'NTINC_ALAC' then '' else FunctionalAreaIsUsed end as xfber_011 ) as IsFunctionalAreaPermitted,
  _Hierarchy,
  //OBSOLETING, DO NOT USE THIS ASSOCIATION!!!
  _GLAccountHierarchyNode,
  _SemanticTag,
  _ChartOfAccounts,
  _GLAccountInChartOfAccounts

}
```
