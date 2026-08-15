---
name: I_BPRATINGPROCEDURE
description: "Bpratingprocedure"
semantic_vi: "View Bpratingprocedure cung cấp dữ liệu về thủ tục đánh giá đối tác kinh doanh, được sử dụng để xác định yêu cầu đánh giá và ngày truy cập đối với đối tác kinh doanh. Nó thường được sử dụng trong thành phần FS-BP để quản lý đánh giá đối tác kinh doanh."
keywords:
  - "business partner rating"
  - "thủ tục đánh giá đối tác kinh doanh"
  - "fs-bp"
  - "business partner"
  - "đối tác kinh doanh"
  - "rating procedure"
  - "thủ tục đánh giá"
  - "sap"
  - "cds view"
semantic_en: "The Bpratingprocedure view provides business partner rating procedure data, which is used to determine the rating requirements and access days for business partners. It is typically used in the FS-BP component to manage business partner ratings."
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
# I_BPRATINGPROCEDURE

**Bpratingprocedure**

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
| `BusinessPartnerRatingProcedure` | ✓ | |  | `grade_method` |  |  |
| `BPRatingIsRequired` |  | |  | `flg_required` |  |  |
| `BusinessPartnerRatingIsDefault` |  | |  | `flg_default` |  |  |
| `BPRatingStandardAccessDays` |  | |  | `grade_meth_permitted_period` |  |  |
| `BPRatgPermittedPerdIsRelevant` |  | |  | `''` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPRating` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatingProcedureText` | [0..*] |
| `_BPRating` | `I_BusinessPartnerRating` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCED',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingProcedure',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BPRatingProcedureCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION                
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true // For C1-Release
           }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Procedure of Business Partner'

define view I_BPRatingProcedure
  as select from tpz21

  association [0..*] to I_BPRatingProcedureText as _Text     on $projection.BusinessPartnerRatingProcedure = _Text.BusinessPartnerRatingProcedure
  association [0..*] to I_BusinessPartnerRating as _BPRating on $projection.BusinessPartnerRatingProcedure = _BPRating.BusinessPartnerRatingProcedure

{
      @ObjectModel.text.association: '_Text'
  key tpz21.grade_method                as BusinessPartnerRatingProcedure,
      tpz21.flg_required                as BPRatingIsRequired,
      tpz21.flg_default                 as BusinessPartnerRatingIsDefault,
      tpz21.grade_meth_permitted_period as BPRatingStandardAccessDays,

      //obsolete
      '' as BPRatgPermittedPerdIsRelevant,

      _Text,
      _BPRating
}
```
