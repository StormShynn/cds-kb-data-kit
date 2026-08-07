---
name: I_BILLINGCONTROLCATEGORYTEXT
description: Billingcontrolcategorytext
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - billing
  - text
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_BILLINGCONTROLCATEGORYTEXT

**Billingcontrolcategorytext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingControlCategory` | ✓ | |  | `substring( domvalue_l, 1, 8 )` |  |  |
| `BillingControlCategoryText` |  | |  | `ddtext` |  |  |
| `_BillingControlCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingControlCategory` | `I_BillingControlCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILLGCTRLCATTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Billing Control Category - Text'
@AbapCatalog.buffering.status: #SWITCHED_OFF
@AbapCatalog.buffering.type: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'BillingControlCategory'
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
define view I_BillingControlCategoryText
  as select from dd07t
  association [0..1] to I_BillingControlCategory as _BillingControlCategory on $projection.BillingControlCategory = _BillingControlCategory.BillingControlCategory
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                    as  Language,
      @ObjectModel.text.element:  [ 'BillingControlCategoryText' ]
  key substring( domvalue_l, 1, 8 ) as  BillingControlCategory,
      @Semantics.text: true
      dd07t.ddtext                  as  BillingControlCategoryText,
      _BillingControlCategory,
      _Language
}
where
      ( dd07t.domname  = 'BILLGCTRLCAT' or dd07t.domname  = 'BILLGCTRLCAT_BILLABLE' )
  and dd07t.as4local = 'A'
```
