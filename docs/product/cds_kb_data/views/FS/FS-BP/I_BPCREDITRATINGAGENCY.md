---
name: I_BPCREDITRATINGAGENCY
description: "Bpcreditratingagency"
semantic_vi: "View Bpcreditratingagency cung cấp thông tin về các cơ quan đánh giá tín nhiệm tín dụng, được sử dụng để đánh giá khả năng tín nhiệm của các doanh nghiệp hoặc cá nhân."
keywords:
  - "credit rating agency"
  - "đánh giá tín nhiệm tín dụng"
  - "fs-bp"
  - "creditworthiness"
  - "khả năng tín nhiệm"
  - "sap cds view"
  - "view i_bpcreditratingagency"
semantic_en: "The Bpcreditratingagency view provides information about credit rating agencies, which are used to evaluate the creditworthiness of businesses or individuals."
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
# I_BPCREDITRATINGAGENCY

**Bpcreditratingagency**

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
| `CreditRatingAgency` | ✓ | |  | `sol_ins` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCreditRatingAgencyText` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTRATGAGCY',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'CreditRatingAgency',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                //sapObjectNodeType.name: '',
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
@EndUserText.label: 'Rating Agency of Business Partner'

define view I_BPCreditRatingAgency   
  as select from tp07
   association [0..*] to I_BPCreditRatingAgencyText as _Text               on $projection.CreditRatingAgency = _Text.CreditRatingAgency
   association [0..*] to I_BPCreditWorthiness       as _BPCreditWorthiness on $projection.CreditRatingAgency = _BPCreditWorthiness.CreditRatingAgency
{
      @ObjectModel.text.association: '_Text'
  key tp07.sol_ins as CreditRatingAgency, 

      _Text,
      _BPCreditWorthiness
}
```
