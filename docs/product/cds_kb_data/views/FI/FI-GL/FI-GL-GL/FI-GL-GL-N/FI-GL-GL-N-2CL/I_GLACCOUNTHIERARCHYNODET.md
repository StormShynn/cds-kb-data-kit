---
name: I_GLACCOUNTHIERARCHYNODET
description: "GL AccountHIERARCHYNODET"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTHIERARCHYNODET

**GL AccountHIERARCHYNODET**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  | `cast ( hrrp_nodet_n.hryid_42 as fis_glaccthier preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `HierarchyNodeShortText` |  | |  | `substring(hrrp_nodet_n.nodetxt, 1, 20)` |  |  |
| `ValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'G/L Account Hierarchy Node - Text'
@Analytics: { dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIGLACCOUNTHNT'
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name:'GLAccountHierarchyNodeText'

define view I_GLAccountHierarchyNodeT
  as select from hrrp_nodet_n

  association [0..1] to I_Language           as _Language  on $projection.Language = _Language.Language

  association [0..*] to I_GLAccountHierarchy as _Hierarchy on $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid_42 as fis_glaccthier preserving type ) as GLAccountHierarchy,
      @ObjectModel.text.element: 'HierarchyNodeText'
  key hrrp_nodet_n.hrynode                                             as HierarchyNode,
      @Semantics.businessDate.to: true
  key hrrp_nodet_n.hryvalto                                            as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                               as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                                             as HierarchyNodeText,
      @Semantics.text: true
      substring(hrrp_nodet_n.nodetxt, 1, 20)                           as HierarchyNodeShortText,

      @Semantics.businessDate.from: true
      hrrp_nodet_n.hryvalfrom                                          as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = 'FSVN';
```
