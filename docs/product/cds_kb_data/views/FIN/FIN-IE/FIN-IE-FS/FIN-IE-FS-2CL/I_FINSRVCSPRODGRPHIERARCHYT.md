---
name: I_FINSRVCSPRODGRPHIERARCHYT
description: "Finsrvcsprodgrphierarchyt"
app_component: FIN-IE-FS-2CL
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
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSRVCSPRODGRPHIERARCHYT

**Finsrvcsprodgrphierarchyt**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
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
| `FinSrvcsProductGroupHierarchy` | ✓ | |  | `cast( HierDirectory.HierarchyShortID as ffs_hryid_product_group preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `FinSrvcsProdGroupHierarchyName` |  | |  | `HierarchyName` |  |  |
| `_ProdGroupHierarchy` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Fin Srvcs Product Group Hierarchy - Text'
@ObjectModel:{
    representativeKey: 'FinSrvcsProductGroupHierarchy',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET
                           ]
}
@VDM :{
viewType: #COMPOSITE,
lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view entity I_FinSrvcsProdGrpHierarchyT
  as select from                      R_HierRuntimeRprstnText     as HierDirectoryText
    left outer many to exact one join R_HierRuntimeRepresentation as HierDirectory on  HierDirectoryText.HierarchyID     = HierDirectory.HierarchyID
                                                                                   and HierDirectoryText.ValidityEndDate = HierDirectory.ValidityEndDate
  association to parent I_FinSrvcsProdGroupHierarchy as _ProdGroupHierarchy on  $projection.FinSrvcsProductGroupHierarchy = _ProdGroupHierarchy.FinSrvcsProductGroupHierarchy
                                                                            and $projection.ValidityEndDate               = _ProdGroupHierarchy.ValidityEndDate
{
         @ObjectModel.foreignKey.association: '_ProdGroupHierarchy'
         @ObjectModel.text.element: ['FinSrvcsProdGroupHierarchyName']
  key    cast( HierDirectory.HierarchyShortID as ffs_hryid_product_group preserving type ) as FinSrvcsProductGroupHierarchy,
         @Semantics.businessDate.to: true
  key    HierDirectoryText.ValidityEndDate                                                 as ValidityEndDate,
         @Semantics.language
         @ObjectModel.foreignKey.association: '_Language'
  key    HierDirectoryText.Language                                                        as Language,
         @Semantics.businessDate.from: true
         HierDirectoryText.ValidityStartDate                                               as ValidityStartDate,
         @Search: { defaultSearchElement:  true, ranking: #LOW, fuzzinessThreshold: 0.8 }
         @Semantics.text: true
         HierDirectoryText.HierarchyName                                                   as FinSrvcsProdGroupHierarchyName,
         HierDirectoryText._Language,
         _ProdGroupHierarchy
}
where
  HierDirectory.HierarchyType = 'FFS1'
```
