---
name: I_BPRATINGPROCEDUREVH
description: "Bpratingprocedurevh"
semantic_vi: "Chứa các thủ tục xếp hạng đối tác kinh doanh và các thiết lập liên quan, hữu ích khi cấu hình hoặc truy vấn các yêu cầu xếp hạng đối tác kinh doanh."
keywords:
  - "business partner"
  - "rating procedure"
  - "business partner rating"
  - "fs-bp"
  - "sap cds"
  - "value help"
  - "interface view"
semantic_en: "Exposes business partner rating procedures and their associated settings, useful when configuring or querying business partner rating requirements."
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
  - value-help
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDUREVH

**Bpratingprocedurevh**

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
| `BusinessPartnerRatingProcedure` | ✓ | |  |  |  |  |
| `BPRatingIsRequired` |  | |  |  |  |  |
| `BusinessPartnerRatingIsDefault` |  | |  |  |  |  |
| `BPRatingStandardAccessDays` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCVH',
                compiler.compareFilter: true
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingProcedure',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S                           
               },
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'BPRatingProcedureCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #VALUE_HELP_PROVIDER                           
               }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions:true
           }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }                         
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@Search.searchable: true
@EndUserText.label: 'Rating Procedure of Business Partner'

define view I_BPRatingProcedureVH 
  as select from I_BPRatingProcedure 
{
      @ObjectModel.text.element: ['BPRatingProcedureDescription']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8   
  key BusinessPartnerRatingProcedure,
      BPRatingIsRequired,
      BusinessPartnerRatingIsDefault,
      BPRatingStandardAccessDays,

      _Text,
      @Semantics.text: true
      _Text[1:Language = $session.system_language ].BPRatingProcedureDescription
}
```
