---
name: I_BPOCCUPATIONGROUP
description: "Bpoccupationgroup"
semantic_vi: "View Bpoccupationgroup hiển thị dữ liệu nhóm nghề nghiệp đối tác kinh doanh, có thể sử dụng khi quản lý thông tin đối tác kinh doanh trong ứng dụng thành phần FS-BP."
keywords:
  - "business partner"
  - "occupation group"
  - "fs-bp"
  - "financial services"
  - "banking"
  - "capital markets"
  - "lob other"
  - "interface view"
  - "component fs-bp"
semantic_en: "The Bpoccupationgroup view exposes business partner occupation group data, which is useful when managing business partner information in the Financial Services - Banking and Capital Markets (FS-BP) application component."
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
# I_BPOCCUPATIONGROUP

**Bpoccupationgroup**

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
| `BusinessPartnerOccupationGroup` | ✓ | |  | `jobgr` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPEmployment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPOccupationGroupText` | [0..*] |
| `_BPEmployment` | `I_BPEmployment` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLOCCUP',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerOccupationGroup',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BusinessPartnerOccupation',
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
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Occupation Group of Business Partner'

define view I_BPOccupationGroup
  as select from tb028
  association [0..*] to I_BPOccupationGroupText as _Text         on $projection.BusinessPartnerOccupationGroup = _Text.BusinessPartnerOccupationGroup
  association [0..*] to I_BPEmployment          as _BPEmployment on $projection.BusinessPartnerOccupationGroup = _BPEmployment.BusinessPartnerOccupationGroup
{
      @ObjectModel.text.association: '_Text'
  key tb028.jobgr   as BusinessPartnerOccupationGroup,

     _Text,
     _BPEmployment
}
```
