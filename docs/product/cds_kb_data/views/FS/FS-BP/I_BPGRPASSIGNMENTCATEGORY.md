---
name: I_BPGRPASSIGNMENTCATEGORY
description: "Bpgrpassignmentcategory"
semantic_vi: "View Bpgrpassignmentcategory hiển thị dữ liệu kinh doanh liên quan đến các loại phân loại nhóm trong ứng dụng FS-BP. Nó được sử dụng để truy cập và chỉnh sửa dữ liệu này."
keywords:
  - "fs-bp"
  - "group assignment category"
  - "phân loại nhóm"
  - "bpgrpassignmentcategory"
  - "fs"
  - "interface view"
  - "component fs-bp"
  - "lob other"
  - "business data"
  - "dữ liệu kinh doanh"
semantic_en: "The Bpgrpassignmentcategory view exposes business data related to group assignment categories in the FS-BP application. It is used to access and manipulate this data."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_BPGRPASSIGNMENTCATEGORY

**Bpgrpassignmentcategory**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPGroupAssignmentCategory` | ✓ | |  | `cast ( dd07l.domvalue_l as vvgidtype_at )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPGrpAssignmentCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPGRPASSGMT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },
                representativeKey: 'BPGroupAssignmentCategory',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'AT_BPGrpAssignmentCategoryCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION    
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Group Assignment Category'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPGrpAssignmentCategory
  as select from dd07l
  association [0..*] to I_BPGrpAssignmentCategoryText as _Text on $projection.BPGroupAssignmentCategory = _Text.BPGroupAssignmentCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as vvgidtype_at ) as BPGroupAssignmentCategory,
      _Text
}
where
      dd07l.domname  = 'VVGIDTYPE_AT'
  and dd07l.as4local = 'A'
```
