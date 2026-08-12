---
name: I_CNSLDTNFINTRANSTYPEHIERNODET
description: "Cnsldtnfintranstypehiernodet"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINTRANSTYPEHIERNODET

**Cnsldtnfintranstypehiernodet**

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
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `CnsldtnFinTransTypeHierarchy` | ✓ | |  | `cast(_Source.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_Source` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_Source` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Source` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_Source` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_Source` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_Source` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnFinTransTypeHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFTTHNT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnFinTransTypeHierNdeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Trans Type Hier Node - Txt'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFinTransTypeHierNodeT
  as select from P_CnsldtnUnivHierNodeText_2(P_HierarchyType : 'CS07', P_MasterDataType : 'RMVCT' ) as _Source

  association [1..*] to I_CnsldtnFinTransTypeHierarchy as _Hierarchy on $projection.CnsldtnFinTransTypeHierarchy = _Hierarchy.CnsldtnFinTransTypeHierarchy
  //                                                                     and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_Source.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type ) as CnsldtnFinTransTypeHierarchy,

  key _Source.HierarchyNode,

      @Semantics.businessDate.to: true
  key _Source.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Source.ValidityStartDate,

      _Source.ParentNode,

      _Source.HierarchyVersion,

      @Semantics.text: true
      _Source.HierarchyNodeText,


      _Language,
      _Hierarchy
};
```
