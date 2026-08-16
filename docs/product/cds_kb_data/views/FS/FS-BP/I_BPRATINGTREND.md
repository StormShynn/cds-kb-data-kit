---
name: I_BPRATINGTREND
description: "Bpratingtrend"
semantic_vi: "View Bpratingtrend hiển thị xu hướng đánh giá đối tác kinh doanh, cung cấp thông tin về hiệu suất của đối tác kinh doanh theo thời gian. Nó được sử dụng để phân tích và theo dõi thay đổi trong đánh giá đối tác kinh doanh."
keywords:
  - "business partner"
  - "rating trend"
  - "đối tác kinh doanh"
  - "xu hướng đánh giá"
  - "sap cds view"
  - "fs-bp"
  - "lob other"
semantic_en: "The Bpratingtrend view exposes business partner rating trends, providing insights into the performance of business partners over time. It is used to analyze and track changes in business partner ratings."
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
# I_BPRATINGTREND

**Bpratingtrend**

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
| `BusinessPartnerRatingTrend` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_tendency )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatingTrendText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATINGTREND',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingTrend',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BusinessPartnerRatingTrendCode',
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
             ignorePropagatedAnnotations: true 
           }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Trend of Business Partner'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPRatingTrend
  as select from dd07l

  association [0..*] to I_BPRatingTrendText as _Text on $projection.BusinessPartnerRatingTrend = _Text.BusinessPartnerRatingTrend
{
     @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_tendency ) as BusinessPartnerRatingTrend,
      _Text
}
where
      dd07l.domname  = 'BP_TENDENCY'
  and dd07l.as4local = 'A'
```
