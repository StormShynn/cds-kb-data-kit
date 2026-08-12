---
name: I_CNSLDTNGLACCOUNTHIERNODET
description: "Cnsldtngl AccountHIERNODET"
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
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTHIERNODET

**Cnsldtngl AccountHIERNODET**

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
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `ChartOfAccounts` | ✓ | | `_HierarchyNodeText` | `ChartOfAccounts` |  |  |
| `CnsldtnGLAccountHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_glaccounthierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_Hierarchy` | `I_CnsldtnGLAccountHierarchy` | [1..*] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnGLAccountHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn G/L Account Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnGLAccountHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS02', P_MasterDataType: 'RACCT') as _HierarchyNodeText

  association [1..1] to I_CnsldtnGLChartOfAccounts  as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..*] to I_CnsldtnGLAccountHierarchy as _Hierarchy       on  $projection.ChartOfAccounts           = _Hierarchy.ChartOfAccounts
                                                                        and $projection.CnsldtnGLAccountHierarchy = _Hierarchy.CnsldtnGLAccountHierarchy
{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  _HierarchyNodeText.Language,

       @ObjectModel.foreignKey.association: '_ChartOfAccounts'
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnGLChartOfAccountsVH',
           element: 'ChartOfAccounts'
         }
       }]
  key  _HierarchyNodeText.ChartOfAccounts,


       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  cast(_HierarchyNodeText.UniversalHierarchy as fincs_glaccounthierarchy preserving type ) as CnsldtnGLAccountHierarchy,

  key  _HierarchyNodeText.HierarchyNode,

       @Semantics.businessDate.to: true
  key  _HierarchyNodeText.ValidityEndDate,

       @Semantics.businessDate.from: true
       _HierarchyNodeText.ValidityStartDate,

       _HierarchyNodeText.ParentNode,

       _HierarchyNodeText.HierarchyVersion,

       @Semantics.text: true
       _HierarchyNodeText.HierarchyNodeText,


       _Language,
       _ChartOfAccounts,
       _Hierarchy
};
```
