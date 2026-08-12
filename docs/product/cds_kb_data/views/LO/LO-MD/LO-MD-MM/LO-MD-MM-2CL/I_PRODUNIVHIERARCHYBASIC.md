---
name: I_PRODUNIVHIERARCHYBASIC
description: "Produnivhierarchybasic"
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVHIERARCHYBASIC

**Produnivhierarchybasic**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `ProdUnivHierarchy` | ✓ | |  | `cast(substring( hryid, 6, 26 ) as prod_hier_id )` |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  | `cast(hryvalto as prodhierarchyvalidityenddate preserving type )` |  |  |
| `ProdHierarchyValidityStartDate` |  | |  | `cast(hryvalfrom as prodhierarchyvaliditystartdate preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `ProdUnivHierLastChangeDateTime` |  | |  | `updtime` |  |  |
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdUniversalHierarchyText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDUNIVHRYB',
  compiler.compareFilter: true,
  preserveKey: true
 }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
        enabled: true
    } 
}
@EndUserText.label: 'Product Hierarchy Directory'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  representativeKey: 'ProdUnivHierarchy',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]   
@ObjectModel.sapObjectNodeType.name:'ProductUniversalHierarchy'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ProdUnivHierarchyBasic
  as select from hrrp_directory
  //temporal associations
  association [0..*] to I_ProdUniversalHierarchyText_2 as _Text on $projection.ProdUnivHierarchy = _Text.ProdUnivHierarchy
  //                                                              and $projection.ProdHierarchyValidityEndDate = _Text.ProdHierarchyValidityEndDate

{
      @ObjectModel.text.association: '_Text'
      // length of substring if set more than 20, can get _DRAFT shown for simulation
  key cast(substring( hryid, 6, 26 )  as prod_hier_id )                   as ProdUnivHierarchy,
      //" hryver not required, Timeframe will not overlap => different version not required.
      //  key hryver     as ProductHierarchyVersion,
      @Semantics.businessDate.to: true
  key cast(hryvalto as prodhierarchyvalidityenddate preserving type )     as ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hryvalfrom as prodhierarchyvaliditystartdate preserving type ) as ProdHierarchyValidityStartDate,
      @Semantics.user.lastChangedBy: true
      upduser                                                             as LastChangedByUser,
      //the following Last changed timestamp is used for caching 
      //and thus Performance improvement of Hierarchy access like in SAC BCP: 2180060182
      @Semantics.systemDateTime.lastChangedAt: true
      updtime                                                             as ProdUnivHierLastChangeDateTime,
      hrytyp                                                              as HierarchyType,
      _Text
}
where
     hrytyp = 'MD01'
  or hrytyp = 'MD02'
```
