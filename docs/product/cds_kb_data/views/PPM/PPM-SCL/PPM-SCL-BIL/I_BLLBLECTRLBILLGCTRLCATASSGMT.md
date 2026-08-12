---
name: I_BLLBLECTRLBILLGCTRLCATASSGMT
description: "Bllblectrlbillgctrlcatassgmt"
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
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_BLLBLECTRLBILLGCTRLCATASSGMT

**Bllblectrlbillgctrlcatassgmt**

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
| `BillableControl` | ✓ | |  | `bemot` |  |  |
| `BillingControlCategory` |  | |  | `billgctrlcat` |  |  |
| `_BillingControlCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingControlCategoryText` | `I_BillingControlCategoryText` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'FETCH FROM TABLE TBILLGCTRLCAT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: {  
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType: {
        sizeCategory: #S,
        dataClass:  #MASTER,
        serviceQuality: #B
    },
    representativeKey: 'BillableControl'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.technicalName: 'IBILGCTRLCATASGMNT'

define view entity I_BllbleCtrlBillgCtrlCatAssgmt
  as select from tbillgctrlcat
  association [0..1] to I_BillingControlCategoryText as _BillingControlCategoryText on  _BillingControlCategoryText.BillingControlCategory = $projection.BillingControlCategory
                                                                                    and _BillingControlCategoryText.Language               = $session.system_language


{
  key bemot        as BillableControl,
      billgctrlcat as BillingControlCategory,

      _BillingControlCategoryText
}
```
