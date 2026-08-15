---
name: I_BPLEGALPROCEEDINGSTATUS
description: "Bplegalproceedingstatus"
semantic_vi: "View I_BPLEGALPROCEEDINGSTATUS hiển thị trạng thái vụ án pháp lý để sử dụng trong các quy trình kinh doanh liên quan đến FS-BP."
keywords:
  - "legal proceeding"
  - "trạng thái vụ án pháp lý"
  - "fs-bp"
  - "business process"
  - "quy trình kinh doanh"
  - "sap"
  - "cds view"
  - "view"
  - "status"
  - "trạng thái"
semantic_en: "The Bplegalproceedingstatus view exposes legal proceeding status data for use in business processes related to FS-BP."
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
  - status
  - component:FS-BP
  - lob:Other
---
# I_BPLEGALPROCEEDINGSTATUS

**Bplegalproceedingstatus**

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
| `BPLegalProceedingStatus` | ✓ | |  | `lgl_proc` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPLegalProceedingStsText` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLPROCSTS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPLegalProceedingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BPLegalProceedingStatusCode',
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
@EndUserText.label: 'Legal Proceedings Status of BP'

define view I_BPLegalProceedingStatus
  as select from fsbpcc_lgl_proc
  association [0..*] to I_BPLegalProceedingStsText as _Text               on $projection.BPLegalProceedingStatus = _Text.BPLegalProceedingStatus
  association [0..*] to I_BPCreditWorthiness       as _BPCreditWorthiness on $projection.BPLegalProceedingStatus = _BPCreditWorthiness.BPLegalProceedingStatus

{
      @ObjectModel.text.association: '_Text'
  key fsbpcc_lgl_proc.lgl_proc as BPLegalProceedingStatus,
  
      _Text,
      _BPCreditWorthiness
}
```
