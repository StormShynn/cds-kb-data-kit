---
name: I_ONRREXCEPTIONREASON
description: "ONRR Exception Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value
semantic_en: "ONRR Exception Reason"
semantic_vi: "ONRR Exception Reason — CDS view giao diện dựa trên ONRR Exception Reason."
keywords:
  - "onrr"
  - "exception"
  - "reason"
  - "name"
  - "entity"
  - "inactive"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRREXCEPTIONREASON

**ONRR Exception Reason**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExceptionReason` | ✓ | |  | `sus_reason_cd` | `CHAR(3)` | ONRR-2014 - Suspend Reason Code |
| `ExceptionReasonName` |  | |  | `cast( sus_reason_desc as oiu_vdm_onrr_exception_rsn_nm)` | `CHAR(30)` | ONRR Exception Reason |
| `EntityIsInactive` |  | |  | `inactive_fl` | `CHAR(1)` | Inactive indicator |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value)*

```abap
@EndUserText.label: 'ONRR Exception Reason'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRREXCPTNRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ExceptionReason'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'ONRRSuspenseReasonCode'

define view I_ONRRExceptionReason
  as select from /pra/fp_src
{
      @ObjectModel.text.element:  [ 'ExceptionReasonName' ]
  key sus_reason_cd                                           as ExceptionReason,
      @Semantics.text: true
      cast( sus_reason_desc as oiu_vdm_onrr_exception_rsn_nm) as ExceptionReasonName,
      @Semantics.booleanIndicator: true
      inactive_fl                                             as EntityIsInactive
};
```
