---
name: I_BILLINGCONTROLCATEGORY
description: "Billingcontrolcategory"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
