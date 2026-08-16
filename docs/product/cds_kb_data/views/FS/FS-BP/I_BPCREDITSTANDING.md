---
name: I_BPCREDITSTANDING
description: "Bpcreditstanding"
semantic_vi: "View I_BPCREDITSTANDING cung cấp thông tin về tình trạng tín dụng của đối tác kinh doanh, giúp đánh giá được khả năng tín dụng và đưa ra quyết định chính xác."
keywords:
  - "business partner"
  - "tình trạng tín dụng"
  - "credit standing"
  - "đối tác kinh doanh"
  - "creditworthiness"
  - "business credit"
  - "tín dụng kinh doanh"
  - "credit evaluation"
  - "đánh giá tín dụng"
semantic_en: "The I_BPCREDITSTANDING view provides business credit standing information for business partners, which can be used to evaluate their creditworthiness and make informed decisions."
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITSTANDING

**Bpcreditstanding**

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
| `BusPartCreditStanding` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_solvncy)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCreditStandingText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCREDSTANDING',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusPartCreditStanding',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BPCreditStandingCode',
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
@EndUserText.label: 'Credit Standing of Business Partner'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCreditStanding
  as select from dd07l
  association [0..*] to I_BPCreditStandingText as _Text on $projection.BusPartCreditStanding = _Text.BusPartCreditStanding

{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_solvncy) as BusPartCreditStanding,
      _Text
}
where
      dd07l.domname  = 'BP_SOLVNCY'
  and dd07l.as4local = 'A'
```
