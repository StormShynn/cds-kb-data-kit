---
name: I_BILLINGRELEVANCECODE
description: "Billingrelevancecode"
semantic_vi: "View I_BILLINGRELEVANCECODE hiển thị mã liên quan đến hóa đơn, được sử dụng để xác định mức độ liên quan của các tài liệu hóa đơn trong thành phần Sales và Distribution của SAP. View này có thể được sử dụng để truy xuất và phân tích các mã liên quan đến hóa đơn cho các mục đích kinh doanh khác nhau."
keywords:
  - "billing relevance code"
  - "mã liên quan đến hóa đơn"
  - "sales and distribution"
  - "sản phẩm và phân phối"
  - "sap"
  - "sdsd"
  - "billing document"
  - "tài liệu hóa đơn"
  - "relevance code"
  - "mã liên quan"
semantic_en: "The I_BILLINGRELEVANCECODE view exposes billing relevance codes, which are used to determine the relevance of billing documents in the Sales and Distribution component of SAP. This view can be used to retrieve and analyze billing relevance codes for various business purposes."
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
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
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - billing
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_BILLINGRELEVANCECODE

**Billingrelevancecode**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingRelevanceCode` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingRelevanceCodeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingRelevanceCode'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Relevance Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLRELVCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name:'SDDocItemBillingRelevanceCode'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingRelevanceCode
as select from dd07l

association [0..*] to I_BillingRelevanceCodeText as _Text on $projection.BillingRelevanceCode = _Text.BillingRelevanceCode
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as BillingRelevanceCode,
    
    _Text

}
where (dd07l.domname = 'FKREL') and (dd07l.as4local = 'A');
```
