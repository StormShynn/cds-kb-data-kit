---
name: I_BILLINGCONTROLCATEGORYTEXT
description: "Billingcontrolcategorytext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
