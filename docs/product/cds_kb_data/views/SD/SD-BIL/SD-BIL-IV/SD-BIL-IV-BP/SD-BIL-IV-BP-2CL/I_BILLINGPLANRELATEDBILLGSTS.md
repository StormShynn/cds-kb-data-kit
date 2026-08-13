---
name: I_BILLINGPLANRELATEDBILLGSTS
description: "Billingplanrelatedbillgsts"
semantic_vi: "Chứa thông tin trạng thái GST liên quan đến kế hoạch hóa đơn, được sử dụng để lấy trạng thái GST cho kế hoạch hóa đơn trong bán hàng và phân phối."
keywords:
  - "billing plan"
  - "gst status"
  - "sales and distribution"
  - "trạng thái gst"
  - "kế hoạch hóa đơn"
  - "bán hàng và phân phối"
semantic_en: "Exposes billing plan related bill GST statuses, used to retrieve GST status for billing plans in sales and distribution."
app_component: SD-BIL-IV-BP-2CL
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
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - billing
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANRELATEDBILLGSTS

**Billingplanrelatedbillgsts**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
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
| `BillingPlanRelatedBillgStatus` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPlanRelatedBillgStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Billing Status for Billing Plan Date'
@VDM: {
  viewType:#BASIC
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IBPRELTDBILLGSTS',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'BillingPlanRelatedBillgStatus',
   usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ObjectModel.supportedCapabilities:  [  #EXTRACTION_DATA_SOURCE  ]
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BillingPlanRelatedBillgStatus'
define view I_BillingPlanRelatedBillgSts as select from dd07l

association [0..*] to I_BillingPlanRelatedBillgStsT as _Text on $projection.BillingPlanRelatedBillgStatus = _Text.BillingPlanRelatedBillgStatus
{
    @ObjectModel.text.association: '_Text'
    key SUBSTRING(dd07l.domvalue_l, 1, 1) as BillingPlanRelatedBillgStatus,
    
    _Text
}
where (dd07l.domname = 'FKSAF') and (dd07l.as4local = 'A');
```
