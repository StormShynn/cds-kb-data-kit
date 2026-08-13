---
name: I_BPCOMPANYRELATIONSHIPVH
description: "Bpcompanyrelationshipvh"
semantic_vi: "Chứa thông tin mối quan hệ công ty đối tác kinh doanh, được sử dụng để lấy và hiển thị thông tin công ty liên quan trong ứng dụng chuỗi cung ứng tài chính (FS)."
keywords:
  - "financial supply chain"
  - "fs"
  - "business partner"
  - "company relationship"
  - "đối tác kinh doanh"
  - "mối quan hệ công ty"
  - "chuỗi cung ứng tài chính"
semantic_en: "Exposes business partner company relationships, used to retrieve and display related company information in the Financial Supply Chain (FS) application."
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
# I_BPCOMPANYRELATIONSHIPVH

**Bpcompanyrelationshipvh**

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
| `BPCompanyRelationship` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCORELSHPVH',
                compiler.compareFilter: true
              }
@ObjectModel: { representativeKey: 'BPCompanyRelationship',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                resultSet.sizeCategory: #XS,
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'DE_BPOrgRelationshipCode',
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
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions:true
           }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }                         
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Company Relationship of BP'
define view I_BPCompanyRelationshipVH
  as select from I_BPCompanyRelationship
{     
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'BPCompanyRelationshipDesc' ]
  key BPCompanyRelationship,

      _Text,
      @Semantics.text:true
      _Text[1:Language = $session.system_language ].BPCompanyRelationshipDesc
}
```
