---
name: I_COMPANYCODEHIERNODET
description: "Company CodeHIERNODET"
app_component: FI-GL-GL-N-2CL
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
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODEHIERNODET

**Company CodeHIERNODET**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCodeHierarchy` | ✓ | |  | `cast ( hrrp_nodet_n.hryid_42 as fis_hryid_ccode_42 preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast (hrrp_nodet_n.hryvalto as fis_datbi)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `ValidityStartDate` |  | |  | `cast (hrrp_nodet_n.hryvalfrom as fis_datab)` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_CompanyCodeHierarchy` | [1..*] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'Company Code Hierarchy Node - Text'
@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOCODEHNT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name:'CompanyCodeHierarchyNodeText'

define view I_CompanyCodeHierNodeT
  as select from hrrp_nodet_n

  association [0..1] to I_Language             as _Language  on $projection.Language = _Language.Language

  association [1..*] to I_CompanyCodeHierarchy as _Hierarchy on $projection.CompanyCodeHierarchy = _Hierarchy.CompanyCodeHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid_42 as fis_hryid_ccode_42 preserving type ) as CompanyCodeHierarchy,
  key hrrp_nodet_n.hrynode                                                 as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast (hrrp_nodet_n.hryvalto as fis_datbi)                            as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                                   as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      hrrp_nodet_n.nodetxt                                                 as HierarchyNodeText,
      @Semantics.businessDate.from: true
      cast (hrrp_nodet_n.hryvalfrom as fis_datab)                          as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = 'COCD';
```
