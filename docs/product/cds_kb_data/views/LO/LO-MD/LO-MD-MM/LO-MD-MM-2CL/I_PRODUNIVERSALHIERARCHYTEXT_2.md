---
name: I_PRODUNIVERSALHIERARCHYTEXT_2
description: "Produniversalhierarchytext 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVERSALHIERARCHYTEXT_2

**Produniversalhierarchytext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdUnivHierarchy` | ✓ | |  | `cast(substring(text.hryid, 6, 26 ) as prod_hier_id )` |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `ProdHierarchyValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `ProdUnivHierarchyText` |  | |  | `hrytxt` |  |  |
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `_ProductHierarchy` | | ✓ | | | | |
| `_LanguageText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductHierarchy` | `I_ProdUnivHierarchyBasic` | [1..*] |
| `_LanguageText` | `I_LanguageText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDUNIVHRYT2',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Hierarchy - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'ProdUnivHierarchy',
  dataCategory: #TEXT,
  usageType :{
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics:{  
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true
    } 
}
define view I_ProdUniversalHierarchyText_2
  as select from hrrp_directoryt as text
    inner join   hrrp_directory  as dir on  dir.hryid    = text.hryid
                                        and dir.hryver   = text.hryver
                                        and dir.hryvalto = text.hryvalto
  //                                      and dir.hrytyp   = 'MD01'
  //temporal association
  association [1..*] to I_ProdUnivHierarchyBasic as _ProductHierarchy on $projection.ProdUnivHierarchy = _ProductHierarchy.ProdUnivHierarchy
  //                                                                    and $projection.ProdHierarchyValidityEndDate = _ProductHierarchy.ProdHierarchyValidityEndDate
association [0..*] to I_LanguageText as _LanguageText on $projection.Language = _LanguageText.Language
{
      //hrrp_directoryt
      @Semantics.language: true
  key text.spras                                           as Language,
      @ObjectModel.foreignKey.association: '_ProductHierarchy'
  key cast(substring(text.hryid, 6, 26 ) as prod_hier_id ) as ProdUnivHierarchy,
      //  key hryver,
      @Semantics.businessDate.to: true
  key text.hryvalto                                        as ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      text.hryvalfrom                                      as ProdHierarchyValidityStartDate,
      @Semantics.text: true
      hrytxt                                               as ProdUnivHierarchyText,
      dir.hrytyp                                           as HierarchyType,
      _ProductHierarchy,
      _LanguageText 
}
where
     dir.hrytyp = 'MD01'
  or dir.hrytyp = 'MD02'
```
