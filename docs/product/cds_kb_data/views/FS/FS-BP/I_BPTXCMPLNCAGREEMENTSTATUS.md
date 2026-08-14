---
name: I_BPTXCMPLNCAGREEMENTSTATUS
description: "Bptxcmplncagreementstatus"
semantic_vi: "Chứa trạng thái của các thỏa thuận tuân thủ thuế, được sử dụng để theo dõi tiến trình của các thỏa thuận trong Financial Services - Banking Platform."
keywords:
  - "tax compliance agreement"
  - "thỏa thuận tuân thủ thuế"
  - "financial services"
  - "dịch vụ tài chính"
  - "banking platform"
  - "mặt bằng ngân hàng"
  - "status"
  - "trạng thái"
  - "agreement"
  - "thỏa thuận"
  - "compliance"
  - "tuân thủ"
semantic_en: "Exposes the status of tax compliance agreements, used to track the progress of agreements in the Financial Services - Banking Platform."
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
# I_BPTXCMPLNCAGREEMENTSTATUS

**Bptxcmplncagreementstatus**

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
| `BPTaxComplianceAgreementStatus` | ✓ | |  | `cast ( dd07l.domvalue_l as fsbp_taxc_agree_status )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPTxCmplncAgrmtStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Compliance: Agreement Status'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                representativeKey: 'BPTaxComplianceAgreementStatus',
                sapObjectNodeType.name: 'BPTxCmplncAgreementStatusCode',
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
@VDM.viewType: #BASIC
@Search.searchable: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BPTxCmplncAgreementStatus as select from dd07l
association [0..*] to I_BPTxCmplncAgrmtStatusText as _Text on $projection.BPTaxComplianceAgreementStatus = _Text.BPTaxComplianceAgreementStatus
{
  
 @Search.defaultSearchElement: true
 @Search.ranking: #HIGH
 @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as fsbp_taxc_agree_status ) as BPTaxComplianceAgreementStatus,
  _Text
  
}

where
      dd07l.domname  = 'FSBP_TAXC_AGREE_STATUS'
  and dd07l.as4local = 'A'
```
