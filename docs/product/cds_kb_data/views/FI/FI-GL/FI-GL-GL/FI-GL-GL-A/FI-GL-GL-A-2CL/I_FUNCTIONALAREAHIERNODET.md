---
name: I_FUNCTIONALAREAHIERNODET
description: "Functionalareahiernodet"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FUNCTIONALAREAHIERNODET

**Functionalareahiernodet**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaHierarchy` | ✓ | |  | `cast ( hrrp_nodet_n.hryid_42 as fis_hryid_functionalarea_42 preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast (hrrp_nodet_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `ValidityStartDate` |  | |  | `cast (hrrp_nodet_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_FunctionalAreaHierarchy` | [1..*] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'Functional Area Hierarchy Node - Text'
@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFNCAREAHNT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'FunctionalAreaHierNodeText'

define view I_FunctionalAreaHierNodeT
  as select from hrrp_nodet_n

  association [0..1] to I_Language                as _Language  on $projection.Language = _Language.Language

  association [1..*] to I_FunctionalAreaHierarchy as _Hierarchy on $projection.FunctionalAreaHierarchy = _Hierarchy.FunctionalAreaHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid_42 as fis_hryid_functionalarea_42 preserving type ) as FunctionalAreaHierarchy,
  key hrrp_nodet_n.hrynode                                                          as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast (hrrp_nodet_n.hryvalto as fis_datbi preserving type )                    as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                                            as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                                                          as HierarchyNodeText,
      @Semantics.businessDate.from: true
      cast (hrrp_nodet_n.hryvalfrom as fis_datab preserving type )                  as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = '0112';
```
