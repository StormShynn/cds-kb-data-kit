---
name: I_BILLINGCONTROLCATEGORY
description: "Billingcontrolcategory"
semantic_vi: "View I_BILLINGCONTROLCATEGORY hiển thị các loại kiểm soát hóa đơn được sử dụng trong quản lý dự án. Nó được sử dụng để lấy và quản lý các loại kiểm soát hóa đơn cho các dự án."
keywords:
  - "billing control category"
  - "project management"
  - "dự án quản lý"
  - "kiểm soát hóa đơn"
  - "billing control"
  - "project"
  - "dự án"
  - "sap ppm"
  - "sap ppm-scl-bil"
semantic_en: "The I_BILLINGCONTROLCATEGORY view exposes billing control categories used in project management. It is used to retrieve and manage billing control categories for projects."
app_component: PPM-SCL-BIL
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
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - billing
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_BILLINGCONTROLCATEGORY

**Billingcontrolcategory**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
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
| `BillingControlCategory` | ✓ | |  | `substring( domvalue_l, 1, 8 )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingControlCategoryText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IBILLGCTRLCAT'
//@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Billing Control Category'
//@AbapCatalog.buffering.status: #SWITCHED_OFF
//@AbapCatalog.buffering.type: #NONE
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BillingControlCategory'
@ObjectModel.sapObjectNodeType.name: 'BillingControlCategory'
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillingControlCategory
  as select from dd07l
  association [0..*] to I_BillingControlCategoryText as _Text on _Text.BillingControlCategory = $projection.BillingControlCategory
{

    @ObjectModel.text.association: '_Text'
    key substring( domvalue_l, 1, 8 ) as BillingControlCategory,
    _Text
}
where
      dd07l.domname  = 'BILLGCTRLCAT' and dd07l.as4local = 'A'
```
