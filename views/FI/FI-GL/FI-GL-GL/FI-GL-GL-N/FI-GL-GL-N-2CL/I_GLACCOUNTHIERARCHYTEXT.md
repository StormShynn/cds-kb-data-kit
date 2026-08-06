---
name: I_GLACCOUNTHIERARCHYTEXT
description: GL AccountHIERARCHYTEXT
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - gl-account
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTHIERARCHYTEXT

**GL AccountHIERARCHYTEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GLAccountHierarchy` | `cast ( hrrp_dirt_n.hryid_42 as fis_glaccthier preserving type )` |
| key `ValidityEndDate` | `hrrp_dirt_n.hryvalto` |
| key `Language` | `spras` |
| `ValidityStartDate` | `hrrp_dirt_n.hryvalfrom` |
| `GLAccountHierarchyName` | `hrytxt` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'G/L Account Hierarchy - Text'
//@Analytics: {dataCategory: #TEXT, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIGLACCOUNTHT'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'GLAccountHierarchy'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'GLAccountHierarchyText'

define view I_GLAccountHierarchyText
  as select from hrrp_dirt_n
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language


{
       @Search.defaultSearchElement:true
  key  cast ( hrrp_dirt_n.hryid_42 as fis_glaccthier preserving type ) as GLAccountHierarchy,
       @Semantics.businessDate.to: true
  key  hrrp_dirt_n.hryvalto                                            as ValidityEndDate,
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  spras                                                           as Language,
       @Semantics.businessDate.from: true
       hrrp_dirt_n.hryvalfrom                                          as ValidityStartDate,
       @Semantics.text: true
       @Search:{ defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking:#HIGH }
       hrytxt                                                          as GLAccountHierarchyName,
       _Language
}
where
  hrrp_dirt_n.hrytyp = 'FSVN'
```
