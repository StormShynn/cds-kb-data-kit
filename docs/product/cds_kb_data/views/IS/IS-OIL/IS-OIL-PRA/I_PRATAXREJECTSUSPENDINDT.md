---
name: I_PRATAXREJECTSUSPENDINDT
description: "PRA Tax Reject Suspend Indicator - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDINDT')/$value
semantic_en: "PRA Tax Reject Suspend Indicator - Text"
semantic_vi: "PRA Tax Reject Suspend Indicator - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tax"
  - "reject"
  - "suspend"
  - "indicator"
  - "text"
  - "rejected"
  - "suspended"
  - "type"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXREJECTSUSPENDINDT

**PRA Tax Reject Suspend Indicator - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDINDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RejectedOrSuspendedType` | ✓ | |  | `cast (domvalue_l as oiux3_reject_suspend_ind )` | `CHAR(1)` | Rejection-Suspension Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `RejectedOrSuspendedTypeName` |  | |  | `cast (ddtext as oiu_vdm_rejectsuspentindt_name )` | `CHAR(60)` | Reject/Suspend Indicator |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDINDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDINDT')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reject Suspend Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRJSUSPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'RejectedOrSuspendedType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxRejectSuspendIndT
  as select from dd07t
{
  key cast (domvalue_l as oiux3_reject_suspend_ind )              as RejectedOrSuspendedType,
      @Semantics.language
  key cast( ddlanguage as spras )                                 as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_rejectsuspentindt_name )            as RejectedOrSuspendedTypeName

}
where
      domname  = 'OIUX3_REJECT_SUSPEND_IND'
  and as4local = 'A';
```
