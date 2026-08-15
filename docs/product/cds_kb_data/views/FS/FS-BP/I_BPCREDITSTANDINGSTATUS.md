---
name: I_BPCREDITSTANDINGSTATUS
description: "Bpcreditstandingstatus"
semantic_vi: "View Bpcreditstandingstatus cung cấp thông tin về tình trạng tín dụng của đối tác kinh doanh, có thể được sử dụng để xác định khả năng tín dụng của họ và đưa ra quyết định thông minh về các giao dịch."
keywords:
  - "credit standing"
  - "tình trạng tín dụng"
  - "business partner"
  - "đối tác kinh doanh"
  - "creditworthiness"
  - "khả năng tín dụng"
  - "transaction"
  - "giao dịch"
  - "sap fs-bp"
  - "fs-bp"
semantic_en: "The Bpcreditstandingstatus view provides information about the credit standing status of business partners, which can be used to determine their creditworthiness and make informed decisions about transactions."
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITSTANDINGSTATUS

**Bpcreditstandingstatus**

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
| `BPCreditStandingStatus` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_sol_inf )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCrdtStandingStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTANSTS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPCreditStandingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BPCreditStandingStatusCode',
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
@EndUserText.label: 'Credit Standing Status of BP'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCreditStandingStatus 
  as select from dd07l

  association [0..*] to I_BPCrdtStandingStatusText as _Text on $projection.BPCreditStandingStatus = _Text.BPCreditStandingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_sol_inf ) as BPCreditStandingStatus,
      _Text
}
where
      dd07l.domname  = 'BP_SOL_INF'
  and dd07l.as4local = 'A'
```
